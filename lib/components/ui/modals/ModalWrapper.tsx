import { useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { FC, ReactNode } from "react";
import cstyles from "./styles.module.css";

interface P {
  isShown: boolean;
  children: ReactNode;
}
const ModalWrapper: FC<P> = ({ isShown, children }) => {
  const transition = useTransition(isShown, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return transition(
    (styles, item) =>
      item && (
        <Container className={cstyles.wrapperContainer} style={styles}>
          {children}
        </Container>
      ),
  );
};

export default ModalWrapper;
