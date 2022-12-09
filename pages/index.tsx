import { useEffect, useState } from 'react'
import ProductGrid from '~/components/ProductGrid'
import Box from '~/primitive/Box'
import Image from '~/primitive/Image'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const Home = () => {
  const [carrousel, setCarrousel] = useState(0)
  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrousel(current => {
        const next = current + 1

        return next === 2 ? 0 : next
      })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])


  return (
    <>
      <Box flex css={{ backgroundColor: 'green', paddingVertical: '$20' }}>
        <Box css={{ width: '30%' }}>
          <Image src={`images/product-${carrousel + 1}.jpeg`} />
        </Box>
      </Box>

      <Row horizontal='center' css={{ marginVertical: '$20' }}>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: true ? 'black' : 'gray' }}>Best Sellers</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>New Arrivals</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>Hot Sales</Text>
      </Row>

      <ProductGrid products={products} />
    </>
  )
}

export default Home