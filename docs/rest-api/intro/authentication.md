---
slug: /rest-api/intro/authentication
sidebar_label: Authentication
---

# Authentication

Most endpoints require authorization to use them. Authentication can be provided using a header named "`Token`", which is set to a Meower token. A token can be obtained by [logging into the Cloudlink server](../../cloudlink/commands/authpswd), or by using the login endpoint, explained below.

**If you do not provide a token to endpoints that require authorization, the response will have a status of 401.**

**Response body of an unauthenticated request**

```json
{
	"error": true,
	"type": "Unauthorized"
}
```

## Logging in using the login endpoint
You can make a request to ``https://api.meower.org/auth/login`` to get a token and account information.
The request type must be POST and the body should contain the following:
```json
{
  "username": "USERNAME",
  "password": "PASSWORD"
}

```

:::note
If any error occurs, including account not existing or incorrect password, a 401 will be returned with the following response:
```json
{
  "error": true,
  "type": "Unauthorized"
}
```
:::

After that, you will get a [User object](/objects/user).

---

