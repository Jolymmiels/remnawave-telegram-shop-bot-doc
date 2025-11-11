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
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru-RU',
				},
				en: {
					label: 'English',
					lang: 'en-US',
				},
			},
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			social: [
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/remnawavetelegramshop' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Jolymmiels/remnawave-telegram-shop' },
			],
			sidebar: [
				{
					label: 'Начало',
					translations: { en: 'Getting Started' },
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Конфигурация',
					translations: { en: 'Configuration' },
					autogenerate: { directory: 'configuration' },
				},
				{
					label: 'Возможности',
					translations: { en: 'Features' },
					autogenerate: { directory: 'features' },
				},
				{
					label: 'Платежные системы',
					translations: { en: 'Payment Systems' },
					autogenerate: { directory: 'payments' },
				},
				{
					label: 'Администрирование',
					translations: { en: 'Administration' },
					autogenerate: { directory: 'admin' },
				},
				{
					label: 'Решение проблем',
					translations: { en: 'Troubleshooting' },
					autogenerate: { directory: 'troubleshooting' },
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
