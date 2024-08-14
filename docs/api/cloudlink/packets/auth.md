-

## title: auth packet

# `auth`

This packet is sent when the user has successfully logged in. It has two keys: a
`mode` of `"auth"` and a `payload`.

## Payload

<!-- deno-fmt-ignore-start -->
| Field | Type | Description |
| - | - | - |
| username | string | The username of the account. |
| token | string | The token of this connection. A new one will be generated each time, but they don't expire unless manually revoked. |
| account | [User](../../objects/user) object | The account information of the logged in account. |
| relationships | array of relationships | See below for more details. |
<!-- deno-fmt-ignore-end -->

## Relationship

| Field      | Type   | Description                                                                   |
| ---------- | ------ | ----------------------------------------------------------------------------- |
| username   | string | The user with whom the account has a relationship.                            |
| state      | number | Always 2, meaning that the user is blocked.                                   |
| updated_at | number | The Unix seconds representation of the date the relationship was last updated |
