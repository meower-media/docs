# `ulist`

This packet provides a string of online users separated by ";"
## Payload

A string of users separated by ";"
```
user1;user2;user3;
```

## Usage
::: code-group

```ts [TypeScript]
// Converts the online userlist into a array of strings
// val is the string of users given by the websocket
let onlineUsers: string[] = val.split(";");
```

```js [JavaScript]
// Converts the online userlist into a array of strings
// val is the string of users given by the websocket
let onlineUsers = val.split(";");
```

```python [Python]
# Converts the online userlist into a array of strings
# val is the string of users given by the websocket
onlineUsers = val.split(";")
```
:::