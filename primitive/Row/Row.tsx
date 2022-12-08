
import Box, { BoxProps } from '~/primitive/Box'
import { styled } from '~/theme'

type Props = {} & Omit<BoxProps, 'flex'>

const Row = (props: Props) => {
  return <Box  {...props} flex direction='row' />
}

export default Row