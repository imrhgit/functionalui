import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { UIcon } from "functionalui/icons";
import { LabelText } from "functionalui/label-text";
import {
  TOGGLE_SIZE,
  TOGGLE_STATE_ICON,
  ToggleSizes,
  ToggleStates,
} from "functionalui/types";
import { useState } from "react";
import useMeasure from "react-use-measure";
import cstyles from "./styles.module.css";

/**
 * colors bg
 * icons -- loading
 */

type Props = {
  isTrue: boolean;
  setIsTrue: (a: any) => void;
  size?: ToggleSizes;
  icon?: string;
  toggleState?: ToggleStates;
  description?: string;
};
// info
const ToggleSwitch = ({
  isTrue,
  setIsTrue,
  size = ToggleSizes.Medium,
  icon = "",
  toggleState = ToggleStates.Icon,
  description = "",
}: Props) => {
  const containerColorAnimation = useSpring({
    backgroundColor: isTrue ? "#4BD763" : "#cccccc",
    // position: "relative",
    // config: {
    //   duration: 150,
    // }
  });
  const [circleAnimation, api] = useSpring(() => ({
    x: 0,
    // config: {
    //   duration: 50,
    // }
  }));
  api.start({
    x: isTrue ? 26 : 0,
    // config: {
    //   duration: 50,
    // }
  });
  const [onHover, setOnHover] = useState(false);
  const [ref, bounds] = useMeasure();
  return (
    <Container
      className={cstyles.toggleContainer}
      tabIndex={1}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={() => setIsTrue((prev: boolean) => !prev)}
      style={{
        width: TOGGLE_SIZE[size].container.w,
        height: TOGGLE_SIZE[size].container.h,
      }}
    >
      <Container style={{ ...containerColorAnimation, position: "relative" }}>
        <Container
          className={cstyles.toggleBg}
          style={{
            width: TOGGLE_SIZE[size].bg.w,
            height: TOGGLE_SIZE[size].bg.h,
          }}
        />
      </Container>
      <Container style={{ position: "relative", ...circleAnimation }}>
        <Container
          className={cstyles.toggleThumb}
          ref={ref}
          style={{
            width: TOGGLE_SIZE[size].thumb.w,
            height: TOGGLE_SIZE[size].thumb.h,
          }}
        >
          {description !== "" && (
            <LabelText
              labelName={description}
              hover={onHover}
              offsetX={bounds.width / 2}
              y={bounds.height + 5}
            />
          )}
          {icon !== "" && (
            <UIcon
              name={
                toggleState === ToggleStates.Icon
                  ? icon
                  : TOGGLE_STATE_ICON[toggleState]
              }
              width={TOGGLE_SIZE[size].icon?.w}
              height={TOGGLE_SIZE[size].icon?.h}
            />
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default ToggleSwitch;
