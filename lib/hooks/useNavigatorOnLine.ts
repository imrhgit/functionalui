import { useEffect, useState } from "react";

const getOnlineStatus = (): boolean => typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
  ? navigator.onLine
  : true;

const useNavigatorOnLine = () => {
  const [status, setStatus] = useState<boolean>(getOnlineStatus())

  const setOnline = () => setStatus(true)
  const setOffline = () => setStatus(false)

  useEffect(() => {
    window.addEventListener('online', setOnline)
    window.addEventListener('offline', setOffline)

    return () => {
      window.removeEventListener('online', setOnline)
      window.removeEventListener('offline', setOffline)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getOnlineStatus()])

  return status
}

export default useNavigatorOnLine