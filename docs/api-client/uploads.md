---
title: Uploads
---

# Meower Uploads

Meower Uploads is a simple solution for file uploads and downloads--and
api-client has support for uploading and downloading files with it. The
`uploads` class is the thing used to interact with the Uploads API.

## Downloading files

If you have an [API Attachment](../api/uploads/attachment.md), it's possible to
get a file URL using the following code:

```ts
import { upload_types, uploads } from '@meower/api-client';

const meower_uploads = new uploads({
	base_url: 'https://uploads.meower.org',
	token: 'your.api.token',
});
import { upload_types, uploads } from '@meower/api-client';

const meower_uploads = new uploads({
	base_url: 'https://uploads.meower.org',
	token: 'your.api.token',
});

const api_attachment = {
	filename: 'cat.pdf',
	mime: 'application/pdf',
	size: 100,
	id: 'aaaaaaaa',
};

const url = meower_uploads.get_file_url(
	api_attachment,
	upload_types.attachment,
);
```

Using the file url, it's possible to download the file using the following code:

::: code-group

```ts [node]
import { writeFile } from 'node:fs/promises';

const resp = await fetch(url);

const buffer = await resp.arrayBuffer();

const data = new Uint8Array(buffer);

await writeFile(api_attachment.filename, data);
```

```ts [bun]
const resp = await fetch(url);

await Bun.write(api_attachment.filename, resp);
```

```ts [deno]
const resp = await fetch(url);

const buffer = await resp.arrayBuffer();

const data = new Uint8Array(buffer);

await Deno.writeFile(api_attachment.filename, data);
```

```ts [browsers]
const resp = await fetch(url);

const blob = await resp.blob();

const file_picker = await window.showSaveFilePicker();

const stream = await file_picker.createWritable();

await stream.write(blob);

await stream.close();
```

:::

## Uploading files

To be able to upload files to Meower, you first need to get your file in the
form of either a
[`Blob`](https://developer.mozilla.org/en-USko/docs/Web/API/Blob) or a
[`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). Once you have
either of those, you can use the `uploads.upload_file` method to upload it.

```ts
import { upload_types, uploads } from '@meower/api-client';

const meower_uploads = new uploads({
	base_url: 'https://uploads.meower.org',
	token: 'your.api.token',
});

const blob = new Blob(['hi']);

const file = await meower_uploads.upload_file(blob, upload_types.attachment);
```

The resulting file is an API attachment, which you can use later if you want to
add a file as an attachment, create a new emoji, or something else.
