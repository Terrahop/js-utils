/**
 * Create an array of equally stepped values between the provided min and max values.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @param steps - Number of steps to create between the min and max.
 */
export const createArraySteps = (min: number, max: number, steps: number): number[] => {
  const stepsOut: number[] = Array.from({ length: steps })
  const distance = max - min
  for (let i = 0; i < steps; i++) {
    stepsOut[i] = min + distance * (i / (steps - 1))
  }
  return stepsOut
}

/**
 * Chunk the provided array into chunks/segments of 'chunkSize' amounts.
 * @param array - Array to chunk.
 * @param chunkSize - Size of each array chunk.
 */
export const chunkArray = <T>(array: T[], chunkSize: number): T[][] => {
  const out = []
  for (let i = 0, len = array.length; i < len; i += chunkSize) out.push(array.slice(i, i + chunkSize))
  return out
}

/**
 * Find the maximum number in the provided array.
 * @param arr - Array to search.
 */
export const maxNumber = (arr: number[]) => {
  let max = arr[0]
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

/**
 * Find the minimum number in the provided array.
 * @param arr - Array to search.
 */
export const minNumber = (arr: number[]) => {
  let min = arr[0]
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

/**
 * Trim the highest and lowest numbers in `arr`.
 * @param arr - Array of number values to trim.
 * @param trimPercent - Percent of the highest and lowest numbers to trim from the array.
 * @example ```ts
 * \/\/ Will sort the array by lowest to highest and remove the first and last 10% of numbers
 * const trimmed = trimmedAverage([2,1,5,4,3,10,7,8,9,6], 20) // trimmed = [2,3,4,5,6,7,8,9]
 * ```
 */
export const trimmedAverage = (arr: number[], trimPercent: number) => {
  if (trimPercent > 99 || trimPercent < 1) throw new Error('Value must be between 1 and 99 (inclusive)')

  const sorted = [...arr].sort((a, b) => a - b)
  const trimCount = Math.floor(sorted.length * ((trimPercent / 2) * 0.01))
  const trimmedValues = sorted.slice(trimCount, sorted.length - trimCount)

  if (trimmedValues.length === 0) return

  return trimmedValues
}

export const groupBy = <T, K extends keyof unknown>(arr: T[], key: (i: T) => K) =>
  arr.reduce<Record<K, T[]>>((groups, item) => {
    (groups[key(item)] ||= []).push(item)
    return groups
  }, {} as Record<K, T[]>)

/**
 * Mutate input object array by replacing an existing object with the provided object matched by the
 * input key.
 * @param arr - Array to mutate.
 * @param key - Object key to match in the array.
 * @param obj - Object to replace in the array.
 * @returns The original array mutated with the replaced object.
 */
export const replaceArrayObject = <T>(arr: T[], key: keyof T, obj: T): T[] => {
  const index = arr.findIndex((v) => v[key] === obj[key])
  if (index > -1) {
    arr[index] = obj
  }
  return arr
}
