import { AppLayout } from "@/components/page-layout";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

// Using local version of font for open type features
const lexend = localFont({
	src: "../fonts/lexend.woff2",
	display: "swap",
	variable: "--font-lexend",
});

export const metadata: Metadata = {
	title: {
		template: "%s - IIMS Docs",
		default: "IIMS - Integrated Insurance Management System",
	},
	description:
		"Comprehensive documentation for the Integrated Insurance Management System (IIMS)",
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={cn("h-full antialiased", lexend.variable, inter.variable)}
			>
				<ThemeProvider>
					<AppLayout>{children}</AppLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
