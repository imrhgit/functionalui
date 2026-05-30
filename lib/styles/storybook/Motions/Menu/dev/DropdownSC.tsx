import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { FC, ReactNode } from "react";
interface P {
  isOpen: boolean;
  w: number;
  h: number;
  children: ReactNode;
}
const DropdownSC: FC<P> = ({ isOpen = false, w, h, children }) => {
  const [animationProps, api] = useSpring(() => ({
    opacity: 0,
    height: 0,
    width: 0,
  }));
  api.start({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? h : 0,
    width: isOpen ? w : 0,
  });

  return (
    <Container
      style={{ ...animationProps, position: "absolute", maxHeight: "300px" }}
    >
      {children}
    </Container>
  );
};

export default DropdownSC;
