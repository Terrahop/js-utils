/**
 * Returns a number whose value is limited to the given range.
 * @param number - Number to clamp.
 * @param min - The lower boundary of the output range.
 * @param max - The upper boundary of the output range.
 * @returns A number within the range [min, max].
 */
export const clamp = (number: number, min: number, max: number): number => {
  return Math.max(min, Math.min(number, max))
}

/**
 * Get the value between the provided range by percentage.
 * @param min - Minimum value in range.
 * @param max - Max value in range.
 * @param percent - Percentage to lookup.
 */
export const valueFromPercent = (min: number, max: number, percent: number) => (((max - min) / 100) * percent) + min

/**
 * Parse a number to the provided decimal places, defaults to 2.
 * If there only no decimal places returns the number without any decimals.
 * @param value - Value to parse.
 * @param decimal - Decimal points.
 * @example ```js
 * parseDecimal(3.4211) // 3.42
 * parseDecimal(3.4211, 1) // 3.4
 * parseDecimal(3) // 3
 * ```
 */
export const parseDecimal = (value: number, decimal = 2) => {
  const base = Math.pow(10, decimal)
  return Math.round((value + Number.EPSILON) * base) / base
}

/**
 * Calculate magnitude of a U and V component.
 * @param u - X Vector.
 * @param v - Y Vector.
 * @returns Magnitude.
 */
export const getMagnitude = (u: number, v: number): number => {
  return Math.hypot(u, v)
}

/**
 * Calculate angle given a U and V component.
 * @param u - U component.
 * @param v - V component.
 */
export const getAngle = (u: number, v: number): number => {
  const angle = Math.atan2(v, u) // radians
  const degrees = (180 * angle) / Math.PI // degrees
  return (360 + Math.round(degrees)) % 360 // round number, avoid decimal fragments
}
