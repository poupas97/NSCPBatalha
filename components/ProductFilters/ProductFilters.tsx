import React from 'react'
import Loading from '~/components/Loading'
import useFetch from '~/hooks/useFetch'
import Box from '~/primitive/Box'
import Input from '~/primitive/Input'
import Text from '~/primitive/Text'
import { styled } from '~/theme'
import { IProductCategory } from '~/types/product'

const SearchInput = styled(Input, {
  marginBottom: '$20',
})

interface Props {
  onClickCategories: (category: string) => () => void
  selectedCategory: string | undefined
  search: string | undefined
  setSearch: (value: string) => void
}

const ProductFilters = (props: Props) => {
  const { onClickCategories, selectedCategory, search, setSearch } = props

  const state = useFetch<IProductCategory[]>('https://dummyjson.com/products/categories')

  return (
    <Box flex>
      <SearchInput placeholder='Search' value={search} onChange={setSearch} />
      <Text type='6'>Categories</Text>
      {state.loading ? <Loading size='50' /> : state.data?.map(it => (
        <Text
          key={it}
          bold={it === selectedCategory}
          onClick={onClickCategories(it)}
        >
          {it}
        </Text>
      ))
      }
    </Box>
  )
}

export default ProductFilters