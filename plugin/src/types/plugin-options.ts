import type { PluginOptions as GatsbyPluginOptions } from "gatsby"
import type { Options as StatoscopeOptions } from "@statoscope/webpack-plugin"

export interface PluginOptions extends GatsbyPluginOptions, StatoscopeOptions {}
