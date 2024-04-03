---
slug: /objects/post
sidebar_label: Post
---

# Post

### Structure
| Field | Type | Description | Optional |
| - | - | - | - |
| _id | UUID4 | The post's UUID4. | |
| post_id | UUID4 | The post's UUID4. | |
| post_origin | string/UUID4 | Where the post was created. Can be `"home"`, `"inbox"`, `"livechat"`, or a chat's UUID4. | |
| type | integer | The post's type. | |
| t | [Extended Timestamp](/objects/extended-timestamp) object | The post's creation timestamp. | |
| u | string | The username of the post author. | |
| p | string | The content of the post. | |
| unfiltered_p | string | The non-filtered content of the post. | ✓ |
| isDeleted | boolean | Whether the post is deleted. | |
| mod_deleted | boolean | Whether the post was deleted by a moderator. | ✓ |
| deleted_at | integer | The post's deletion timestamp in Unix seconds. | ✓ |

### Examples
#### Home
```json
{
    "_id": "5c93e560-fddd-4146-98bc-edeb263d648f",
    "post_id": "5c93e560-fddd-4146-98bc-edeb263d648f",
    "post_origin": "home",
    "type": 1,
    "t": {
        "d": "30",
        "mo": "01",
        "y": "2024",
        "h": "06",
        "mi": "44",
        "s": "53",
        "e": 1706597093
    },
    "u": "eri",
    "p": "It’s gonna be great:tm:",
    "isDeleted": false
}
```

#### Livechat
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

#### DM / Group Chat
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

#### Inbox (Notification to @zed)
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

#### Inbox (Announcement)
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
