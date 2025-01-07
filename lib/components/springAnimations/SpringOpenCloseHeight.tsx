import { Container } from "functionalui";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";

const SpringOpenCloseHeight = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) => {
  const [ref, bounds] = useMeasure();
  const openAnimation = {
    height: isOpen ? bounds.height : 0,
    width: isOpen ? "auto" : "auto",
    overflow: isOpen ? "hidden" : "hidden",
    opacity: isOpen ? 1 : 0,
  };
  return (
    <Container style={openAnimation}>
      <div ref={ref}>
        <Container style={{ height: "max-content" }}>{children}</Container>
      </div>
    </Container>
  );
};

export default SpringOpenCloseHeight;
