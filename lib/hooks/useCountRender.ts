import { useRef } from "react"

export const useCountRender = (props: any) => {
  const render = useRef(1)
  console.log(props, 'renders: ', render.current++)
}