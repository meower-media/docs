---
slug: /objects/user-ban
sidebar_label: User Ban
---

# User Ban

:::note
The User Ban object is only used within the `ban` field on [User objects](/objects/user). It should not appear anywhere else.
:::

### Structure

<!-- prettier-ignore-start -->
| Field | Type | Description |
| - | - | - |
| state | string | The current state of the ban. Can be `"none"`, `"temp_restriction"`, `"perm_restriction"`, `"temp_ban"`, or `"perm_ban"`. |
| restrictions* | integer | |
| expires** | integer | The expiration timestamp of the ban in Unix seconds. |
| reason | string | The reason for the ban. |
<!-- prettier-ignore-end -->

**\* These fields are only effective when `state` is set to `"temp_restriction"` or `"perm_restriction"`.**

**\*\* These fields are only effective when `state` is set to `"temp_restriction"` or `"temp_ban"`.**

### Example

```json
{
	"state": "temp_restriction",
	"restrictions": 31,
	"expires": 1704587880,
	"reason": "Being too silly :p"
}
```
