import { ChangeEvent, FocusEvent, } from "react";
import { styled } from "~/theme";

export const StyledInput = styled('input', {
  padding: '$10',
  border: 'none',
  borderBottom: '1px solid black',

  '&:focus': {
    color: '$green',
    borderBottomColor: 'green',
    outline: 'none'
  },

  '&[type=number]::-webkit-inner-spin-button': {
    opacity: 1,
  },
})

type Props = {
  placeholder?: string
  onChange: (value: string) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  value: string | undefined
  disabled?: boolean
  type?: 'string' | 'number'
  className?: string
}

const Input = ({ onChange, value, ...rest }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  };

  return <StyledInput onChange={handleChange} value={value || ''}{...rest} />
}

export default Input