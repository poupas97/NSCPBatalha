import { useMemo, useState } from 'react'
import Loading from '~/components/Loading'
import Pagination from '~/components/Pagination'
import ProductFilters from '~/components/ProductFilters'
import ProductGrid from '~/components/ProductGrid'
import useFetch from '~/hooks/useFetch'
import Grid, { GridItem } from '~/primitive/Grid'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const PAGE_SIZE = 9

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState<string>()

  const state = useFetch<IProduct[]>('https://fakestoreapi.com/products')

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
    if (!state.data) return []

    let toReturn: IProduct[] = []

    if (!selectedCategory)
      toReturn = state.data
    else
      toReturn = state.data.filter(it => it.category === selectedCategory)

    if (!search) return toReturn

    const searchLowerCase = search.toLocaleLowerCase()

    return toReturn.filter(it =>
      it.title.toLocaleLowerCase().includes(searchLowerCase) ||
      it.description.toLocaleLowerCase().includes(searchLowerCase)
    )
  }, [state.data, selectedCategory, search])

  const { length: filteredProductsLength } = filteredProducts

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
        {state.loading ? <Loading size='50' /> :
          <>
            <Text type='4' css={{ marginBottom: '$20' }}>
              {`Showing from ${1 + PAGE_SIZE * page
                } to ${filteredProductsLength < PAGE_SIZE * page + PAGE_SIZE ?
                  filteredProductsLength : PAGE_SIZE * page + PAGE_SIZE
                } items in total, of ${filteredProductsLength}`}
            </Text>

            <ProductGrid products={filteredProducts} pageInfo={{ page, size: PAGE_SIZE }} />

            <Pagination onClick={onChangePage} pages={Math.ceil(filteredProductsLength / PAGE_SIZE)} />
          </>
        }
      </GridItem>
    </Grid>
  )
}

export default Products