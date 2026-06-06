"use client";

import { useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { F__Button } from "functionalui/styled/button";
import { Text_Span } from "functionalui/texts/span";
import {
  BoxShadows,
  ButtonProps,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  FontWeights,
  Icons,
} from "functionalui/types";
import { useId } from "react";
import {
  BUTTON_COLORS,
  BUTTON_SIZE,
  BUTTON_STATE,
  BUTTON_STYLE,
  ButtonColors,
  ButtonIconPositions,
  ButtonSizes,
  ButtonStates,
  ButtonStyles,
  ButtonTypes,
} from "../../../styles/types/ui/button/types";
import LabelText from "../label/LabelText";
import ButtonIcon from "./components/ButtonIcon";
import LiveRegion from "./components/LiveRegion";
import cstyles from "./styles.module.css";

type NamedButton =
  | { name: string; icon?: Icons }
  | { name?: string; icon: Icons };

type P = {
  buttonSize?: ButtonSizes;
  buttonColor?: ButtonColors;
  buttonState?: ButtonStates;
  buttonType?: ButtonTypes;
  buttonShadow?: BoxShadows;
  buttonStyle?: ButtonStyles;
  buttonLabel?: string | undefined;

  iconColor?: ColorPalettes;
  iconPosition?: ButtonIconPositions;

  animate?: boolean;
  hover?: boolean;
  parentHover?: boolean;
  hoverColor?: ButtonColors;
  type?: "submit" | "reset" | "button";

  clickAction?: (v: any) => void;

  pressed?: boolean;
} & NamedButton;

const Button = ({
  name,
  buttonSize = ButtonSizes.Medium,
  buttonColor = ButtonColors.Primary5,
  buttonState = ButtonStates.Icon,
  buttonType = ButtonTypes.Button,
  buttonStyle = ButtonStyles.Filled,
  buttonShadow = BoxShadows.Size2,
  icon,
  iconColor = ColorPalettes.Primary8,
  iconPosition = ButtonIconPositions.Left,
  animate = true,
  hover,
  clickAction = () => {},
  pressed,
  disabled: diss,
  buttonLabel,
  ...rest
}: ButtonProps & P) => {
  const uid = useId();
  const tooltipId = `btn-label-${uid}`;

  const disabled = buttonState === ButtonStates.Disabled;
  const isDisabled = disabled && !diss;
  const isAriaDisabled = disabled && diss;
  const isIconOnly = !name && !!icon;

  const [styles, api] = useSpring(() => ({
    y: 0,
    transform: "scale(1.0)",
  }));

  const isAnimated =
    animate &&
    !disabled &&
    typeof BUTTON_STATE[buttonState]?.animation === "undefined";

  const a11yProps: Record<string, any> = {};
  if (isIconOnly && buttonLabel) {
    a11yProps["aria-label"] = buttonLabel;
  } else if (isIconOnly) {
    a11yProps["aria-label"] = icon;
  }
  if (buttonState === ButtonStates.Loading) {
    a11yProps["aria-busy"] = true;
  }
  if (pressed !== undefined) {
    a11yProps["aria-pressed"] = pressed;
  }
  if (isAriaDisabled) {
    a11yProps["aria-disabled"] = true;
  }
  a11yProps["aria-describedby"] = tooltipId;

  return (
    <Container
      className={cstyles["bt-container"]}
      style={{
        width: "max-content",
        height: "fit-content",
        maxHeight: "max-content",
      }}
      onMouseDown={() => isAnimated && api.start({ transform: "scale(0.9)" })}
      onMouseUp={() => isAnimated && api.start({ transform: "scale(1.0)" })}
      onTouchStart={() => isAnimated && api.start({ transform: "scale(0.9)" })}
      onTouchCancel={() => isAnimated && api.start({ transform: "scale(1.0)" })}
      onTouchEnd={() => isAnimated && api.start({ transform: "scale(1.0)" })}
    >
      {buttonLabel && (
        <LabelText
          id={tooltipId}
          labelName={buttonLabel}
          className={cstyles["label-container"]}
          animated={false}
        />
      )}

      <Container style={isAnimated ? styles : undefined}>
        <F__Button
          type={buttonType}
          onClick={isAriaDisabled ? undefined : clickAction}
          disabled={isDisabled}
          tabIndex={isAriaDisabled ? 0 : undefined}
          paddingTop={BUTTON_SIZE[buttonSize].paddingTop}
          paddingBottom={BUTTON_SIZE[buttonSize].paddingBottom}
          paddingLeft={BUTTON_SIZE[buttonSize].paddingLeft}
          paddingRight={BUTTON_SIZE[buttonSize].paddingRight}
          borderRadius={BUTTON_SIZE[buttonSize].borderRadius}
          // border     -- [styling]
          borderWidth={BUTTON_STYLE[buttonStyle].border.borderWidth}
          borderStyle={BUTTON_STYLE[buttonStyle].border.borderStyle}
          // shadow     -- [elevation]
          boxShadow={
            buttonStyle && BUTTON_STYLE[buttonStyle]?.shadow
              ? BUTTON_STYLE[buttonStyle].shadow
              : buttonShadow
          }
          // color      -- [color]
          bgColor={
            buttonStyle === ButtonStyles.Gray &&
            buttonState === ButtonStates.Error
              ? BUTTON_STYLE[buttonStyle].bgColor
              : BUTTON_STATE[buttonState]?.color?.bgColor &&
                  buttonStyle !== ButtonStyles.Outlined &&
                  buttonStyle !== ButtonStyles.Plain
                ? BUTTON_STATE[buttonState]?.color?.bgColor
                : buttonStyle && BUTTON_STYLE[buttonStyle]?.bgColor
                  ? BUTTON_STYLE[buttonStyle].bgColor
                  : BUTTON_COLORS[buttonColor].background
          } // consider [styling]
          borderColor={
            BUTTON_STATE[buttonState]?.color?.borderColor
              ? BUTTON_STATE[buttonState]?.color?.borderColor
              : BUTTON_COLORS[buttonColor].borderColor
          }
          cursor={
            BUTTON_STATE[buttonState]?.cursor
              ? BUTTON_STATE[buttonState].cursor
              : BUTTON_STYLE[buttonStyle].cursor
          }
          {...a11yProps}
          {...rest}
        >
          <Layout
            display={Displays.Flex}
            flexJustifyContent={FlexJustifyContents.Center}
            flexAlignItem={FlexAlignItems.Center}
          >
            {iconPosition === ButtonIconPositions.Left ? (
              <>
                {icon && (
                  <ButtonIcon
                    icon={icon}
                    iconSize={BUTTON_SIZE[buttonSize].icon}
                    iconState={buttonState}
                    iconColor={iconColor}
                    iconPosition={iconPosition}
                    iconMargin={BUTTON_SIZE[buttonSize].iconMargin}
                  />
                )}
                {name !== "" && !hover && (
                  <Text_Span
                    fontSize={BUTTON_SIZE[buttonSize].text}
                    fontWeight={
                      BUTTON_STYLE[buttonStyle].fontWeight || FontWeights.Size3
                    }
                    paletteColor={
                      BUTTON_STATE[buttonState]?.text?.color
                        ? BUTTON_STATE[buttonState]?.text?.color
                        : buttonStyle && BUTTON_STYLE[buttonStyle]?.fontColor
                          ? BUTTON_STYLE[buttonStyle].fontColor
                          : BUTTON_COLORS[buttonColor].text
                    }
                    className={`name ${icon ? "icon-left" : ""}`}
                  >
                    {name}
                  </Text_Span>
                )}
              </>
            ) : (
              <>
                {name !== "" && !hover && (
                  <Text_Span
                    fontSize={BUTTON_SIZE[buttonSize].text}
                    fontWeight={
                      BUTTON_STYLE[buttonStyle].fontWeight || FontWeights.Size3
                    }
                    paletteColor={
                      BUTTON_STATE[buttonState]?.text?.color
                        ? BUTTON_STATE[buttonState]?.text?.color
                        : buttonStyle && BUTTON_STYLE[buttonStyle]?.fontColor
                          ? BUTTON_STYLE[buttonStyle].fontColor
                          : BUTTON_COLORS[buttonColor].text
                    }
                    className={`name ${icon ? "icon-right" : ""}`}
                  >
                    {name}
                  </Text_Span>
                )}
                {icon && (
                  <ButtonIcon
                    icon={icon}
                    iconSize={BUTTON_SIZE[buttonSize].icon}
                    iconState={buttonState}
                    iconColor={iconColor}
                    iconPosition={iconPosition}
                    iconMargin={BUTTON_SIZE[buttonSize].iconMargin}
                  />
                )}
              </>
            )}
          </Layout>
        </F__Button>
      </Container>
      <LiveRegion buttonState={buttonState} />
    </Container>
  );
};

export default Button;
