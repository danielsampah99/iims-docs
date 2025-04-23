import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Project Management and Tracking Software Documentation',
		short_name: 'PMT Docs',
		id: 'https://moen-docs-ui.vercel.app/',
		start_url: '/',
		scope: '/',
		background_color: 'gb(255, 255, 255)',
		theme_color: 'rgb(16, 24, 40)',
		categories: ['documentation', 'productivity', 'project-tracker', 'project-management'],
		display: 'fullscreen',
		orientation: 'portrait-primary',
		icons: [{ src: '/favicon.ico', sizes: 'any' }],
		description:
			"This documentation app provides comprehensive information and guidance on using a Project Management and Tracking (PMT) software. It's designed to help users understand the software's features, improve their productivity, and effectively manage their projects.",
	};
}
