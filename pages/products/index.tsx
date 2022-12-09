import { useEffect, useState } from 'react'
import Pagination from '~/components/Pagination/Pagination'
import ProductGrid from '~/components/ProductGrid'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  return (
    <>
      <Text type='4' css={{ marginBottom: '$20' }}>{`Showing ${9} items of ${9}`}</Text>

      <ProductGrid products={products} />

      <Pagination />
    </>
  )
}

export default Products