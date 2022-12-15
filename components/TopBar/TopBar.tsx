import React from 'react'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'
import { styled } from '~/theme'

const Root = styled(Row, {
  backgroundColor: 'black',
  color: 'white',
  justifyContent: 'space-between',
  paddingVertical: '$10',
  paddingHorizontal: '5%',

  '@sm': {
    paddingHorizontal: '10%',
  },
  '@md': {
    paddingHorizontal: '15%',
  },
  '@lg': {
    paddingHorizontal: '20%',
  },
})

const TopBar = () => {
  return (
    <Root vertical='center'>
      <Text>It is a long established fact that a reader will</Text>
      <Row vertical='center' onClick={() => { }} >
        <Icon name='user' />
        <Text css={{ marginLeft: '$10' }}>Sign in</Text>
      </Row>
    </Root>
  )
}

export default TopBar