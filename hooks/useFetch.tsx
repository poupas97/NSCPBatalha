import { useEffect, useState } from "react"

interface Props<T> {
  loading: boolean
  data: T | undefined
}

function useFetch<T>(url: string) {
  const [state, setState] = useState<Props<T>>({ loading: false, data: undefined })

  useEffect(() => {
    setState(current => ({ ...current, loading: true }))

    fetch(url)
      .then(res => res.json())
      .then(data => setState({ loading: false, data }))
  }, [])

  return state
}

export default useFetch