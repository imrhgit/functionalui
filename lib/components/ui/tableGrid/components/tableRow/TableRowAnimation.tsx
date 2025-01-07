import { FC, ReactNode } from "react";
import { useSpring } from "@react-spring/web";
import { Container } from "functionalui";

interface P {
  hover: boolean;
  onHover: boolean;
  isClicked: boolean;
  children: ReactNode;
}
const TableRowAnimation: FC<P> = ({ hover, onHover, isClicked, children }) => {
  const hoverAnimation = useSpring({
    backgroundColor: onHover ? "rgba(0,0,0, .1)" : "rgba(255,255,255,0)",
    borderRadius: onHover ? "13px" : "13px",
  });
  const onClickAnimation = useSpring({
    backgroundColor: isClicked ? "rgba(0,0,0, .1)" : "rgba(255,255,255,0)",
    borderRadius: isClicked ? "13px" : "13px",
    config: {
      // mass: 0.1,
      // friction: 1,
      duration: 1,
    },
  });

  return (
    <Container style={hover ? onClickAnimation : undefined}>
      <Container style={hover ? hoverAnimation : undefined}>
        {children}
      </Container>
    </Container>
  );
};

export default TableRowAnimation;
