import React from 'react'
import Box from '~/primitive/Box'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'

interface Props {
  images: string[];
  setCurrentImage: (next: string) => void
}

const ProductGridMinions = ({ images, setCurrentImage }: Props) => {
  return (
    <Grid columns={{ '@initial': 3, '@md': 2, }} gapX={20} gapY={20}>
      {images.map((image,) => (
        <GridItem key={image}>
          <Box onClick={() => setCurrentImage(image)}>
            <Image src={image} alt={image} respect="width" />
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ProductGridMinions