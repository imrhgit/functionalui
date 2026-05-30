import { useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { BoxShadows, Radiuses } from "functionalui/types";
import { FC, ReactNode } from "react";
interface P {
  isOpen: boolean;
  w: number;
  h: number;
  children: ReactNode;
}
const DropdownSC3: FC<P> = ({ isOpen = false, w, h, children }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.8 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <Container
          boxShadow={BoxShadows.Size4}
          borderRadius={Radiuses.Size4}
          style={{
            ...styles,
            position: "absolute",
            overflow: "hidden",
            transformOrigin: "top left",
            top: 0,
            width: "max-content",
            // maxHeight: "300px",
          }}
        >
          {children}
        </Container>
      ),
  );
};

export default DropdownSC3;
