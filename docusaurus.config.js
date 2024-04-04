// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Meower Documentation",
	tagline: "Documentation for the Meower social media platform.",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://docs.meower.org",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "meower-media-co", // Usually your GitHub org/user name.
	projectName: "Meower-Docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
					editUrl:
						"https://github.com/meower-media-co/Meower-Docs/tree/main/docs/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			navbar: {
				title: "Meower Documentation",
				logo: {
					alt: "Meowy Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "objects",
						position: "left",
						label: "Objects",
					},
					{
						type: "docSidebar",
						sidebarId: "restApi",
						position: "left",
						label: "REST API",
					},
					{
						type: "docSidebar",
						sidebarId: "cloudlink",
						position: "left",
						label: "Cloudlink",
					},
					{
						href: "https://app.meower.org",
						label: "Meower",
						position: "right",
					},
					{
						href: "https://github.com/meower-media-co/Meower-Docs",
						label: "GitHub",
						position: "right",
					},
				],
			},
			colorMode: {
				respectPrefersColorScheme: true,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
