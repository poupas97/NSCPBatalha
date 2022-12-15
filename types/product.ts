export type IProduct = {
  id: string
  title: string
  price: number
  images: string[]
  description: string
  category: IProductCategory
}

export type IProductCategory = string