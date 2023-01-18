function isTruthy(value: any): boolean {
  if (typeof value === `boolean`) return value
  if (value === undefined || value === null) return false
  if (value.toLowerCase() === `true`) return true
  if (value.toLowerCase() === `false`) return false
  const number = parseInt(value, 10)
  if (Number.isNaN(number)) return false
  if (number > 0) return true
  return false
}

export const IS_GATSBY_CLOUD = isTruthy(process.env.GATSBY_CLOUD)
export const STATOSCOPE_OUTPUT_DIR = `.statoscope`
