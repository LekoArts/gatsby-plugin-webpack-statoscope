# gatsby-plugin-webpack-statoscope

Gatsby plugin for the statoscope HTML-report from webpack-stats ([@statoscope/webpack-plugin](https://github.com/statoscope/statoscope/tree/master/packages/webpack-plugin)). The Statoscope webpack-plugin is developed by [Statoscope](https://statoscope.tech/). This plugin is an alternative to [gatsby-plugin-webpack-bundle-analyser-v2](https://www.gatsbyjs.com/plugins/gatsby-plugin-webpack-bundle-analyser-v2/) which also allows you to visualize the size of output files with an interactive zoomable treemap.

Consider reading [Statoscope: A Course Of Intensive Therapy For Your Bundle](https://www.smashingmagazine.com/2022/02/statoscope-course-intensive-therapy-bundle/) to learn more.

<p>
  <a href="https://github.com/LekoArts/gatsby-plugin-webpack-statoscope/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="gatsby-plugin-webpack-statoscope is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/gatsby-plugin-webpack-statoscope">
    <img src="https://img.shields.io/npm/v/gatsby-plugin-webpack-statoscope.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-plugin-webpack-statoscope?minimal=true">
    <img src="https://img.shields.io/npm/dm/gatsby-plugin-webpack-statoscope.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-plugin-webpack-statoscope?minimal=true">
    <img src="https://img.shields.io/npm/dt/gatsby-plugin-webpack-statoscope.svg" alt="Total downloads on npm." />
  </a>
  <a href="https://www.lekoarts.de?utm_source=gatsby-plugin-webpack-statoscope">
    <img alt="Website" src="https://img.shields.io/badge/-website-blue">
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

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
