---
slug: /objects/user
sidebar_label: User
---

# User

### Structure
| Field | Type | Description | Optional | Deprecated |
| - | - | - | - | - |
| _id | string | The user's username. |
| lower_username | string | The lower-case version of the user's username. |
| uuid | UUID4 | The user's UUID4. |
| created | integer | The user's creation timestamp in Unix seconds. |
| pfp_data | integer | The user's selected profile picture. |
| quote | string | The user's quote. |
| flags | integer | The user's flags. |
| permissions | integer | The user's admin permissions. See below for details. |
| lvl | integer | The user's admin level. | | ✓ |
| ban* | [User Ban object](/objects/user-ban) | Ban status associated with the user. | ✓ | |
| banned | boolean | Whether the user is currently banned. |
| last_seen | integer | The timestamp in Unix seconds of when the user was last online. |
| delete_after* | integer | The timestamp in Unix seconds of when the user is scheduled to be deleted. | ✓ | |

**\* These fields are only returned when a user is fetching their own user profile.**

## Permissions

Permissions are implemented as bit maps. This means that they're stored as numbers, that should then be converted to binary. The indices where there is a binary `1` show that the permission at that index is given. In many languages, this can be consisely written as `(permissions & (1 << permission)) != 0`.

| Index | Number | Permission |
| - | - | - |
| 0 | 1 | Sysadmin; can do anything |
| 1 | 2 | Can view reports |
| 2 | 4 | Can handle reports |
| 3 | 8 | Can view notes on posts and users |
| 4 | 16 | Can edit notes on posts or users |
| 5 | 32 | Can view posts in any chat |
| 6 | 64 | Can delete posts in any chat |
| 7 | 128 | Can view which alts a user has |
| 8 | 256 | Can send alerts |
| 9 | 512 | Can kick users |
| 10 | 1024 | Can clear a user's profile details |
| 11 | 2048 | Can view ban states |
| 12 | 4096 | Can ban or unban users |
| 13 | 8192 | Can delete users |
| 14 | 16384 | Can view the IP adress of users |
| 15 | 32768 | Can block certain IP adresses |
| 16 | 65536 | Can view chat information |
| 17 | 131072 | Can edit chat information |
| 18 | 262144 | Can send announcements |
| 19 | 524288 | Can change which words are blocked by the profanity filter |


### Examples
#### Own user profile
```json
{
    "_id": "MikeDEV",
    "lower_username": "mikedev",
    "uuid": "a887becf-fe1d-492a-92c3-e2af7d15db28",
    "created": 1649983115,
    "pfp_data": 26,
    "quote": "🦆👋 Friendly neighborhood duck enthusiast. Owner of Meower!",
    "flags": 0,
    "permissions": 1,
    "lvl": 0,
    "ban": {
        "state": "none",
        "restrictions": 0,
        "expires": 0,
        "reason": ""
    },
    "banned": false,
    "last_seen": 1706574821,
    "delete_after": null
}
```

#### Other user profile
```json
{
    "_id": "MikeDEV",
    "lower_username": "mikedev",
    "uuid": "a887becf-fe1d-492a-92c3-e2af7d15db28",
    "created": 1649983115,
    "pfp_data": 26,
    "quote": "🦆👋 Friendly neighborhood duck enthusiast. Owner of Meower!",
    "flags": 0,
    "permissions": 1,
    "lvl": 0,
    "banned": false,
    "last_seen": 1706574821
}
```
