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

export default defineConfig({
    site: 'https://remnawave-telegram-shop-bot-doc.vercel.app',
    integrations: [
        starlight({
            components: {
                SiteTitle: './src/components/SiteTitle.astro',
            },
            plugins: [
                starlightThemeGalaxy(),
                starlightGitHubAlerts(),
                starlightScrollToTop({
                    showTooltip: false,
                    borderRadius: '25',
                }),
                starlightKbd({
                    globalPicker: false,
                    types: [
                        { id: 'mac', label: 'macOS' },
                        { id: 'windows', label: 'Windows', default: true },
                        { id: 'linux', label: 'Linux' },
                    ]
                })
            ],
            title: 'Remnawave Telegram Shop Bot',
            description: 'Complete documentation for managing VPN subscriptions through Telegram',
            logo: {
                src: './src/assets/logo.svg',
            },
            defaultLocale: 'root',
            locales: {
                root: {
                    label: 'English',
                    lang: 'en',
                },
                ru: {
                    label: 'Русский',
                    lang: 'ru',
                },
            },
            editLink: {
                baseUrl: 'https://github.com/Jolymmiels/remnawave-telegram-shop-bot-doc/edit/main/docs/',
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Jolymmiels/remnawave-telegram-shop' },
                { icon: 'telegram', label: 'Telegram', href: 'https://t.me/remnawavetelegramshop' },
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
            customCss: ['./src/styles/custom.css'],
        }),
    ],
});
