With the release of Volar 1.0, the Volar plugin reports **TS2307: Cannot find module** when importing vue files from ts files.  However, the `vue-tsc` utility isn't affected.

## Repro steps
Use this repro [volar-import-vue](https://github.com/jf-paradis/volar-import-vue).

### `vue-tsc`
- Clone the repo, cd into it, and run `npm install`.
- Execute `npm run lint` which runs `vue-tsc`.
- Notice that no error is reported.

### Volar plugin
- Open VS Code and install the Volar plugin.
- Open the project above in VS Code
- Notice that there's TS2307 (not found) for imported `.vue` modules in `.ts` files.
- Notice that there's no error for imported `.vue` modules in `.vue` files.
