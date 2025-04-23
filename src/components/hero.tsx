import Image from "next/image";
import type { ComponentPropsWithoutRef, FC } from "react";

import { Button } from "@/components/button";
import ProjectTrackerApp from "@/images/project-tracker-app.png";

import { APP_URL } from "@/lib/utils";

const DesktopAppScreenshot = "/desktop-app-screenshot.webp";
const MobileAppScreenshot = "/mobile-app-screenshot.webp";

export function TrafficLightsIcon(props: ComponentPropsWithoutRef<"svg">) {
	return (
		<svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
			<circle cx="5" cy="5" r="4.5" />
			<circle cx="21" cy="5" r="4.5" />
			<circle cx="37" cy="5" r="4.5" />
		</svg>
	);
}

export const Hero: FC = () => {
	return (
		<div className="relative isolate overflow-hidden bg-gray-900">
			<SquareGridBackground />
			<div
				aria-hidden="true"
				className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
			>
				<div
					style={{
						clipPath:
							"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
					}}
					className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 pb-24 pt-4 sm:pb-8 lg:flex lg:px-8 lg:py-10">
				<div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
					<h1 className="mt-10 font-bold sm:text-4xl inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-4xl tracking-tight text-transparent">
						Integrated Insurance Management System
					</h1>
					<p className="mt-3 text-lg sm:text-xl tracking-tight text-slate-400">
						All you need to know to use the Integrated Insurance Management
						System (IIMS) - a comprehensive platform for managing insurance
						policies, claims processing, customer relationships, and analytics
						in one unified solution.
					</p>
					<div className="mt-8 flex gap-4 md:justify-start">
						<Button href="/">Get started</Button>
						<Button href={APP_URL} target="_blank" variant="secondary">
							View Application
						</Button>
					</div>
				</div>
				<div className="mx-auto mt-16 flex max-w-2xl sm:mt-10 lg:mr-0 lg:mt-8 lg:max-w-none lg:ml-40 lg:flex-none">
					<div className="w-full flex-none sm:max-w-5xl lg:max-w-none">
						<Image
							src={MobileAppScreenshot}
							alt="App screenshot"
							width={1000}
							height={400}
							className="w-full max-h-[400px] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:hidden"
						/>
						<Image
							src={DesktopAppScreenshot}
							alt="App screenshot"
							width={1000}
							height={500}
							className="w-[76rem] lg:w-[60rem] max-sm:hidden rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const SquareGridBackground = () => (
	<svg
		aria-hidden="true"
		className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
	>
		<defs>
			<pattern
				x="50%"
				y={-1}
				id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
				width={200}
				height={200}
				patternUnits="userSpaceOnUse"
			>
				<path d="M.5 200V.5H200" fill="none" />
			</pattern>
		</defs>
		<svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
			<title>Background</title>
			<path
				d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
				strokeWidth={0}
			/>
		</svg>
		<rect
			fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
			width="100%"
			height="100%"
			strokeWidth={0}
		/>
	</svg>
);
