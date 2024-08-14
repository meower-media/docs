# Chat

:::warning

The chat `livechat` is a special chat. It doesn't require you to be a member to
access it, posts aren't saved to the database, and the chat nor its previous
posts can be fetched.

:::

### Structure

<!-- deno-fmt-ignore-start -->
| Field | Type | Description | Optional |
| - | - | - | - |
| _id | UUID4 | The chat's UUID4. | |
| type | integer | The type of the chat. Will be `0` for group chats and `1` for DMs. | |
| nickname* | string | The nickname of the chat. | ✓ |
| owner* | string | The username of the user who owns the chat. | ✓ |
| members | array of usernames | The usernames of the users who are a member of the chat. | |
| created | integer | The chat's creation timestamp in Unix seconds. | |
| last_active | integer | The timestamp in Unix seconds of the last post in the chat. | |
| deleted | boolean | Whether the chat is soft-deleted by a moderator. | |
<!-- deno-fmt-ignore-end -->

**\* These fields are only returned when the chat is a group chat.**

### Examples

#### Group Chat

```json
{
	"_id": "32f9ef7d-0903-4601-8a92-8cf5a8960efa",
	"type": 0,
	"nickname": "Meower Translators",
	"owner": "mdwalters",
	"members": [
		"mdwalters",
		"NotFenixio",
		"WlodekM3",
		"Discord",
		"Tnix",
		"WlodekM",
		"delusions"
	],
	"created": 1701911007,
	"last_active": 1706568877,
	"deleted": false
}
```

#### DM

```json
{
	"_id": "480ae7be-83ae-4fd6-96a7-eb898c549ab2",
	"type": 1,
	"nickname": null,
	"owner": null,
	"members": ["Tnix", "eri"],
	"created": 1706595968,
	"last_active": 1706596046,
	"deleted": false
}
```
