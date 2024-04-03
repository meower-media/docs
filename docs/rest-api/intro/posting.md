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

In exchance, you'll get a [post object](/objects/post#examples) that looks like this:

```json
{
    "_id": "5c93e560-fddd-4146-98bc-edeb263d648f",
    "post_id": "5c93e560-fddd-4146-98bc-edeb263d648f",
    "post_origin": "home",
    "pinned": false,
    "type": 1,
    "t": {
        "d": "30",
        "mo": "01",
        "y": "2024",
        "h": "06",
        "mi": "44",
        "s": "53",
        "e": 1706597093
    },
    "u": "eri",
    "p": "It’s gonna be great:tm:",
    "isDeleted": false
}
```