# Vue viewport manager

[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js gauge panel to explore an ocean of viewports

## Installation

```bash
npm install --save vue-viewport-manager
```

## Usage

Import `vue-viewport-manager` in your JS entry point and install it via `Vue.use()`

```js
import Vue from 'vue'
import VueViewportManager from 'vue-viewport-manager'

Vue.use(VueViewportManager, {store})
```

The plugin needs your `Vuex` store instance to register its own (namespaced) module called `vueViewportManager`.

You can also override default options when installing it

```js
Vue.use(VueViewportManager, {
  option: '...'
})
```

The plugin exposes a global mixin that allows one to access several viewport-related reactive variables, namely:

TODO: describe plugin functionalities

## Development

### Launch webpack dev server

```bash
npm run dev
```

### Launch tests with Jest

Launch the `test` command, which will perform linting beforehand

```bash
npm run test
```

### Build

Launch the `build` command, which will output a minified bundle in the `dist` folder

```bash
npm run build
```

## Publishing

TODO

## License

[BSD](https://opensource.org/licenses/BSD-3-Clause)
