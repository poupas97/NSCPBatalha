import Box from "~/primitive/Box";
import Input from "~/primitive/Input";
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
  width: '100%',
  fontWeight: 'bold',

  variants: {
    hasError: {
      true: {
        color: 'red',
      }
    },
  }
})

export const FormError = (props: TextProps) => <Text {...props} type='4' bold color='red' />

export const FormInput = styled(Input, {
  variants: {
    hasError: {
      true: {
        borderBottom: '1px solid red',
      }
    }
  }
})

export const FormSelect = styled('select', {
  padding: '$10',
  border: 'none',
  borderBottom: '1px solid black',

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