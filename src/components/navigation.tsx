import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import type { MouseEventHandler } from 'react';

export function Navigation({
	className,
	onLinkClick,
}: {
	className?: string;
	onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
	const pathname = usePathname();

	return (
		<nav className={cn('text-base lg:text-sm', className)}>
			<ul className="space-y-9">
				{routes.map((section) => (
					<li key={section.title}>
						<h2 className="font-display font-medium text-slate-900 dark:text-white">{section.title}</h2>
						<ul className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800">
							{section.links.map((link) => (
								<li
									key={link.href}
									className="relative"
								>
									<Link
										href={link.href}
										onClick={onLinkClick}
										className={cn(
											'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
											link.href === pathname
												? 'font-semibold text-sky-500 before:bg-sky-500'
												: 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
										)}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</nav>
	);
}
