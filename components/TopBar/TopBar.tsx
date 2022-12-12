import React from 'react'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'
import { styled } from '~/theme'

const Root = styled(Row, {
  padding: '0 20%',
  paddingVertical: '$10',
  backgroundColor: 'black',
  color: 'white',
  justifyContent: 'space-between'
})

const TopBar = () => {
  return (
    <Root vertical='center'>
      <Text>sfshdk jfhkjdsh jksdf kdsfkj dsflksdlkajçfj ajiowe</Text>
      <Row vertical='center' onClick={() => { }} >
        <Icon name='user' />
        <Text css={{ marginLeft: '$10' }}>Sign in</Text>
      </Row>
    </Root>
  )
}

export default TopBar