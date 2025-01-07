// 20240504_1118
// @todo_20240504_1118("need testing")
import { useEffect, useRef } from "react"

const useFirstMount = () => {
  const firstMount = useRef(false)
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = true
    }
  }, [])
  return firstMount
}

export default useFirstMount