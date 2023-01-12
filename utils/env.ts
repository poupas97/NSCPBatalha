const toBoolean = (value: string | undefined) => {
  if (value === 'true') return true

  return false
}

export const envs = {
  ffCart: toBoolean(process.env.NEXT_PUBLIC_FF_CART)
}
