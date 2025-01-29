import { SecurityBanner, IconWrapper } from './footer.styles'
import LockIcon from '../../../assets/svg/lockIcon.svg'

export default function Footer() {
  return (
    <SecurityBanner>
      <IconWrapper>
        <img src={LockIcon} alt="Company Logo" />
      </IconWrapper>
      Your security is our priority
    </SecurityBanner>
  )
}
