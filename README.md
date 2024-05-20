# @yookue/typedoc-plugin-raw-content

[![NPM version](https://img.shields.io/npm/v/@yookue/typedoc-plugin-raw-content.svg?style=flat)](https://npmjs.org/package/@yookue/typedoc-plugin-raw-content)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE.txt)
[![NPM downloads](http://img.shields.io/npm/dm/@yookue/typedoc-plugin-raw-content.svg?style=flat)](https://npmjs.org/package/@yookue/typedoc-plugin-raw-content)

🏅 Generates extra raw html contents during typedoc compilation 👍

## Features

✅ Support hooking `head.begin` event

✅ Support hooking `head.end` event

✅ Support hooking `body.begin` event

✅ Support hooking `body.end` event

✅ Support hooking `content.begin` event

✅ Support hooking `content.end` event

✅ Support hooking `sidebar.begin` event

✅ Support hooking `sidebar.end` event

✅ Support hooking `pageSidebar.begin` event

✅ Support hooking `pageSidebar.end` event

✅ Support hooking `footer.begin` event

✅ Support hooking `footer.end` event

## Quickstart

You can install this package in your typescript project as follows:

```bash
$ npm install @yookue/typedoc-plugin-raw-content --save-dev
```

Enjoy your coding journey with `typedoc-plugin-raw-content` ✌️

## Usage

- Using in command line

```bash
$ typedoc [TARGET] --plugin @yookue/typedoc-plugin-raw-content
```

- Using in `typedoc.json`

```json
{
    "plugin": [
        "@yookue/typedoc-plugin-raw-content"
    ]
}
```

## Options

Here are the available options, specified them in `typedoc.json`:

| Option Name          | Value Type | Render Event      |
|----------------------|------------|-------------------|
| rawHeadBegins        | string[]   | head.begin        |
| rawHeadEnds          | string[]   | head.end          |
| rawBodyBegins        | string[]   | body.begin        |
| rawBodyEnds          | string[]   | body.end          |
| rawContentBegins     | string[]   | content.begin     |
| rawContentEnds       | string[]   | content.end       |
| rawSidebarBegins     | string[]   | sidebar.begin     |
| rawSidebarEnds       | string[]   | sidebar.end       |
| rawPageSidebarBegins | string[]   | pageSidebar.begin |
| rawPageSidebarEnds   | string[]   | pageSidebar.end   |
| rawFooterBegins      | string[]   | footer.begin      |
| rawFooterEnds        | string[]   | footer.end        |

## Example

Take `rawFooterEnds` option as an example in `typedoc.json`:

```json
{
    "hideGenerator": true,
    "rawFooterEnds": [
        "<div style='text-align: center'>Copyright &copy; 2024 Yookue Ltd. All rights reserved</div>"
    ]
}
```

Other options are all similar to the sample above.

## Document

- GitHub pages: [https://yookue.github.io/typedoc-plugin-raw-content](https://yookue.github.io/typedoc-plugin-raw-content)

## License

This project is under the [MIT License](https://mit-license.org/).

## Website

- Yookue: [https://yookue.com](https://yookue.com)
