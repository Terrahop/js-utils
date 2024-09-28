type RGBArray = [number, number, number]

/**
 * Applies the provided opacity to a color, color can be in the format of either oklch or hex.
 * @param color - Color string to apply opacity to.
 * @param alpha - Opacity value.
 */
export const setColorOpacity = (color: string, alpha: number) => {
  if (color.startsWith('oklch')) {
    return `${color.slice(0, -1)} / ${alpha})`
  } else if (color.startsWith('#')) {
    return `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
  } else {
    return color
  }
}

/**
 * Convert the provided hex color string to array of rgb values.
 * @param hex - Hex string to convert.
 */
export const hexToRGB = (hex: string): RGBArray => {
  const [r, g, b] = hex.match(/\w\w/g)?.map((x) => Number.parseInt(x, 16)) ?? [0, 0, 0]
  return [r, g, b]
}

/**
 * @param r - Red.
 * @param g - Green.
 * @param b - Blue.
 * @returns RGb color converted to hex.
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
  const componentToHex = (c: number) => {
    const hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

/**
 * Get the distance between 2 rgb colors.
 * @param a - First color to compare.
 * @param b - Second color to compare.
 */
const rgbDistance = (a: RGBArray, b: RGBArray) => {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2) + Math.pow(a[2] - b[2], 2))
}

/**
 * Find the nearest rgb color in the provided rgb array.
 * @param colorRgb - RGB color to search..
 * @param colors - RGB color array to search through.
 * @param threshold - The acceptable threshold for the nearest color where 0 is the closest and anything above gets further away.
 */
export const nearestColor = (colorRgb: RGBArray, colors: Array<RGBArray>, threshold = 10) => {
  let lowest = Number.POSITIVE_INFINITY
  let tmp = 0
  let index = 0

  for (const [i, el] of colors.entries()) {
    tmp = rgbDistance(colorRgb, el)
    if (tmp < lowest) {
      lowest = tmp
      index = i
    }
  }

  return lowest > threshold ? undefined : index
}
