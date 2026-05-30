import { useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { FC, ReactNode } from "react";
interface P {
  isOpen: boolean;
  w: number;
  h: number;
  children: ReactNode;
}
const DropdownSC2: FC<P> = ({ isOpen = false, w, h, children }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: h, width: w },
    leave: { opacity: 0, height: 0, width: 0 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <Container
          style={{
            ...styles,
            position: "absolute",
            overflow: "hidden",
            // maxHeight: "300px",
          }}
        >
          {children}
        </Container>
      ),
  );
};

export default DropdownSC2;
