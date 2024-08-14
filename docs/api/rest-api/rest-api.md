# Rest API

This section describes the Rest API found at <https://api.meower.org> based on
its behavior and source code found at
<https://github.com/meower-media-co/Meower-Server>.

The Meower API uses JSON both for recieving and responding to requests.

## Headers

There are two headers that a lot of endpoints of the API require:

- **Token**: The token is the current key that identifies you with your account.
  Endpoints that need to be authorized require this token. If it is not passed,
  the endpoint returns a 401 status code.
- **Content-Type**: For non-GET requests, this header needs to be set to
  `application/json`. If this is not done, the endpoint returns a 400 status
  code.

## Status codes

For 200 status codes, Meower includes an `error` key set to `false` in its
response. For other status codes, this key is set to `true`, and another key,
`type`, is added. Many status codes have predefined messages, listed below.
Different ones may be used for certain errors by some endpoints.

<!-- deno-fmt-ignore-start -->
| Status code | Error type | Notes |
| - | - | - |
| 400 | `badRequest` | This is sent when the body is not JSON or follows the schema required by the endpoint, or when the `Content-Type` header is set incorrectly. |
| 401 | `Unauthorized` | This is sent by endpoints that require authorization if no token is passed. |
| 403 | `missingPermissions` | |
| 404 | `notFound` | This is sent when an endpoint is not found, but also when specific data of an endpoint is not found. |
| 405 | `methodNotAllowed` | |
| 429 | `tooManyRequests` | This can be sent by any endpoint. |
| 500 | `Internal` | This can be sent by any endpoint. |
| 501 | `notImplemented` | |
<!-- deno-fmt-ignore-end -->
