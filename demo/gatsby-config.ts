import type { GatsbyConfig, PluginRef } from "gatsby"
import type { PluginOptions } from "gatsby-plugin-webpack-statoscope"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `gatsby-plugin-webpack-statoscope`,
    siteUrl: `https://urltodeployeddemo.com`,
  },
  jsxRuntime: `automatic`,
  plugins: [
    {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        optionA: `valueA`,
        optionB: `valueB`,
      } as PluginOptions,
    },
  ] as PluginRef[],
}

export default config
