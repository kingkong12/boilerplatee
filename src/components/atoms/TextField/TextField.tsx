import { useState, memo, useCallback } from 'react'
import {
  InputWrapper,
  Input,
  Label,
  InputIconWrapper,
  Icon,
} from './textField.styles'
import eyeIcon from '../../../assets/svg/eyeIcon.svg'
import eyeShow from '../../../assets/svg/eyeShow.svg'

interface InputFieldProps {
  id?: string
  label?: string
  type?: string
  placeholder?: string
  required?: boolean
  errorMessage?: string
}

const TextField: React.FC<InputFieldProps> = ({
  id,
  label = `label`,
  type = 'password',
  placeholder = '',
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleIconClick = useCallback(() => {
    if (type === 'password') {
      setIsPasswordVisible(!isPasswordVisible)
    }
  }, [type, isPasswordVisible])

  const handleIconKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleIconClick()
      }
    },
    [handleIconClick]
  )

  return (
    <InputWrapper>
      <InputIconWrapper>
        <Input
          id={id}
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-describedby={`${id}-error`}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== '')}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {type === 'password' && (
          <Icon
            onClick={handleIconClick}
            onKeyDown={handleIconKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Toggle password visibility"
            hasopacity={isPasswordVisible}
          >
            <img
              src={isPasswordVisible ? eyeIcon : eyeShow}
              alt="Toggle visibility"
            />
          </Icon>
        )}
      </InputIconWrapper>
      <Label htmlFor={id} isfocused={isFocused || value !== ''}>
        {label}
        {required && ' *'}
      </Label>
    </InputWrapper>
  )
}

export default memo(TextField)
