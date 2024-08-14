import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.SidebarItem[] = [{
	text: 'api',
	collapsed: false,
	items: [
		{
			text: 'API Reference',
			link: 'https://docs.meower.org/api/rest.html',
		},
		{
			text: 'Cloudlink',
			collapsed: true,
			items: [
				{
					text: 'Introduction',
					link: '/api/cloudlink/intro',
				},
				{
					text: 'authpswd command',
					link: '/api/cloudlink/commands/authpswd',
				},
				{
					text: 'auth packet',
					link: '/api/cloudlink/packets/auth',
				},
			],
		},
		{
			text: 'Objects',
			collapsed: true,
			items: [
				{
					text: 'Chat',
					link: '/api/objects/chat',
				},
				{
					text: 'Extended Timestamp',
					link: '/api/objects/extended-timestamp',
				},
				{
					text: 'Post',
					link: '/api/objects/post',
				},
				{
					text: 'User',
					link: '/api/objects/user',
				},
				{
					text: 'User Ban',
					link: '/api/objects/user-ban',
				},
				{
					text: 'User Settings',
					link: '/api/objects/user-settings',
				},
			],
		},
		{
			text: 'REST',
			collapsed: true,
			items: [
				{
					text: 'Introduction',
					link: '/api/rest-api/rest-api',
				},
				{
					text: 'POST /home',
					link: '/api/rest-api/endpoints/post_home',
				},
				{
					text: 'POST /posts/[chat_id]',
					link: '/api/rest-api/endpoints/post_posts_chat_id',
				},
			],
		},
	],
}, {
	text: 'api-client',
	collapsed: false,
	items: [
		{
			text: 'Get Started with api-client',
			link: '/api-client/',
		},
		{
			text: 'Authentication',
			link: '/api-client/auth',
		},
		{
			text: 'Events',
			link: '/api-client/events',
		},
		{
			text: 'Uploads',
			link: '/api-client/uploads',
		},
	],
}];
