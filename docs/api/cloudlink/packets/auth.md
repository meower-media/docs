# `auth`

This packet is sent when the user has successfully logged in. It has two keys: a
`mode` of `"auth"` and a `payload`.

## Payload

<!-- deno-fmt-ignore-start -->
| Field | Type | Description |
| - | - | - |
| account | [User](../../objects/user) object | The account information of the logged in account. |
| chats | array of [Chat](../../objects/chat) objects | The chats the logged in account is in. |
| relationships | array of relationships | See below for more details. |
| token | string | The token of this connection. A new one will be generated each time, but they don't expire unless manually revoked. |
| username | string | The username of the account. |
<!-- deno-fmt-ignore-end -->

## Relationship

| Field      | Type   | Description                                                                   |
| ---------- | ------ | ----------------------------------------------------------------------------- |
| username   | string | The user with whom the account has a relationship.                            |
| state      | number | Always 2, meaning that the user is blocked.                                   |
| updated_at | number | The Unix seconds representation of the date the relationship was last updated |
