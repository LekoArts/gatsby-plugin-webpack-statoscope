# gatsby-plugin-webpack-statoscope

Gatsby plugin for the statoscope HTML-report from webpack-stats ([@statoscope/webpack-plugin](https://github.com/statoscope/statoscope/tree/master/packages/webpack-plugin)). The Statoscope webpack-plugin is developed by [Statoscope](https://statoscope.tech/).

Consider reading [Statoscope: A Course Of Intensive Therapy For Your Bundle](https://www.smashingmagazine.com/2022/02/statoscope-course-intensive-therapy-bundle/) to learn more.

## Install

```shell
npm install gatsby-plugin-webpack-statoscope
```

## How to use

Add the plugin to your `gatsby-config` file.

JavaScript:

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

TypeScript:

```ts:title=gatsby-config.ts
import type { GatsbyConfig, PluginRef } from "gatsby"
import type { PluginOptions as StatoscopePluginOptions } from "gatsby-plugin-webpack-statoscope"

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {} as StatoscopePluginOptions,
    },
  ] as PluginRef[],
}

export default config
```

Now run `gatsby build`. A browser window will automatically open with the Statoscope UI. The output will be placed into the `public/.statoscope` folder.

When enabling the `watchMode` option you can also use this plugin with `gatsby develop`.

## Plugin Options

All options for [@statoscope/webpack-plugin](https://github.com/statoscope/statoscope/tree/master/packages/webpack-plugin) are passed through. Read its [usage section](https://github.com/statoscope/statoscope/tree/master/packages/webpack-plugin#usage) to learn more.

By setting the `saveReportTo` and `saveStatsTo` options you can overwrite the default `public/.statoscope` location.
