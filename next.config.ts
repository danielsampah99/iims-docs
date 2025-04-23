import withSearch from "@/markdoc/search.mjs";
import withMarkDoc from "@markdoc/next.js";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "ts", "tsx", "mdoc"],
};

export default withSearch(
	withMarkDoc({ schemaPath: "./src/markdoc" })(nextConfig),
);
