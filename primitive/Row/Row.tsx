import Box, { BoxProps } from '~/primitive/Box'

export type Props = {} & Omit<BoxProps, 'flex' | 'direction'>

const Row = (props: Props) => {
  return <Box  {...props} flex direction='row' />
}

export default Row