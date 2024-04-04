/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	sidebar: ["root/intro"],
	objects: [
		"objects/user",
		"objects/user-settings",
		"objects/user-ban",
		"objects/chat",
		"objects/post",
		"objects/extended-timestamp",
	],
	restApi: ["rest-api/intro/authentication"],
	cloudlink: [
		"cloudlink/intro",
		"cloudlink/commands/authpswd",
		"cloudlink/packets/auth",
	],
	restApi: [
		"rest-api/intro/introduction",
		"rest-api/intro/authentication",
		"rest-api/intro/posting",
	],
};

module.exports = sidebars;
