import React from 'react'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'
import { styled } from '~/theme'
import { envs } from '~/utils/env'
import Navbar from '~/components/Navbar'

const Root = styled('div', {
  position: 'fixed',
  width: '100%',
  zIndex: 1,
})

const Container = styled(Row, {
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

const Header = () => {
  return (
    <Root>
      <Container vertical='center'>
        <Text>It is a long established fact that a reader will</Text>
        {envs.ffCart &&
          <Row vertical='center' onClick={() => { }} >
            <Icon name='user' />
            <Text css={{ marginLeft: '$10' }}>Sign in</Text>
          </Row>
        }
      </Container>
      <Navbar />
    </Root>
  )
}

export default Header