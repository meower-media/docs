---
slug: /objects/extended-timestamp
sidebar_label: Extended Timestamp
---

# Extended Timestamp

:::note
The Extended Timestamp object is only used within the `t` field on [Post objects](/objects/post). It should not appear anywhere else.
:::

:::warning
Every field apart from `e` in the extended timestamp object is based on the server's current timezone.

This can cause weird behavior if the server's timezone changes (e.g. daylight savings).
:::

### Structure

<!-- prettier-ignore-start -->
| Field | Type | Description |
| - | - | - |
| d | string | Day |
| mo | string | Month |
| y | string | Year |
| h | string | Hour |
| mi | string | Minute |
| s | string | Second |
| e | integer | Unix seconds |
<!-- prettier-ignore-end -->

### Example

```json
{
  "d": "13",
  "mo": "06",
  "y": "2022",
  "h": "05",
  "mi": "12",
  "s": "32",
  "e": 1655097173
}
```
