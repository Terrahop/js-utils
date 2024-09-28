/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Wait 'n' ms before continuing execution.
 * @param ms - Milliseconds to wait.
 * @returns Node timeout function.
 */
export const sleep = async (ms: number): Promise<NodeJS.Timeout> => await new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Debounce provided callback function.
 * @param callback - Callback to debounce.
 * @param wait - Wait n ms before running again.
 * @returns Debounced function.
 */
export const debounce = <T>(callback: (...args: T[]) => void, wait: number) => {
  let timeoutId: number | undefined
  return (...args: T[]) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback(...args)
    }, wait)
  }
}

/**
 * Throttle the provided callback function.
 * @param callback - Callback function to throttle.
 * @param delay - Wait n ms before running again.
 * @param last - Ensure the last or most recent function call is always executed.
 * @returns Throttled function.
 */
export const throttle = <T>(callback: (...args: T[]) => void, delay = 0, last = true) => {
  let lastCall = Number.NEGATIVE_INFINITY
  let wait: number
  let handle: NodeJS.Timeout
  return (...args: any[]) => {
    wait = lastCall + delay - Date.now()
    clearTimeout(handle)
    if (wait <= 0 || last) {
      handle = setTimeout(() => {
        callback(...args)
        lastCall = Date.now()
      }, wait)
    }
  }
}

/**
 * Throttle function execution to once per frame render.
 * @param callback - Callback function to throttle.
 * @returns Throttle function.
 */
export const throttleFrame = (callback: Function): ((event?: unknown) => void) => {
  let requestId: null | number | undefined
  let previousArguments: unknown[]

  const after = (context: unknown) => () => {
    requestId = undefined
    callback.apply(context, previousArguments)
  }

  const throttled = (...arguments_: unknown[]): void => {
    previousArguments = arguments_
    if (requestId === null) {
      requestId = requestAnimationFrame(after(this))
    }
  }

  throttled.cancel = () => {
    cancelAnimationFrame(requestId ?? 0)
    requestId = undefined
  }

  return throttled
}
