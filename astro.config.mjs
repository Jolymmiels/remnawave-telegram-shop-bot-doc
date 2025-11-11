// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://remnawave-doc.example.com',
	integrations: [
		starlight({
			title: 'Remnawave Telegram Shop',
			description: 'Complete documentation for Remnawave Telegram Shop Bot',
			logo: {
				src: './src/assets/logo.svg',
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			social: [
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/remnawavetelegramshop' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Configuration',
					autogenerate: { directory: 'configuration' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Payment Systems',
					autogenerate: { directory: 'payments' },
				},
				{
					label: 'Administration',
					autogenerate: { directory: 'admin' },
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
