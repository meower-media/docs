---
title: Authentication
---

# Authentication

Logging in to Meower is the first thing you'll want to do as it'll initiate a
client which you can then use to interact with the Meower API. The design of
api-client allows you to import only the things you need. Below, we have
examples on how to both login and signup.

## Logging into Meower

If just want the part of api-client dealing with events, it's possible to login
using the `socket` class. To do that, you can use the following code:

```ts
import { socket } from '@meower/api-client';

const events = await socket.login({
	api_url: 'https://api.meower.org',
	api_token: 'your.token.here',
	socket_url: 'wss://server.meower.org',
});

events.on('auth', ({ username }) => {
	console.log(`logged in as ${username}`);
});
```

For the REST API and Meower Uploads, the process is relatively similar. If you
would like access to all three, you can use the following code:

```ts
import { client } from '@meower/api-client';

const meower = await client.login({
	api_url: 'https://api.meower.org',
	socket_url: 'wss://server.meower.org',
	uploads_url: 'https://uploads.meower.org',
	username: 'your.username',
	password: 'password.or.api.token',
});

meower.socket.on('auth', ({ username }) => {
	console.log(`logged in as ${username}`);
});
```

The `client` class provides access to the [REST API](./rest),
[Events Server](./events), and [Meower Uploads](./uploads) and handles things
such as token-refreshing.

## Signing up

If you want to signup, you'll want to use either the `client.signup` or
`rest.signup` methods, both of which accept an additional `captcha` parameter.
See the [API Docs](../api/rest-api/endpoints/signing-up) for more information on
that.
