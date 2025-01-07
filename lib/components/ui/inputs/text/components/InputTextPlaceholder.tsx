import { useSpring } from "@react-spring/web";
import { Container, Text_Span } from "functionalui";
import { FontSizes, FontWeights } from "functionalui/types";
import { FC } from "react";
import cstyles from "../styles.module.css";

interface P {
  id: string;
  isEmpty: boolean;
  labelName: string;
  onFocus: boolean;
}
const InputTextPlaceholder: FC<P> = ({
  id,
  // isEmpty,
  labelName,
  onFocus,
}) => {
  const labelAnimation = useSpring({
    y: onFocus ? -9 : 0,
    x: onFocus ? 10 : 15,
    // transform: onFocus ? "scale(0.8)" : "scale(1)",
    // fontSize: onFocus ? ".85rem" : ".9rem",
    color: onFocus ? "#937be7" : "#ddd",
    config: {
      tension: 190,
      friction: 20,
      velocity: 0.02,
    },
  });
  return (
    <div>
      <label className={cstyles.inputLabel} htmlFor={id}>
        <Container
          style={{
            ...labelAnimation,
            width: "max-content",
            // backgroundColor: "cornflowerblue",
          }}
        >
          <Text_Span
            fontWeight={FontWeights.Size2}
            fontSize={FontSizes.Size1}
            style={{ letterSpacing: 1 }}
          >
            {labelName}
          </Text_Span>
        </Container>
      </label>
    </div>
  );
};
export default InputTextPlaceholder;
