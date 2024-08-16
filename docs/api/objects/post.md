# Post

### Structure

<!-- deno-fmt-ignore-start --> <!-- Uploads was down -->
| Field        | Type                                              | Description                                                                              | Optional |
| ------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------- |
| _id          | UUID4                                             | The post's UUID4.                                                                        |          |
| attachments  | Unknown[]                                         | The uploaded attachments attached to the post.                                           |          |
| author       | [Post Users](./user.md#post-users)                         | A peek at the authors info.                                                              |          |
| emojis       | [emoji](./emoji.md)[]                             | The custom emojies used within the post.                                                 |          | 
| isDeleted    | boolean                                           | Whether the post is deleted.                                                             |          |
| p            | string                                            | The content of the post.                                                                 |          |
| pinned       | boolean                                           | Whether the post is pinned.                                                              |          |
| post_id      | UUID4                                             | The post's UUID4.                                                                        |          |
| post_origin  | string/UUID4                                      | Where the post was created. Can be `"home"`, `"inbox"`, `"livechat"`, or a chat's UUID4. |          |
| reply_to     | [post](./post.md)[]                               | The replied to posts. Sub posts cannot have replies.                                     |          |
| stickers     | Unknown[]                                         | The custom stickers in the post.                                                         |          |
| type         | integer                                           | The post's type.                                                                         |          |
| t.e          | number                                            | The post's creation timestamp. (unix)                                                        |          |
| u            | string                                            | The username of the post author.                                                         |          |
| mod_deleted  | boolean                                           | Whether the post was deleted by a moderator.                                             | ✓        |
| deleted_at   | integer                                           | The post's deletion timestamp in Unix seconds.                                           | ✓        |
<!-- deno-fmt-ignore-end -->

### Examples

#### Home

```json
{
	"_id": "8cacf340-182c-4cbe-98e4-807781ca5e22",
	"attachments": [],
	"author": {
		"_id": "ShowierData9978",
		"avatar": "gl4zm8aGO2U3MOUANDNMpnSA",
		"avatar_color": "007ffd",
		"flags": 0,
		"pfp_data": 21,
		"uuid": "4f4d986b-63ef-4f7d-9b8b-87368c6e0280"
	},
	"emojis": [
		{
			"_id": "CNqjEMFlMYlS66VjDQ3u8z07",
			"animated": false,
			"chat_id": "ee754b92-da8a-483a-9601-bf44b9bff531",
			"name": "ban"
		}
	],
	"isDeleted": false,
	"p": "Documentation Post <:CNqjEMFlMYlS66VjDQ3u8z07>",
	"pinned": false,
	"post_id": "8cacf340-182c-4cbe-98e4-807781ca5e22",
	"post_origin": "home",
	"reactions": [
		{
			"count": 1,
			"emoji": "😃",
			"user_reacted": false
		}
	],
	"reply_to": [
		{
			"_id": "d9c07f76-ca61-424c-ae7a-43f1a5f23ade",
			"attachments": [],
			"author": {
				"_id": "Eris",
				"avatar": "Gi1WvwNobL0X6RpZB7pnAMNw",
				"avatar_color": "8f75cc",
				"flags": 4,
				"pfp_data": 23,
				"uuid": "d4006f3b-d054-4fd3-a4b1-82b29257cd91"
			},
			"emojis": [],
			"isDeleted": false,
			"p": "https://tenor.com/view/boom-roasted-the-office-michael-scott-gif-9210948",
			"pinned": false,
			"post_id": "d9c07f76-ca61-424c-ae7a-43f1a5f23ade",
			"post_origin": "home",
			"reactions": [],
			"reply_to": [],
			"stickers": [],
			"t": {
				"e": 1723786557
			},
			"type": 1,
			"u": "Eris"
		}
	],
	"stickers": [],
	"t": {
		"e": 1723786594
	},
	"type": 1,
	"u": "ShowierData9978"
}
```

#### Livechat (outdated)

```json
{
	"_id": "44307ebd-4439-49fb-9a81-9fc5cf4e3c14",
	"post_id": "44307ebd-4439-49fb-9a81-9fc5cf4e3c14",
	"post_origin": "livechat",
	"type": 1,
	"t": {
		"d": "30",
		"mo": "01",
		"y": "2024",
		"h": "08",
		"mi": "13",
		"s": "14",
		"e": 1706602394
	},
	"u": "tnix100",
	"p": "test",
	"isDeleted": false
}
```

#### DM / Group Chat (outdated)

```json
{
	"_id": "d3d69a93-f427-4c63-a2a9-fd22849f2cbe",
	"post_id": "d3d69a93-f427-4c63-a2a9-fd22849f2cbe",
	"post_origin": "ae4f3246-42bc-4d06-81db-9a8cd5fdf787",
	"type": 1,
	"t": {
		"d": "30",
		"mo": "01",
		"y": "2024",
		"h": "07",
		"mi": "57",
		"s": "15",
		"e": 1706601435
	},
	"u": "Tnix",
	"p": "h",
	"isDeleted": false
}
```

#### Inbox (Notification to @zed) (outdated)

```json
{
	"_id": "5de2dee7-6ec4-41a2-9d62-8899efddf5dd",
	"post_id": "5de2dee7-6ec4-41a2-9d62-8899efddf5dd",
	"post_origin": "inbox",
	"type": 2,
	"t": {
		"d": "27",
		"mo": "01",
		"y": "2024",
		"h": "16",
		"mi": "20",
		"s": "36",
		"e": 1706372436
	},
	"u": "zed",
	"p": "You have been added to the group chat '1 mil posts' by @MikeDEV!",
	"isDeleted": false
}
```

#### Inbox (Announcement) (outdated)

```json
{
	"_id": "92a93dc7-8841-4f93-9706-17762ccfd1dc",
	"post_id": "92a93dc7-8841-4f93-9706-17762ccfd1dc",
	"post_origin": "inbox",
	"type": 2,
	"t": {
		"d": "23",
		"mo": "01",
		"y": "2024",
		"h": "16",
		"mi": "44",
		"s": "05",
		"e": 1706028245
	},
	"u": "Server",
	"p": "hello world!",
	"isDeleted": false
}
```
