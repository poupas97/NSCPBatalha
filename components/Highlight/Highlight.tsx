import React from 'react'
import Box from '~/primitive/Box'
import Text from '~/primitive/Text'
import { IHighlight } from '~/types'

interface Props {
  highlight: IHighlight
}

const Highlight = ({ highlight }: Props) => {
  return (
    <Box>
      <Text>{highlight.id}</Text>
      <Text>{highlight.date}</Text>
      <Text>{highlight.content}</Text>
    </Box>
  )
}

export default Highlight