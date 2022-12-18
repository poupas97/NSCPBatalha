import { IProduct } from "~/types"

export const RootRoute = '/'

export const ProductsRoute = '/products'
export const ProductRoute = (id: IProduct['id']) => `${ProductsRoute}/${id}`

export const CartRoute = '/cart'
export const CheckoutRoute = `${CartRoute}/checkout`
