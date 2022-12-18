import { useEffect, useState } from "react"

interface Props<T> {
  loading: boolean
  data: T | undefined
}

function useFetch<T>(url: string, dependency?: (number | string | undefined)[]) {
  const [state, setState] = useState<Props<T>>({ loading: false, data: undefined })

  useEffect(() => {
    if (dependency && !dependency.filter(it => !!it).length) return

    setState(current => ({ ...current, loading: true }))

    fetch(url)
      .then(res => res.json())
      .then(data => setState({ loading: false, data }))
  }, [...(dependency || [])])

  return state
}

export default useFetch