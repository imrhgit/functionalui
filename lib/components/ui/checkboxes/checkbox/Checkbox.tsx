import { useSpring } from "@react-spring/web";
import React, { CSSProperties } from "react";
import {
  CHECKBOX_COLORS,
  CHECKBOX_SIZES,
  CheckboxColors,
  CheckboxSizes,
} from "../../../../styles/types/ui/checkbox/types";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
} from "functionalui/types";
import { Layout } from "functionalui/layout";
import { Container } from "functionalui/container";

type Props = {
  isChecked: boolean;
  children?: React.ReactNode;
  size?: CheckboxSizes;
  checkboxColor?: CheckboxColors;
  onClick?: (v?: any) => void;
};
// @todo_20240518_1016("custom color")
const Checkbox = ({
  isChecked,
  size,
  checkboxColor = CheckboxColors.Grey5,
  onClick,
}: Props) => {
  return (
    <CheckboxStyles
      isChecked={isChecked}
      checkboxColor={checkboxColor}
      onClick={onClick}
    >
      {/* the box design */}
      <Layout
        display={Displays.Flex}
        flexJustifyContent={FlexJustifyContents.Center}
        flexAlignItem={FlexAlignItems.Center}
      >
        <Box isChecked={isChecked} checkboxColor={checkboxColor} size={size} />
      </Layout>
    </CheckboxStyles>
  );
};

export default Checkbox;

const styles1: CSSProperties = {
  borderStyle: "solid",
};
const CheckboxStyles = ({
  isChecked,
  checkboxColor = CheckboxColors.Grey5,
  size = CheckboxSizes.Size3,
  children,
  onClick,
}: Props) => {
  const [styles, api] = useSpring(() => ({
    borderColor: isChecked
      ? CHECKBOX_COLORS[checkboxColor].borderColor
      : CHECKBOX_COLORS[CheckboxColors.Grey5].borderColor,
  }));
  api.start({
    borderColor: isChecked
      ? CHECKBOX_COLORS[checkboxColor].borderColor
      : CHECKBOX_COLORS[CheckboxColors.Grey5].borderColor,
  });
  return (
    <Container
      onClick={onClick}
      borderRadius={CHECKBOX_SIZES[size].boxBorderRadius}
      style={{
        padding: CHECKBOX_SIZES[size].padding,
        borderWidth: CHECKBOX_SIZES[size].borderWidth,
        ...styles1,
        ...styles,
        width: "max-content",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {children}
    </Container>
  );
};

const Box = ({
  isChecked,
  checkboxColor = CheckboxColors.Grey5,
  size = CheckboxSizes.Size3,
}: Props) => {
  const [styles, api] = useSpring(() => ({
    backgroundColor: isChecked
      ? CHECKBOX_COLORS[checkboxColor].checkedColor
      : CHECKBOX_COLORS[CheckboxColors.Grey5].checkedColor,
    scale: isChecked ? 1 : 0.8,
    opacity: isChecked ? 1 : 0,
  }));
  api.start({
    backgroundColor: isChecked
      ? CHECKBOX_COLORS[checkboxColor].checkedColor
      : CHECKBOX_COLORS[CheckboxColors.Grey5].checkedColor,
    scale: isChecked ? 1 : 0.8,
    opacity: isChecked ? 1 : 0,
  });
  return (
    <Container
      style={{
        width: CHECKBOX_SIZES[size].checkedColor.w,
        height: CHECKBOX_SIZES[size].checkedColor.h,
      }}
    >
      <Container
        borderRadius={CHECKBOX_SIZES[size].checkedBorderRadius}
        style={{
          width: CHECKBOX_SIZES[size].checkedColor.w,
          height: CHECKBOX_SIZES[size].checkedColor.h,
          ...styles,
        }}
      >
        <></>
      </Container>
    </Container>
  );
};
