import { Sizings } from "functionalui/types";
import { FC, memo } from "react";

type P = {
  name: string;
  size?: Sizings;
  width?: number;
  height?: number;
  className?: string;
};
const Icon: FC<P> = ({ name, className, size, width, height }) => {
  const IconC: any = () => import(`./iconpack/${name}.svg?react`);
  return (
    <IconC
      className={className}
      width={width || size}
      height={height || size}
    />
  );
};

export default memo(Icon);
