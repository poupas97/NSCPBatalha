import Pagination from '~/components/Pagination/Pagination'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'

const Shop = () => {
  return (
    <>
      <Text type='4' css={{ marginBottom: '$20' }}>{`Showing ${9} items of ${9}`}</Text>
      <Grid columns={3} gapX={20} gapY={20}>
        {[...Array(9)].map((_, index) => (
          <GridItem key={index} >
            <Box flex>
              <Image src="/images/product-2.jpeg" />
              <Text>{`Product ${index + 1}`}</Text>
              <Text bold>{`€ ${3.1 * index}`}</Text>
              <Button text='+ Add to cart' />
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Pagination />
    </>
  )
}

export default Shop