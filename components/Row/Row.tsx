
import Box, { BoxProps } from '~/components/Box'

type Props = {} & Omit<BoxProps, 'flex'>

const Row = (props: Props) => {
  return <Box  {...props} flex />
}

export default Row