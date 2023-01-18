import { describe, it, expect } from "vitest"
import { testPluginOptionsSchema } from "gatsby-plugin-utils"
import { pluginOptionsSchema } from "../plugin-options-schema"

describe(`pluginOptionsSchema`, () => {
  it(`should invalidate incorrect options`, async () => {
    const options = {
      name: 1,
      saveReportTo: 1,
      saveStatsTo: 1,
      normalizeStats: ``,
      saveOnlyStats: ``,
      disableReportCompression: ``,
      additionalStats: `stats.json`,
      statsOptions: ``,
      watchMode: ``,
      open: `test`,
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(false)
    expect(errors).toEqual([
      `"name" must be a string`,
      `"saveReportTo" must be a string`,
      `"saveStatsTo" must be a string`,
      `"normalizeStats" must be a boolean`,
      `"saveOnlyStats" must be a boolean`,
      `"disableReportCompression" must be a boolean`,
      `"additionalStats" must be an array`,
      `"statsOptions" must be of type object`,
      `"watchMode" must be a boolean`,
      `"open" must be one of [dir, file, false]`,
    ])
  })

  it(`should validate correct options`, async () => {
    const options = {
      name: `gatsby`,
      saveReportTo: `report-[name]-[hash].html`,
      saveStatsTo: `stats-[name]-[hash].json`,
      normalizeStats: true,
      saveOnlyStats: true,
      disableReportCompression: true,
      additionalStats: [`stats.json`],
      statsOptions: {},
      watchMode: true,
      open: `file`,
      compressor: {},
      reports: {},
      extensions: {},
    }

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })

  it(`should make all options optional`, async () => {
    const options = {}

    const { isValid, errors } = await testPluginOptionsSchema(pluginOptionsSchema, options)

    expect(isValid).toBe(true)
    expect(errors).toEqual([])
  })
})
