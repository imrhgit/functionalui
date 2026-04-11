import { useSpring } from "@react-spring/web";
import {
  Container,
  ContainerRef,
  F__Button,
  Layout,
  Text_Span,
} from "functionalui";
import {
  BoxShadows,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  FontWeights,
} from "functionalui/types";
import { FC, useState } from "react";
import useMeasure from "react-use-measure";
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

type ButtonProps = {
  name: string;
  buttonSize?: ButtonSizes;
  buttonColor?: ButtonColors;
  buttonState?: ButtonStates;
  buttonType?: ButtonTypes;
  buttonShadow?: BoxShadows;
  buttonStyle?: ButtonStyles;

  icon?: string;
  // iconSize?: IconSizings;
  iconColor?: ColorPalettes;
  iconPosition?: ButtonIconPositions;
  // iconState?: ButtonIconStates;

  animate?: boolean;
  hover?: boolean;
  parentHover?: boolean;
  hoverColor?: ButtonColors;
  type?: "submit" | "reset" | "button";

  clickAction?: (v: any) => void;
};

const Button: FC<ButtonProps> = ({
  name,
  buttonSize = ButtonSizes.Medium,
  buttonColor = ButtonColors.Primary5,
  buttonState = ButtonStates.Icon,
  buttonType = ButtonTypes.Button,
  buttonStyle = ButtonStyles.Filled,
  buttonShadow = BoxShadows.Size2,
  icon,
  // iconSize,
  iconColor = ColorPalettes.Primary8,
  iconPosition = ButtonIconPositions.Left,
  // iconState,
  animate = true,
  hover,
  // parentHover,
  // hoverColor,
  clickAction = () => {},
}) => {
  var disabled = buttonState === ButtonStates.Disabled;
  const [onHover, setOnHover] = useState(hover);
  // measure half of the button width
  const [containerRef, containerBounds] = useMeasure({ debounce: 500 });
  const [styles, api] = useSpring(() => ({
    y: 0,
    transform: "scale(1.0)",
  }));

  // const animateButton1: boolean =
  //   (!disabled && animate) ||
  //   (typeof BUTTON_STATE[buttonState]?.animation === "undefined" &&
  //     !BUTTON_STATE[buttonState].animation);
  // const typeofUndefined =
  //   typeof BUTTON_STATE[buttonState]?.animation === "undefined";
  // const setstyle = BUTTON_STATE[buttonState].animation;
  const isAnimated =
    animate &&
    !disabled &&
    typeof BUTTON_STATE[buttonState]?.animation === "undefined";

  return (
    <ContainerRef
      style={{ width: "max-content" }}
      ref={containerRef}
      onMouseEnter={() => {
        // !disabled && api({ y: -3 });
        setOnHover(true);
      }}
      onMouseLeave={() => {
        // !disabled && api({ y: 0 });
        setOnHover(false);
      }}
      onMouseDown={() => isAnimated && api.start({ transform: "scale(0.9)" })}
      onMouseUp={() => isAnimated && api.start({ transform: "scale(1.0)" })}
      onTouchStart={() => isAnimated && api.start({ transform: "scale(0.9)" })}
      onTouchCancel={() => isAnimated && api.start({ transform: "scale(1.0)" })}
      onTouchEnd={() => isAnimated && api.start({ transform: "scale(1.0)" })}
    >
      {hover && (
        <LabelText
          labelName={name}
          hover={onHover}
          offsetX={containerBounds.width / 2}
          y={containerBounds.height}
        />
      )}
      <Container
        // style={animate && !disabled ? buttonClickAnimation : undefined}
        // style={animate ? styles : undefined}
        style={isAnimated ? styles : undefined}
      >
        {/*<Container
          style={animate && !disabled ? buttonHoverAnimation : undefined}
        >*/}
        <F__Button
          type={buttonType}
          onClick={clickAction}
          disabled={disabled}
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
                    fontWeight={FontWeights.Size3}
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
                    fontWeight={FontWeights.Size3}
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
        {/*</Container>*/}
      </Container>
    </ContainerRef>
  );
};

export default Button;
