import { IProduct } from "~/types/product"

export const RootRoute = '/'

export const ShopRoute = '/shop'
export const ShopItemRoute = (id: IProduct['id']) => `${ShopRoute}/${id}`

export const CartRoute = '/cart'
export const CheckoutRoute = '/checkout'
