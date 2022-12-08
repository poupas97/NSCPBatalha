import { useEffect, useState } from 'react'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { createArray } from '~/utils/array'

const Home = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(current => {
        const next = current + 1

        return next === 2 ? 0 : next
      })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Box flex css={{ backgroundColor: 'green', paddingVertical: '$20' }}>
        <Box css={{ width: '30%' }}>
          <Image src={`images/product-${index + 1}.jpeg`} />
        </Box>
      </Box>
      <Text type='7' bold>Arrivals</Text>
      <Grid columns={3} gapX={20} gapY={20}>
        {createArray(6).map((_, index) => (
          <GridItem key={index} >
            <Box flex>
              <Image src={`images/product-${index % 2 === 0 ? 1 : 2}.jpeg`} />
              <Text>{`Product ${index + 1}`}</Text>
              <Text bold>{`€ ${3.1 * index}`}</Text>
              <Button text='+ Add to cart' />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default Home