import { useEffect, useState } from "react";

const useDelayed = (delay: number) => {
  const [delayed, setDelayed] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayed(false)
    }, delay);

    return () => {
      clearTimeout(timeout)
    }
  }, [delay])
  // return (fn: any) => !delayed && fn();
  return delayed
}
export default useDelayed