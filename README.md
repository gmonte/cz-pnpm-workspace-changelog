# cz-pnpm-workspace-changelog

A fork of [cz-lerna-changelog](https://github.com/atlassian/cz-lerna-changelog) adapted for pnpm workspaces.

## About

This package is part of the [commitizen](https://github.com/commitizen/cz-cli) family. It prompts for [conventional changelog](https://github.com/stevemao/conventional-changelog-angular/blob/master/index.js) standard in a [pnpm workspace](https://pnpm.io/workspaces) environment.

## Installation

```bash
# Install commitizen and this package
npm install --save-dev commitizen cz-pnpm-workspace-changelog @commitlint/cli
```

## Configuration

### Commitizen Configuration

Add this to your package.json:

```json
{
  "config": {
    "commitizen": {
      "path": "cz-pnpm-workspace-changelog"
    }
  }
}
```

or create a .czrc file at root:
```json
{
  "path": "cz-pnpm-workspace-changelog"
}
```

### Commitlint Configuration

Create a `commitlint.config.js` in your project root:

```js
module.exports = {
  extends: ['./node_modules/cz-pnpm-workspace-changelog/commitlint']
};
```

This will use the predefined rules that include:
- feat
- fix
- docs
- style
- refactor
- test
- revert
- wip

## Usage

When you commit with commitizen, you'll be prompted to fill out any required commit fields at commit time. The package will automatically detect which packages in your pnpm workspace have been affected by your changes.

Example view:

![example view](https://www.evernote.com/l/AAVyZb3cVbpP0oFqYnkpGMAFIbBW3JRGOEUB/image.png)

## Status

[![npm version](https://img.shields.io/npm/v/cz-pnpm-workspace-changelog.svg?style=flat-square)](https://www.npmjs.org/package/cz-pnpm-workspace-changelog)
[![npm downloads](https://img.shields.io/npm/dm/cz-pnpm-workspace-changelog.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-pnpm-workspace-changelog)

## License

MIT
