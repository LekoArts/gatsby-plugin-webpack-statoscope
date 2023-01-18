import * as path from "path"
import type { GatsbyNode } from "gatsby"
import StatoscopeWebpackPlugin, { Options as StatoscopeOptions } from "@statoscope/webpack-plugin"
import type { PluginOptions } from "./types/plugin-options"
import { IS_GATSBY_CLOUD, STATOSCOPE_OUTPUT_DIR } from "./constants"

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  { actions, stage, store },
  pluginOptions: PluginOptions
) => {
  const root = store.getState().program.directory
  const outputPath = path.join(root, `public`, STATOSCOPE_OUTPUT_DIR)

  const isBuild = stage === `build-javascript`
  const isDevelop = stage === `develop`

  const statoscopeOptions: StatoscopeOptions = {
    saveReportTo: path.join(outputPath, `report-[name]-[hash].html`),
    saveStatsTo: path.join(outputPath, `stats-[name]-[hash].json`),
    name: `gatsby`,
    ...pluginOptions,
    ...(IS_GATSBY_CLOUD && { watchMode: false, open: false }),
  }

  if ((isDevelop && statoscopeOptions.watchMode) || isBuild) {
    actions.setWebpackConfig({
      plugins: [new StatoscopeWebpackPlugin(statoscopeOptions)],
    })
  }
}
