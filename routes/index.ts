import { IProduct } from "~/types/product"

export const RootRoute = '/'

export const ProductsRoute = '/products'
export const ProductRoute = (id: IProduct['id']) => `${ProductsRoute}/${id}`

export const CartRoute = '/cart'
export const CheckoutRoute = '/checkout'
