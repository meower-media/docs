# `typing`

This packet is sent when a client sends a typing indicator. These clients will be sent periodically by clients, so you need to setup a expiration system.
### Client typing indicator frequency
- **meo**: 3 seconds
- **Roarer 2**: 3 seconds
- **Meower Svelte**: 4 seconds

## Payload

<!-- deno-fmt-ignore-start -->
| Field | Type | Description |
| - | - | - |
| chat_id | string | The ID of the chat the user is typing in. |
| username | string | The username of the user who is typing. |
<!-- deno-fmt-ignore-end -->