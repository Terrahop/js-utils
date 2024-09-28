/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Retrieve the value of an object's property using a string as the key.
 * @param object - Object to resolve.
 * @param path - Path to key in object.
 * @param defaultValue - Default return value if path does not resolve.
 * @returns Resolved key's value.
 * @example ```ts
 *  const value = resolveObjPath({a:{b:{c: 'value'}}}, 'a.b.c') // value = 'value'
 * ```
 */
export const resolveObjKey = <T extends Record<string, any> | undefined>(object: T, path: string, defaultValue?: any): any => {
  // eslint-disable-next-line unicorn/no-array-reduce, @typescript-eslint/no-unsafe-return
  return path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), object)
}
