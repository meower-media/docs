---
slug: /objects/user-settings
sidebar_label: User Settings
---

# User Settings

:::important
These fields will be **appended onto the [User object](/objects/user)** when a user is fetching their own user profile.
:::

### Structure
| Field | Type | Description |
| - | - | - |
| unread_inbox | boolean | Whether the user has an unread inbox message. |
| theme | string | The user's prefered theme (usually "orange", "blue", or a custom theme). |
| mode | boolean | Whether the user prefers light mode. |
| layout | string | The user's preferred layout (usually "new" or "old"). |
| sfx | boolean | Whether the user prefers sound effects. |
| bgm | boolean | Whether the user prefers background music. |
| bgm_song | integer | The user's preferred background music song. |
| hide_blocked_users | boolean | Whether the user prefers to hide blocked users. |
| active_dms | array of UUID4s | An array of the last 150 direct message chat UUID4s the user has open. |
| favorited_chats | array of UUID4s | An array of the chat UUID4s the user has favorited. |

### Example
```json
{
    unread_inbox: true,
    theme: "blue",
    mode: false,
    layout: "new",
    sfx: true,
    bgm: false,
    bgm_song: 3,
    hide_blocked_users: true,
    active_dms: [
        "05bdaf3f-1c37-4dee-9d0a-195bf52d3c8b",
        "a1109e40-8cf8-41ca-9089-66c4c640a391",
        "60dd7fe2-d3c0-44df-bf7e-ebcdee830a83",
        "aca00277-8334-458a-8251-044dffea371b",
        "f33d314b-ada9-4929-9c3e-4601af216005",
        "1dd356b0-0e32-42da-b70d-afbd4ba0add8",
        "4a624efd-d74e-45fb-9714-20645f3d7f36",
        "114b401e-bb55-4e53-8cc8-91aa29ac2568",
        "ae4f3246-42bc-4d06-81db-9a8cd5fdf787"
    ],
    favorited_chats: [
        "a1109e40-8cf8-41ca-9089-66c4c640a391",
        "8741bfec-4257-419a-87c1-5c487927d1d3",
        "e351bdf4-26aa-4abd-8da2-152b940f76ea",
        "4a624efd-d74e-45fb-9714-20645f3d7f36"
    ]
}
```
