import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { Text_P } from "functionalui/texts/p";
import {
  ColorPalettes,
  FontWeights,
  Radiuses,
  Spacings,
} from "functionalui/types";
import useMeasure from "react-use-measure";

interface Animated {
  animated?: true;
  offsetX?: number;
  y?: number;
  x?: number;
  hover?: boolean;
}
type Plain = {
  animated?: false;
  offsetX?: never;
  y?: never;
  x?: never;
  hover?: never;
}

type P = (Animated | Plain) & {
  id?: string;
  labelName?: string;
  className?: string;
};

const LabelText = ({ animated = true, ...rest }: P) => {
  switch (animated) {
    case true:
      return <AnimatedLabel animated {...rest} />;
    default:
      return (
        <Label
          id={rest.id}
          labelName={rest.labelName}
          className={rest.className}
        />
      );
  }
};

export default LabelText;

const containerStyles = {
  padding: Spacings.Size2,
  borderRadius: Radiuses.Size4,
  bgColor: ColorPalettes.Primary4,
};

function AnimatedLabel({
  labelName = "",
  offsetX = 0,
  y = 50,
  x = 0,
  hover = false,
  id,
  className,
}: P) {
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
      role="tooltip"
      id={id}
      className={className}
      ref={ref}
      style={offsetX !== 0 ? fadeAnimationOffsetX : fadeanimation}
      {...containerStyles}
    >
      <Text_P fontWeight={FontWeights.Size2}>{labelName}</Text_P>
    </Container>
  );
}

function Label({ id, className, labelName }: P) {
  return (
    <Container
      role="tooltip"
      id={id}
      className={className}
      {...containerStyles}
    >
      <Text_P fontWeight={FontWeights.Size2}>{labelName}</Text_P>
    </Container>
  );
}
