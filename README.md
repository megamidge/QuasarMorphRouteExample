# Quasar Morph Route Example

This is a very basic example of using the Morph directive (new in Quasar v1.13) across routes. 

There are 2 routes and 2 pages implemented. `'/'` and `'/other'`.

The morph model, which determines which morph element(s) in a group should be morphed to is based on a meta property on the route. You can base it on anything however.

Computed based on a route meta property:
```js
morphModel () {
    if (this.$route.meta.logoInTopBar) {
        return 'top'
    } else {
        return 'main'
    }
}
```

Computed base on route:
```js
morphModel () {
    if (this.$route.meta.logoInTopBar) {
        return 'top'
    } else {
        return 'main'
    }
}
```

It doesn't need to be base on a route.
It would make sense to put model in a vuex store if using across routes.
It doesn't have to be computed either. You could have a state object that is manually set when certain actions happen. The sky is the limit, probably.

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
