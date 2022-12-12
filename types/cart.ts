import { IProduct } from "./product"

export type CartItem = {
  item: IProduct
  quantity: number
  size: string
}