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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jolymmiels/remnawave-telegram-shop' },
				{ icon: 'github', label: 'Telegram', href: 'https://t.me/remnawave' },
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
