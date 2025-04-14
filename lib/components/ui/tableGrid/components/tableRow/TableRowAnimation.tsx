import { FC, ReactNode } from "react";
import { useSpring } from "@react-spring/web";
import { Container } from "functionalui";
import { Spacings } from "functionalui/types";

interface P {
  hover: boolean;
  onHover: boolean;
  isClicked: boolean;
  children: ReactNode;
}
const TableRowAnimation: FC<P> = ({ hover, onHover, isClicked, children }) => {
  const hoverAnimation = useSpring({
    backgroundColor: onHover ? "rgba(255,255,255, .1)" : "rgba(255,255,255,0)",
    borderRadius: onHover ? "10px" : "10px",
  });
  const onClickAnimation = useSpring({
    backgroundColor: isClicked
      ? "rgba(255,255,255, .15)"
      : "rgba(255,255,255,0)",
    borderRadius: isClicked ? "10px" : "10px",
    // config: {
    //   // mass: 0.1,
    //   // friction: 1,
    //   // duration: 1,
    //   velocity: 0.05,
    //   clamp: true,
    // },
  });

  return (
    <Container style={hover ? onClickAnimation : undefined}>
      <Container
        style={hover ? hoverAnimation : undefined}
        paddingLeft={Spacings.Size1}
        paddingRight={Spacings.Size1}
      >
        {children}
      </Container>
    </Container>
  );
};

export default TableRowAnimation;
