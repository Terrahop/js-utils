/** Get the first letter of the first and last word in the provided string uppercased */
export const getInitials = (v: string) => {
  const names = v.split(' ')
  let initials = names[0].slice(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names.at(-1)?.slice(0, 1).toUpperCase()
  }
  return initials
}

/**
 * Capitalize first character of input text.
 * @param input - Input text to capitalize.
 * @returns Capitalized text.
 * @example console.log(capitalize('hello world')) // prints 'Hello world'
 */
export const capitalize = (input: string): string => input.charAt(0).toUpperCase() + input.slice(1)
