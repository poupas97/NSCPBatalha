import { useEffect, useMemo, useState } from 'react'
import Pagination from '~/components/Pagination'
import ProductFilters from '~/components/ProductFilters'
import ProductGrid from '~/components/ProductGrid'
import Grid, { GridItem } from '~/primitive/Grid'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const PAGE_SIZE = 9

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>()
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState<string>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  const onClickCategories = (category: string) => () => {
    if (selectedCategory === category) {
      setSelectedCategory(undefined)
      return
    }

    setSelectedCategory(category)
    setPage(0)
  }

  const onChangePage = (page: number) => () => {
    setPage(page)
  }

  const filteredProducts = useMemo(() => {
    if (!products) return []

    let toReturn: IProduct[] = []

    if (!selectedCategory)
      toReturn = products
    else
      products.filter(it => it.category === selectedCategory)

    if (!search) return toReturn

    const searchLowerCase = search.toLocaleLowerCase()

    return toReturn.filter(it =>
      it.title.toLocaleLowerCase().includes(searchLowerCase) ||
      it.description.toLocaleLowerCase().includes(searchLowerCase)
    )
  }, [products, selectedCategory, search])

  return (
    <Grid columns='3' gapX='50'>
      <GridItem>
        <ProductFilters
          onClickCategories={onClickCategories}
          selectedCategory={selectedCategory}
          search={search}
          setSearch={setSearch}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Text type='4' css={{ marginBottom: '$20' }}>{`Showing ${9} items of ${9}`}</Text>

        <ProductGrid products={filteredProducts} pageInfo={{ page, size: PAGE_SIZE }} />

        <Pagination onClick={onChangePage} pages={Math.ceil(filteredProducts.length / PAGE_SIZE)} />
      </GridItem>
    </Grid>
  )
}

export default Products