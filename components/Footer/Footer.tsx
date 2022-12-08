import React from 'react'
import Row from '~/primitive/Row'
import Box from '~/primitive/Box'
import Text from '~/primitive/Text'

const Footer = () => {

  return (
    <Row vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', backgroundColor: 'green' }}>
      <Box>Logo</Box>
      <Box flex vertical='center' css={{ flex: 1, }}>
        <Text>sjjh sjk h kjsdh kjsdhjs kjsd hkjsd hk sdfjhkjsdf kj s</Text>
        <Text>sjjh sjk çflsdjjsfj slksd jljsdsdopisodf sd dskksdfj lkdfsj dskjsd</Text>
      </Box>
      <Box>Options</Box>
    </Row>
  )
}

export default Footer