"use client";

import { APP_URL, cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC, type ReactNode, useEffect, useState } from "react";

import { Hero } from "@/components/hero";
import { AppIcon } from "@/components/icons/app-icon";
import { Logo } from "@/components/logo";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Navigation } from "@/components/navigation";
import { Search } from "@/components/search";
import { ThemeSelector } from "@/components/theme-selector";

export const AppHeader: FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		function onScroll() {
			setIsScrolled(window.scrollY > 0);
		}
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
				isScrolled
					? "dark:bg-gray-900 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75"
					: "dark:bg-transparent",
			)}
		>
			<div className="mr-6 flex lg:hidden">
				<MobileNavigation />
			</div>
			<div className="relative flex flex-grow basis-0 items-center">
				<Link href="/" aria-label="Home page">
					<Logo className="max-sm:w-9 h-9 w-auto fill-slate-700 lg:block dark:fill-sky-100" />
				</Link>
			</div>
			<div className="-my-5 mr-6 sm:mr-8 md:mr-0">
				<Search />
			</div>
			<div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
				<ThemeSelector className="relative z-10" />
				<Link
					href={APP_URL}
					target="_blank"
					className="group"
					aria-label="Integrated Insurance Management Application"
				>
					<AppIcon />
				</Link>
			</div>
		</header>
	);
};

export function AppLayout({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<div className="flex w-full dark:bg-gray-900 flex-col">
			<AppHeader />

			{isHomePage && <Hero />}

			<div className="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
				<div className="hidden lg:relative lg:block lg:flex-none">
					<div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
					<div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
					<div className="absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" />
					<div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
						<Navigation />
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
