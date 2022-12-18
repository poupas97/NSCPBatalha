import React, { createContext, useContext, useState } from 'react'
import { CartItem } from '~/types'

const CONTEXT = createContext({
  items: [] as CartItem[],
  setItems: (item: CartItem) => { },
})

interface Props {
  children: JSX.Element[]
}

const CartContext = ({ children }: Props) => {
  const [items, setItems] = useState<CartItem[]>([])

  const handleChange = (value: CartItem) => {
    const nextItems = [...items]

    // there is the item with same size?
    const index = nextItems.findIndex(it => it.item.id === value.item.id && it.size === value.size)

    if (index === -1) {
      nextItems.push(value)
    } else {
      nextItems[index].quantity = nextItems[index].quantity + 1
    }

    setItems(nextItems)
  }

  const value = { items, setItems: handleChange }

  return (
    <CONTEXT.Provider value={value}>
      {children}
    </CONTEXT.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CONTEXT)
}

export default CartContext
