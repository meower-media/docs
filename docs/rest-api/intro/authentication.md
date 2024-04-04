---
slug: /rest-api/intro/authentication
sidebar_label: Authentication
---

# Authentication

Most endpoints require authorization to use them. Authentication can be provided using a header named "`Token`", which is set to a Meower token. A token can be obtained by [logging into the Cloudlink server](../../cloudlink/commands/authpswd). Logging in with the API currently isn't supported.

If you do not provide a token to endpoints that require authorization, the response will have a status of 401.

**Response body of an unauthenticated request**

```json
{
	"error": true,
	"type": "Unauthorized"
}
```
