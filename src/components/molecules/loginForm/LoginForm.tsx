import { useState } from 'react'
import { Button, Checkbox, TextField } from '../../atoms'
import Logosvg from '../../../assets/svg/logo.svg'
import Footer from '../../atoms/Footer/Footer'
import {
  Container,
  ImageWrapper,
  FormWrapper,
  FormTitle,
  ForgotPasswordText,
  ButtonWrapper,
} from './loginForm.styles'

const formTitle = 'USER LOGIN'
const forgotPasswordText = "Don't remember your password ?"

export default function LoginForm() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <ImageWrapper>
        <img src={Logosvg} alt="Company Logo" />
      </ImageWrapper>

      <FormWrapper>
        <FormTitle>
          <p>{formTitle}</p>
        </FormTitle>
        <TextField label="Business Email ID" type="text" />
        <TextField label="Password" />
        <Checkbox
          id="remember-me"
          label="Remember me"
          checked={isChecked}
          onChange={(checked) => setIsChecked(checked)}
        />
        <ForgotPasswordText>{forgotPasswordText}</ForgotPasswordText>
        <ButtonWrapper>
          <Button
            text={'Login'}
            onClick={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        </ButtonWrapper>
      </FormWrapper>
      <Footer />
    </Container>
  )
}
