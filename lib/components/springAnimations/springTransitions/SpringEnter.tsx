import { useTransition } from "@react-spring/web";
import { Container } from "functionalui";
import { FC, ReactNode } from "react";

type directions = "horizontal" | "vertical" | "verticalInverted";
const directions: any = {
  horizontal: {
    from: { x: 10 },
    enter: { x: 0 },
    leave: { x: -10 },
  },
  vertical: {
    from: { y: 10 },
    enter: { y: 0 },
    leave: { y: -10 },
  },
  verticalInverted: {
    from: { y: -10 },
    enter: { y: 0 },
    leave: { y: 10 },
  },
};
interface P {
  direction: directions;
  isShown: boolean;
  children?: ReactNode;
}
const SpringEnter: FC<P> = ({ direction, isShown = true, children }) => {
  const transitionAnim = useTransition(isShown, {
    from: { ...directions[direction].from, opacity: 0, display: "none" },
    enter: { ...directions[direction].enter, opacity: 1, display: "block" },
    leave: { ...directions[direction].leave, opacity: 0, display: "none" },
    // delay: 150,
  });
  return (
    <>
      {transitionAnim(
        (styles, item) =>
          item && (
            <Container
              style={{
                ...styles,
                height: "inherit",
                width: "inherit",
                overflow: "hidden",
              }}
            >
              {children}
            </Container>
          ),
      )}
    </>
  );
};

export default SpringEnter;
