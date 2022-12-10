import Box from "~/primitive/Box";
import Row, { RowProps } from "~/primitive/Row";
import Text, { TextProps } from "~/primitive/Text";
import { styled } from "~/theme";

export const FormGroup = (props: RowProps) => <Row {...props} css={{ marginVertical: '$20' }} />

export const FormGroupItem = styled(Box, {
  display: 'flex',
  flex: 1,

  variants: {
    lastInRow: {
      false: {
        paddingRight: '$15',
      }
    },
  }
})

export const FormTitle = styled(Text, {
  display: 'flex',
  flex: 1,

  variants: {
    hasError: {
      true: {
        color: 'red',
      }
    },
  }
})

export const FormError = (props: TextProps) => <Text {...props} type='4' bold color='red' />

export const FormInput = styled('input', {
  padding: '$10',
  border: 'none',
  borderBottom: '2px solid black',
  borderRadius: '4px',

  '&:focus': {
    color: '$green',
    borderBottomColor: 'green',
    outline: 'none'
  },

  '&[type=number]::-webkit-inner-spin-button': {
     opacity: 1,
  },

  variants: {
    hasError: {
      true: {
        borderBottom: '2px solid red',
      }
    }
  }
})

export const FormSelect = styled('select', {
  padding: '$10',
  border: 'none',
  borderBottom: '2px solid black',
  borderRadius: '4px',

  '&:focus': {
    color: '$green',
    borderBottomColor: 'green',
    outline: 'none'
  },

  variants: {
    hasError: {
      true: {
        border: '2px solid red',

      }
    }
  }
})