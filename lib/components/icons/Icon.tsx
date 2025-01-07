import { Sizings } from "functionalui/types";
import { FC, memo } from "react";

type P = {
  name: string;
  size?: Sizings;
  width?: number;
  height?: number;
  color?: string;
}
const Icon: FC<P> = ({ name, color, size, width, height }) => {
  const IconC: any = () => import(`./iconpack/${name}.svg?react`)
  return (
    <IconC color={color} width={width || size} height={height || size} />
  )
}

export default memo(Icon)