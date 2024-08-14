# `POST` /posts/[chat_id]

This endpoint is used to post to add a post to a chat. It requires
authorization.

## Body

<!-- deno-fmt-ignore-start -->
| Key | Description | Required |
| - | - | - |
| content | The post content. From 0 to 4,000 characters. If left at zero characters or left out, at least one attachment has to be present. | No |
| attachments | A list of attachment IDs uploaded via uploads.meower.org. At most 10. | No |
| reply_to | A list of post IDs to reply to. | No |
<!-- deno-fmt-ignore-end -->

## Response

<!-- deno-fmt-ignore-start -->
| Status | Body | Description |
| - | - | - |
| 200 | [Post](../../objects/post) | The resulting post. This may be returned later than broadcasted by Cloudlink. |
| 400 | `{ "error": true, "type": "tooManyAttachments" }` | If there are more than 10 attachments. |
| 403 | | If the account is attempting to message a user that is blocked or that has the account blocked. |
| 403 | `{ "error": true, "type": "accountBanned" }` | If the account is banned. |
| 404 | | If the chat can't be found, or the account is not in the chat. |
| 500 | `{ "error": true, "type": "unableToClaimAttachment" }` | If one of the attachments could not be claimed. This can happen when it has already expired or the ID is incorrect, or be a server issue. |
<!-- deno-fmt-ignore-end -->
