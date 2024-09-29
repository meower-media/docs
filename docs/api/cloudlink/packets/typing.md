# `typing`

This packet is sent when a client sends a typing indicator. These clients will
send this packet at an interval less than five seconds.

## Payload

<!-- deno-fmt-ignore-start -->
| Field | Type | Description |
| - | - | - |
| chat_id | string | The ID of the chat the user is typing in. |
| username | string | The username of the user who is typing. |
<!-- deno-fmt-ignore-end -->
