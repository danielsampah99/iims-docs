import { Callout } from "@/components/callout";
import { QuickLink, QuickLinks } from "@/components/quick-links";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tags = {
	callout: {
		attributes: {
			title: { type: String },
			type: {
				type: String,
				default: "note",
				matches: ["note", "warning"],
				errorLevel: "critical",
			},
		},
		render: Callout,
	},
	figure: {
		selfClosing: true,
		attributes: {
			src: { type: String },
			alt: { type: String },
			className: { type: String },
			caption: { type: String },
			width: { type: Number },
			height: { type: Number },
		},
		render: ({
			src,
			alt = "",
			caption,
			width = 500,
			height = 300,
			className = "",
		}) => (
			<figure className={cn("my-4", className)}>
				<div className="overflow-hidden rounded-lg">
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						className="mx-auto w-full"
						style={{ maxWidth: "100%", height: "auto" }}
					/>
				</div>
				<figcaption>{caption}</figcaption>
			</figure>
		),
	},
	"quick-links": {
		render: QuickLinks,
	},
	"quick-link": {
		selfClosing: true,
		render: QuickLink,
		attributes: {
			title: { type: String },
			description: { type: String },
			icon: { type: String },
			href: { type: String },
		},
	},
};

export default tags;
