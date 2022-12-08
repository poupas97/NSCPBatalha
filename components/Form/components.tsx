import Box from "~/primitive/Box";
import Row, { RowProps } from "~/primitive/Row";
import Text, { TextProps } from "~/primitive/Text";
import { styled } from "~/theme";

export const FormGroup = (props: RowProps) => <Row {...props} css={{ marginTop: '$20' }} />

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

export const Title = Text

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

  '&:focus': {
    color: '$green',
    border: '2px solid green',
    borderRadius: '4px',
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