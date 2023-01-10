import React, { ReactElement } from 'react'
import Box from '~/primitive/Box'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { styled } from '~/theme'
import { IHighlight } from '~/types'

const Container = styled(Box, {
  marginBottom: '$30',
  padding: '$20',

  variants: {
    isLast: {
      false: {
        borderBottom: '1px solid $green',
      }
    }
  }
})

interface Props {
  highlight: IHighlight
  isLast?: boolean
}

const Highlight = ({ highlight, isLast }: Props) => {
  return (
    <Container isLast={isLast}>
      <Row horizontal='spaceBetween'>
        <Text type='6'>{highlight.metadata.title}</Text>
        <Text type='4'>{highlight.metadata.date}</Text>
      </Row>
      <Grid
        columns={{ '@initial': 2, '@md': 3, '@lg': 4 }}
        gapX={20}
        gapY={20}
        css={{ marginVertical: '$20' }}
      >
        {highlight.metadata.images.map((item, index) => (
          <GridItem key={index} >
            <Box flex horizontal='center' css={{ flex: 1, }}>
              <Image src={`images/${item}`} alt="highlight image" respect="auto" />
            </Box>
          </GridItem>
        ))}
      </Grid>
      {highlight.metadata.description.map((item, index) => (
        <Text key={index} as='p'>{item}</Text>
      ))}
    </Container>
  )
}

export default Highlight
