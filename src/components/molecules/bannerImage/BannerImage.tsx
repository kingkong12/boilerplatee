import styled from 'styled-components'
import IntroBannerTitle from '../../../assets/svg/monitorAndMobile.svg'
import CircularIcon from '../../../assets/svg/circleLogo.svg'
import { media } from '../../../utils/mediaQueries'

const BannerImage = () => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <MobileandDesktopWrapper>
          <CircularResponsiveImage src={CircularIcon} alt="Circular Icon" />
          <ResponsiveImage src={IntroBannerTitle} alt="Circular Logo" />
        </MobileandDesktopWrapper>
      </ImageWrapper>
    </BannerContainer>
  )
}

export default BannerImage

const BannerContainer = styled.div`
  position: relative;
  height: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  ${media.minDesktop(`

  // width: 90%;
  // height: 90%;
  `)}

  ${media.minLargeDesktop(`

  `)}
`

const MobileandDesktopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  z-index: 2;
`

const CircularResponsiveImage = styled.img`
  position: absolute;
  top: 0%;
  left: 32%;

  width: 52%;
  height: 35%;

  transition:
    top 0.3s ease,
    left 0.3s ease;

  ${media.minDesktop(`
    top: -3%;
     left: 32%;
  `)}

  ${media.minLargeDesktop(`
 top: -3%;
  left: 32%;
         width: 53%;
    height: 33%;
  `)}
`
