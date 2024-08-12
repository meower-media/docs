---
title: Events
---

# Event handling

api-client provides you access to _Cloudlink_, the events server used by Meower.
to recieve events, get a logged in client instance and then use the following
code:

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

meower.socket.on('create_message', (post) => {
	console.log('new post!');
	console.log(post);
});
```

your editor should provide completions for the other events you're able to
listen to and the types of data they provide you
