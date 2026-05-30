import { useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { FC, ReactNode } from "react";
type directions = "horizontal" | "vertical";
const directions: any = {
  horizontal: {
    from: (offsetBy: number) => ({ x: 10 * offsetBy }),
    enter: (offsetBy: number) => ({ x: 0 * offsetBy }),
    leave: (offsetBy: number) => ({ x: -10 * offsetBy }),
  },
  vertical: {
    from: (offsetBy: number) => ({ y: 10 * offsetBy }),
    enter: (offsetBy: number) => ({ y: 0 * offsetBy }),
    leave: (offsetBy: number) => ({ y: -10 * offsetBy }),
  },
};
interface P {
  direction: directions;
  isShown?: boolean;
  enterOffsetBy?: number;
  children?: ReactNode;
}
const SpringEnterOffsetBy: FC<P> = ({
  direction = "horizontal",
  isShown = true,
  enterOffsetBy = 1,
  children,
}) => {
  const transitionAnim = useTransition(isShown, {
    from: {
      ...directions[direction].from(enterOffsetBy),
      opacity: 0,
      display: "none",
    },
    enter: {
      ...directions[direction].enter(enterOffsetBy),
      opacity: 1,
      display: "block",
    },
    leave: {
      ...directions[direction].leave(enterOffsetBy),
      opacity: 0,
      display: "none",
    },
    // delay: 150,
  });
  return (
    <>
      {transitionAnim(
        (styles, item) =>
          item && (
            <Container
              style={{
                height: "inherit",
                width: "inherit",
                overflow: "hidden",
                ...styles,
              }}
            >
              {children}
            </Container>
          ),
      )}
    </>
  );
};

export default SpringEnterOffsetBy;
