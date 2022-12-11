import React, { useEffect, useState } from 'react'
import Box from '~/primitive/Box'
import Input from '~/primitive/Input'
import Text from '~/primitive/Text'
import { styled } from '~/theme'

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

  const [categories, setCategories] = useState<string[]>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  return (
    <Box flex>
      <SearchInput placeholder='Search' value={search} onChange={setSearch} />

      <Text type='6'>Categories</Text>
      {categories?.map(it => (
        <Text
          key={it}
          bold={it === selectedCategory}
          onClick={onClickCategories(it)}
        >
          {it}
        </Text>
      ))}
    </Box>
  )
}

export default ProductFilters