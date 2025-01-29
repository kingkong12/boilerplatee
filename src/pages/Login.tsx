import { LoginForm } from '../components/molecules'
import IntroductionBanner from '../components/molecules/introductionBanner/IntroductionBanner'
import BannerImage from '../components/molecules/bannerImage/BannerImage'
import UserProfile from '../assets/svg/userprofile.svg'
import {
  Container,
  FormWrapper,
  TextContainer,
  ImageContainer,
  FloatingUserProfile,
} from './login.styles'

const Login: React.FC = () => {
  return (
    <Container>
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
      <TextContainer>
        <IntroductionBanner />
      </TextContainer>
      <ImageContainer>
        <BannerImage />
      </ImageContainer>
      <FloatingUserProfile>
        <img src={UserProfile} alt="User Profile" />
      </FloatingUserProfile>
    </Container>
  )
}

export default Login
