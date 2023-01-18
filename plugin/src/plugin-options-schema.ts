import type { GatsbyNode } from "gatsby"
import type { ObjectSchema } from "gatsby-plugin-utils"

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
  Joi.object({
    name: Joi.string().optional(),
    saveReportTo: Joi.string().optional(),
    saveStatsTo: Joi.string().optional(),
    normalizeStats: Joi.boolean().optional(),
    saveOnlyStats: Joi.boolean().optional(),
    disableReportCompression: Joi.boolean().optional(),
    additionalStats: Joi.array().items(Joi.string()).optional(),
    statsOptions: Joi.object().optional(),
    watchMode: Joi.boolean().optional(),
    open: Joi.alternatives().try(Joi.string().valid(`dir`, `file`), false).optional(),
    compressor: Joi.any().optional(),
    reports: Joi.any().optional(),
    extensions: Joi.any().optional(),
  })
