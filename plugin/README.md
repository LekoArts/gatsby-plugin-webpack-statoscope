# gatsby-plugin-webpack-statoscope

Gatsby plugin for the statoscope HTML-report from webpack-stats (@statoscope/webpack-plugin)>

## Install

```shell
npm install gatsby-plugin-webpack-statoscope
```

## How to use

Add the plugin to your `gatsby-config` file:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {}
    }
  ]
}
```

## Plugin Options

- [optionA (**required**)](#optiona-required)
- [optionB](#optionb)

### optionA (**required**)

Example description for optionA.

**Field type**: `String`

```js
{
  resolve: `gatsby-plugin-webpack-statoscope`,
  options: {
    optionA: "Hello World",
  },
}
```

### optionB

Example description for optionB.

**Field type**: `String`

**Default value**: `Hello World`

```js
{
  resolve: `gatsby-plugin-webpack-statoscope`,
  options: {
    optionB: "Hello World Again",
  },
}
```
