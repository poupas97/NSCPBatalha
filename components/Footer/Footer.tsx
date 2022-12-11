import React from 'react'
import Box from '~/primitive/Box'
import Text from '~/primitive/Text'
import Grid, { GridItem } from '~/primitive/Grid'

const Footer = () => {
  return (
    <Box vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', backgroundColor: 'green', }}>
      <Grid columns='4' gapX='20'>
        <GridItem>
          Logo
        </GridItem>
        <GridItem>
          <Text>qweuioqwe sdjkfkjsdhfkjhsdf sdhfkjjls dajgha jdghç vmncx,vm cxv z</Text>
          <Text>sjjh sjk çflsdjjsfj slksd jljsdsdopisodf sd dskksdfj lkdfsj dskjsd</Text>
        </GridItem>
        <GridItem>
          <Text>sjjh sjk h kjsdh kjsdhjs kjsd hkjsd hk sdfjhkjsdf kj s</Text>
          <Text>sjjh sjk çflsdjjsfj slksd jljsdsdopisodf sd dskksdfj lkdfsj dskjsd</Text>
        </GridItem>
        <GridItem>
          <Text>qreww rqeowruourq ioufdhj fkh alkdfljkdfh adsfjhasdkfhdsjf</Text>
          <Text>erwtuiwe rgf gbfhgjk sfgd gçajncmnmn zzuhaiefawfauif euiierqtuiqiopu </Text>
        </GridItem>
      </Grid>
      <Box flex vertical='center' css={{ paddingTop: '$10', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <Text>
          Copyright © 20222020 All rights reserved | This template is made with by
        </Text>
      </Box>
    </Box>
  )
}

export default Footer