const sizes = {
  mobile: 480,
  tablet: 768,
  largeDevice: 1200,
  extraLargeDevice: 1600,
}

const minMediaQuery = (size: number, styles: string) => `
  @media (min-width: ${size}px) {
    ${styles}
  }
`

const maxMediaQuery = (size: number, styles: string) => `
  @media (max-width: ${size}px) {
    ${styles}
  }
`

const betweenMediaQuery = (
  minSize: number,
  maxSize: number,
  styles: string
) => `
  @media (min-width: ${minSize}px) and (max-width: ${maxSize}px) {
    ${styles}
  }
`

export const media = {
  minLargeDesktop: (styles: string) => minMediaQuery(sizes.largeDevice, styles),
  minDesktop: (styles: string) => minMediaQuery(sizes.tablet, styles),
  minSmallLargeDesktop: (styles: string) => minMediaQuery(sizes.mobile, styles),
  mobile: (styles: string) => maxMediaQuery(sizes.mobile, styles),
  maxTablet: (styles: string) => maxMediaQuery(sizes.tablet, styles),
  maxLargeDevice: (styles: string) => maxMediaQuery(sizes.largeDevice, styles),
  maxExtraLargeDevice: (styles: string) =>
    maxMediaQuery(sizes.extraLargeDevice, styles),
  betweenMobileAndTablet: (styles: string) =>
    betweenMediaQuery(sizes.mobile, sizes.tablet, styles),
  betweenTabletAndLargeDevice: (styles: string) =>
    betweenMediaQuery(sizes.tablet, sizes.largeDevice, styles),
}

// Usage example:
// import { media } from './utils/mediaQueries';
// const styles = `
//   ${media.mobile(`
//     background-color: red;
//   `)}
//   ${media.minDesktop(`
//     background-color: blue;
//   `)}
// `;
