# `delete_post`

This packet is sent when a is deleted, when a client gets this packet, it should search any local cache for the post_id and remove any matching posts.
## Payload

<!-- deno-fmt-ignore-start -->
| Field | Type | Description |
| - | - | - |
| chat_id | string | The ID of the chat where the deleted post was. |
| post_id | string | The ID of the post that was deleted. |
<!-- deno-fmt-ignore-end -->