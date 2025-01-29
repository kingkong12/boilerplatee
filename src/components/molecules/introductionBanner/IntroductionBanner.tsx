import IntroBannerTitle from '../../../assets/svg/introbannertitle.svg'
import BannerText from '../../../assets/svg/BannerText.svg'
import { BannerContainer, ImageWrapper } from './introductionBanner.styles'

const IntroductionBanner: React.FC = () => {
  return (
    <BannerContainer>
      <ImageWrapper>
        <img src={IntroBannerTitle} alt="Introduction Banner Title" />
      </ImageWrapper>

      <ImageWrapper>
        <img src={BannerText} alt="Banner Text" />
      </ImageWrapper>
    </BannerContainer>
  )
}

export default IntroductionBanner
