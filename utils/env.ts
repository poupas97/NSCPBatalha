const toBoolean = (value: string | undefined) => {
  if (value === 'true') return true

  return false
}

export const envs = {
  ffHideCart: toBoolean(process.env.NEXT_PUBLIC_FF_HIDE_CART)
}
