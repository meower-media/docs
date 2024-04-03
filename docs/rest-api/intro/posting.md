---
slug: /rest-api/intro/posting
sidebar_label: Posting
---

# Posting
:::note
This endpoint requires [authentication](/rest-api/intro/authentication).
:::

The endpoint for posting into home is `/home`, sending a POST request with this body:
```json
{
    "content": "Post content here"
}
```

For posting in livechat or group chats, you'll only need to change the endpoint to `/posts/livechat` or `/posts/CHAT_ID`, respectively.

In exchange, you'll get a [post object](/objects/post#examples).
