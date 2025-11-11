// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightLinksValidator from 'starlight-links-validator'
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightKbd from 'starlight-kbd';
import autoImport from 'astro-auto-import';
import starlightGitHubAlerts from 'starlight-github-alerts';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.example.com',
	integrations: [
		autoImport({
			imports: [],
		}),
		starlight({
			title: 'Remnawave Telegram Shop Bot',
			description: 'Complete documentation for managing VPN subscriptions through Telegram',
			logo: {
				src: './src/assets/logo.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					translations: { ru: 'Начало' },
					items: [
						{ label: 'Overview', slug: 'getting-started/overview', translations: { ru: 'Обзор' } },
						{ label: 'Setup', slug: 'getting-started/setup', translations: { ru: 'Установка' } },
					],
				},
				{
					label: 'Configuration',
					translations: { ru: 'Конфигурация' },
					items: [
						{ label: 'Environment Variables', slug: 'configuration/variables', translations: { ru: 'Переменные окружения' } },
						{ label: 'Squad Configuration', slug: 'configuration/squads', translations: { ru: 'Конфигурация отрядов' } },
						{ label: 'Security Settings', slug: 'configuration/security', translations: { ru: 'Параметры безопасности' } },
					],
				},
				{
					label: 'Features',
					translations: { ru: 'Возможности' },
					items: [
						{ label: 'Core Features', slug: 'features/core', translations: { ru: 'Основные возможности' } },
						{ label: 'Payment Methods', slug: 'features/payments', translations: { ru: 'Методы оплаты' } },
						{ label: 'Subscriptions', slug: 'features/subscriptions', translations: { ru: 'Подписки' } },
					],
				},
				{
					label: 'Payment Systems',
					translations: { ru: 'Платежные системы' },
					items: [
						{ label: 'YooKassa', slug: 'payments/yookassa', translations: { ru: 'YooKassa' } },
						{ label: 'CryptoPay', slug: 'payments/cryptopay', translations: { ru: 'CryptoPay' } },
						{ label: 'Telegram Stars', slug: 'payments/telegram-stars', translations: { ru: 'Telegram Stars' } },
						{ label: 'Tribute', slug: 'payments/tribute', translations: { ru: 'Tribute' } },
					],
				},
				{
					label: 'Administration',
					translations: { ru: 'Администрирование' },
					items: [
						{ label: 'Admin Commands', slug: 'admin/commands', translations: { ru: 'Команды администратора' } },
						{ label: 'User Management', slug: 'admin/users', translations: { ru: 'Управление пользователями' } },
						{ label: 'Monitoring', slug: 'admin/monitoring', translations: { ru: 'Мониторинг' } },
						{ label: 'Maintenance', slug: 'admin/maintenance', translations: { ru: 'Обслуживание' } },
					],
				},
				{
					label: 'Troubleshooting',
					translations: { ru: 'Устранение неполадок' },
					items: [
						{ label: 'Common Issues', slug: 'troubleshooting/issues', translations: { ru: 'Частые проблемы' } },
						{ label: 'Logs & Debugging', slug: 'troubleshooting/logs', translations: { ru: 'Логи и отладка' } },
					],
				},
			],
				},
				{
					label: 'Installation', translations: { ru: 'Установка' },
					items: [
						{ label: 'Requirements', slug: 'installation/requirements', translations: { ru: 'Обязательные условия' } },
						{ label: 'Panel and node', slug: 'installation/panel-and-node', translations: { ru: 'Панель и нода' } },
						{ label: 'Panel only', slug: 'installation/panel-only', translations: { ru: 'Только панель' } },
						{ label: 'Node only', slug: 'installation/node-only', translations: { ru: 'Только нода' } },
						{ label: 'Add node to panel', slug: 'installation/add-node', translations: { ru: 'Добавление ноды в панель' } },
					],
				},
				{
					label: 'Configuration Remnawave', translations: { ru: 'Настройка Remnawave' },
					items: [
						{ label: 'How to replace a domain', slug: 'configuration/how-to-replace-a-domain', translations: { ru: 'Как изменить домен' } },
						{ label: 'Access to Prometheus metrics', slug: 'configuration/prometheus-metrics', translations: { ru: 'Доступ к метрикам Prometheus' } },
						{ label: 'External access to API', slug: 'configuration/external-api', translations: { ru: 'Внешний доступ к API' } },
					],
				},
				{
					label: 'Configuration', translations: { ru: 'Настройка' },
					items: [
						{ label: 'Certwarden', slug: 'configuration/certwarden', translations: { ru: 'Certwarden' } },
						{ label: 'Warp Native', slug: 'configuration/warp-native', translations: { ru: 'Warp Native' } },
						{ label: 'Beszel', slug: 'configuration/beszel', translations: { ru: 'Beszel' } },
						{ label: 'Netbird', slug: 'configuration/netbird', translations: { ru: 'Netbird' } },
						{ label: 'Monitoring with Grafana and Victoria Metrics', slug: 'configuration/grafana-monitoring-setup', translations: { ru: 'Мониторинг через Grafana и Victoria Metrics' } },
						{ label: 'SWAG (Secure Web Application Gateway)', slug: 'configuration/swag', translations: { ru: 'SWAG (Secure Web Application Gateway)' } },
					],
				},
				{
					label: 'Troubleshooting', translations: { ru: 'Устранение неполадок' },
					items: [
						{ label: 'Common issues', slug: 'troubleshooting/common-issues', translations: { ru: 'Частые проблемы' } },
						{ label: 'Docker related issues', slug: 'troubleshooting/docker-issues', translations: { ru: 'Проблемы, связанные с Docker' } },
						// { label: 'Logs', slug: 'troubleshooting/logs', translations: { ru: 'Логи' } },
					],
				},
				{
					label: 'Contribution', translations: { ru: 'Помощь в разработке' },
					items: [
						{ label: 'Contributors', slug: 'contribution/contributors', translations: { ru: 'Участники разработки' } },
						{ label: 'Contribution Guide', slug: 'contribution/guide', translations: { ru: 'Руководство по внесению изменений' } },
					],
				},
			],
		}),
	],
});
