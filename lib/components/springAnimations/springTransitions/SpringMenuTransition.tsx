import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { BoxSizings } from "functionalui/types";
import { FC, ReactNode } from "react";
import useMeasure from "react-use-measure";

/**
 * top left, top right
 * bottom left, bottom right
 */
type Props = {
  isOpen: boolean;
  children: ReactNode;
};
const SpringMenuTransition: FC<Props> = ({ isOpen, children }) => {
  // this works
  const [ref, bounds] = useMeasure();
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    height: 0,
    width: 0,
  }));
  api.start({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? bounds.height : 0,
    width: isOpen ? bounds.width : 0,
  });
  return (
    <Container
      style={{
        position: "absolute",
        overflow: "hidden",
        ...styles,
      }}
      boxSizing={BoxSizings.BorderBox}
    >
      <div
        ref={ref}
        style={{
          width: "max-content",
          height: "max-content",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </Container>
  );
};

export default SpringMenuTransition;
