---
sidebar_label: POST /home
---

# `POST` /home

This endpoint is used to post to add a post to home. It requires authorization.

## Body

<!-- prettier-ignore-start -->
| Key | Description | Required |
| - | - | - |
| content | The post content. From 0 to 4,000 characters. If left at zero characters or left out, at least one attachment has to be present. | No |
| attachments | A list of attachment IDs uploaded via uploads.meower.org. At most 10. | No |
| reply_to | A list of post IDs to reply to. | No |
<!-- prettier-ignore-end -->

## Response

<!-- prettier-ignore-start -->
| Status | Body | Description |
| - | - | - |
| 200 | [Post](../../objects/post) | The resulting post. This may be returned later than broadcasted by Cloudlink. |
| 400 | `{ "error": true, "type": "tooManyAttachments" }` | If there are more than 10 attachments. |
| 403 | `{ "error": true, "type": "accountBanned" }` | If the account is banned. |
| 500 | `{ "error": true, "type": "unableToClaimAttachment" }` | If one of the attachments could not be claimed. This can happen when it has already expired or the ID is incorrect, or be a server issue. |
<!-- prettier-ignore-end -->
