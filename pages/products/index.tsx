import { useMemo, useState } from 'react'
import Loading from '~/components/Loading'
import Pagination from '~/components/Pagination'
import ProductFilters from '~/components/ProductFilters'
import ProductGrid from '~/components/ProductGrid'
import useFetch from '~/hooks/useFetch'
import Grid, { GridItem } from '~/primitive/Grid'
import Icon from '~/primitive/Icon'
import Text from '~/primitive/Text'
import { styled } from '~/theme'
import { IProduct } from '~/types/product'

const PAGE_SIZE = 12

const GridItemProductFilters = styled(GridItem, {
  '@initial': {
    display: 'none'
  },
  '@md': {
    display: 'block'
  }
})

const BarProductFilters = styled('div', {
  backgroundColor: 'white',
  position: 'absolute',
  left: '$15',
  top: '$20',
  boxShadow: 'grey 15px 10px 15px -5px',
  flexDirection: 'row',

  '@initial': {
    display: 'flex',
  },
  '@md': {
    display: 'none'
  },

  variants: {
    open: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    }
  }
})

const MenuBox = styled('div', {
  '@initial': {
    display: 'block'
  },
  '@md': {
    display: 'none'
  }
})

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState<string>()
  const [open, setOpen] = useState(false)

  const state = useFetch<{ products: IProduct[] }>('https://dummyjson.com/products')

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
      toReturn = state.data.products
    else
      toReturn = state.data.products.filter(it => it.category === selectedCategory)

    if (!search) return toReturn

    const searchLowerCase = search.toLocaleLowerCase()

    return toReturn.filter(it =>
      it.title.toLocaleLowerCase().includes(searchLowerCase) ||
      it.description.toLocaleLowerCase().includes(searchLowerCase)
    )
  }, [state.data, selectedCategory, search])

  const { length: filteredProductsLength } = filteredProducts

  return (
    <>
      <MenuBox onClick={() => setOpen(true)}>
        <Icon name='menu' />
      </MenuBox>
      <BarProductFilters open={open}>
        <ProductFilters
          onClickCategories={onClickCategories}
          selectedCategory={selectedCategory}
          search={search}
          setSearch={setSearch}
        />
        <div onClick={() => setOpen(false)}>
          <Icon name='delete' />
        </div>
      </BarProductFilters>

      <Grid columns={{ '@initial': '1', '@md': '2', '@lg': '3' }} gapX='50'>
        <GridItemProductFilters>
          <ProductFilters
            onClickCategories={onClickCategories}
            selectedCategory={selectedCategory}
            search={search}
            setSearch={setSearch}
          />
        </GridItemProductFilters>
        <GridItem colSpan={{ '@initial': '1', '@lg': '2' }}>
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
    </>
  )
}

export default Products