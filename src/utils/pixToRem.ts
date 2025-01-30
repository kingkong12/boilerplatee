/**
 * Converts pixels to rem units.
 * @param {number} pixels - The pixel value to convert.
 * @returns {string} The value in rem units.
 */
function pixToRem(pixels: number): string {
  const base =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--default-font-size'
      )
    ) || 16
  return `${pixels / base}rem`
}

export { pixToRem }
// Example usage:
// const example = pixToRem(32) // "2rem" if --default-font-size is 16px
// console.log(example)
