import { defineConfig } from 'vitepress';
import { sidebar } from './sidebar.mts';

export default defineConfig({
	appearance: 'dark',
	assetsDir: 'static',
	cleanUrls: true,
	description: 'documentation about the meower project',
	head: [['link', { rel: 'icon', href: '/logo.svg' }]],
	ignoreDeadLinks: true,
	lang: 'en-US',
	srcDir: 'docs',
	title: 'Meower Docs',
	themeConfig: {
		editLink: {
			pattern:
				'https://github.com/meower-media/docs/edit/main/docs/:path',
		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'API', link: '/api/rest-api/rest-api', activeMatch: '^/api/' },
			{
				text: 'api-client',
				link: '/api-client/',
				activeMatch: '^/api-client/',
			},
		],
		notFound: {
			code: '404',
			linkLabel: 'Go back home',
			linkText: 'Home',
			quote: 'The page you are looking for does not exist.',
			title: 'Page not found',
		},
		sidebar,
		search: {
			provider: 'local',
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/meower-media',
			},
		],
	},
});
