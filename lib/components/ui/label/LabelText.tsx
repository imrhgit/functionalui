import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { Text_P } from "functionalui/texts/p";
import useMeasure from "react-use-measure";

const LabelText = ({
  labelName = "",
  offsetX = 0,
  y = 50,
  x = 0,
  hover = false,
}) => {
  const [ref, bounds] = useMeasure();
  //animation
  const fadeanimation = useSpring({
    opacity: hover ? 1 : 0,
    x: hover ? x : x, //why here? lazy to pass to emotion
    y: hover ? y : y,
  });
  const fadeAnimationOffsetX = useSpring({
    opacity: hover ? 1 : 0,
    // x: (hover && offsetX) ? (-(bounds.width / 2) + offsetX) : (-(bounds.width / 2) + offsetX),
    x: hover ? -(bounds.width / 2) + offsetX : -(bounds.width / 2) + offsetX,
    y: hover ? y : y,
  });

  return (
    <Container
      ref={ref}
      style={offsetX !== 0 ? fadeAnimationOffsetX : fadeanimation}
    >
      <Container>
        <Text_P>{labelName}</Text_P>
      </Container>
    </Container>
  );
};

export default LabelText;
