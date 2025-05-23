import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";
import Markdoc from "@markdoc/markdoc";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import glob from "fast-glob";
import { createLoader } from "simple-functional-loader";

const __filename = url.fileURLToPath(import.meta.url);
const slugify = slugifyWithCounter();

const URL_REGEX = /\/page\.md$/;
const TITLE_REGEX = /^title:\s*(.*?)\s*$/m;

function toStringFunction(node) {
	let str =
		node.type === "text" && typeof node.attributes?.content === "string"
			? node.attributes.content
			: "";
	if ("children" in node) {
		for (const child of node.children) {
			str += toStringFunction(child);
		}
	}
	return str;
}

function extractSections(node, sections, isRoot = true) {
	if (isRoot) {
		slugify.reset();
	}
	if (node.type === "heading" || node.type === "paragraph") {
		const content = toStringFunction(node).trim();
		if (node.type === "heading" && node.attributes.level <= 2) {
			const hash = node.attributes?.id ?? slugify(content);
			sections.push([content, hash, []]);
		} else {
			sections.at(-1)[2].push(content);
		}
	} else if ("children" in node) {
		for (const child of node.children) {
			extractSections(child, sections, false);
		}
	}
}

export default function withSearch(nextConfig = {}) {
	const cache = new Map();

	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			config.module.rules.push({
				test: __filename,
				use: [
					createLoader(function () {
						const pagesDir = path.resolve("./src/app");
						this.addContextDependency(pagesDir);

						const files = glob.sync("**/page.md", { cwd: pagesDir });
						const data = files.map((file) => {
							const url =
								file === "page.md" ? "/" : `/${file.replace(URL_REGEX, "")}`;
							const md = fs.readFileSync(path.join(pagesDir, file), "utf8");

							let sections;

							if (cache.get(file)?.[0] === md) {
								sections = cache.get(file)[1];
							} else {
								const ast = Markdoc.parse(md);
								const title =
									ast.attributes?.frontmatter?.match(TITLE_REGEX)?.[1];
								sections = [[title, null, []]];
								extractSections(ast, sections);
								cache.set(file, [md, sections]);
							}

							return { url, sections };
						});

						// When this file is imported within the application
						// the following module is loaded:
						return `
              import FlexSearch from 'flexsearch'

              let sectionIndex = new FlexSearch.Document({
                tokenize: 'full',
                document: {
                  id: 'url',
                  index: 'content',
                  store: ['title', 'pageTitle'],
                },
                context: {
                  resolution: 9,
                  depth: 2,
                  bidirectional: true
                }
              })

              let data = ${JSON.stringify(data)}

              for (let { url, sections } of data) {
                for (let [title, hash, content] of sections) {
                  sectionIndex.add({
                    url: url + (hash ? ('#' + hash) : ''),
                    title,
                    content: [title, ...content].join('\\n'),
                    pageTitle: hash ? sections[0][0] : undefined,
                  })
                }
              }

              export function search(query, options = {}) {
                let result = sectionIndex.search(query, {
                  ...options,
                  enrich: true,
                })
                if (result.length === 0) {
                  return []
                }
                return result[0].result.map((item) => ({
                  url: item.id,
                  title: item.doc.title,
                  pageTitle: item.doc.pageTitle,
                }))
              }
            `;
					}),
				],
			});

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options);
			}

			return config;
		},
	});
}

export const search = (query, options = {}) => {
	return []
}
