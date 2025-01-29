import React, { memo, useCallback } from 'react'
import { CheckboxWrapper, StyledCheckbox, Label, Icon } from './checkbox.styles'
import tickMark from '../../../assets/svg/mark.svg'

interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
      if (e.key === ' ') {
        e.preventDefault()
        onChange(!checked)
      }
    },
    [checked, onChange]
  )

  return (
    <CheckboxWrapper>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={checked}
        role="checkbox"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      />

      <Icon checked={checked}>
        {checked && <img src={tickMark} alt="Checked" />}
      </Icon>

      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  )
}

export default memo(Checkbox)
