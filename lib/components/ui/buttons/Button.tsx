import { useSpring } from "@react-spring/web";
import { Container, ContainerRef, F__Button, Text_Span } from "functionalui";
import { BoxShadows, ColorPalettes } from "functionalui/types";
import useMeasure from "react-use-measure";
import {
  BUTTON_SIZE,
  ButtonColors,
  ButtonIconPositions,
  ButtonSizes,
  ButtonStates,
  ButtonTypes,
} from "../../../styles/types/ui/button/types";
import LabelText from "../label/LabelText";
import ButtonIcon from "./components/ButtonIcon";
import { FC, useState } from "react";

type ButtonProps = {
  name: string;
  buttonSize?: ButtonSizes;
  buttonColor?: ButtonColors;
  buttonState?: ButtonStates;
  buttonType?: ButtonTypes;
  buttonShadow?: BoxShadows;

  icon?: string;
  // iconSize?: IconSizings;
  iconColor?: ColorPalettes;
  iconPosition?: ButtonIconPositions;
  // iconState?: ButtonIconStates;

  animate?: boolean;
  hover?: boolean;
  parentHover?: boolean;
  hoverColor?: ButtonColors;

  clickAction?: (v: any) => void;
  // clickAction?: () => {},
};

const Button: FC<ButtonProps> = ({
  name,
  buttonSize = ButtonSizes.Medium,
  // buttonColor = ButtonColors.Primary5,
  buttonState = ButtonStates.Icon,
  // buttonType = ButtonTypes.Button,
  // buttonShadow = BoxShadows.Size2,
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
  // eslint-disable-next-line no-var
  var disabled = buttonState === ButtonStates.Disabled;
  const [onHover, setOnHover] = useState(hover);
  // measure half of the button width
  const [containerRef, containerBounds] = useMeasure();
  const [styles, api] = useSpring(() => ({
    y: 0,
    transform: "scale(1.0)",
  }));

  return (
    <ContainerRef
      ref={containerRef}
      onMouseEnter={() => {
        !disabled && api({ y: -3 });
        setOnHover(true);
      }}
      onMouseLeave={() => {
        !disabled && api({ y: 0 });
        setOnHover(false);
      }}
      onMouseDown={() => !disabled && api({ transform: "scale(0.9)" })}
      onMouseUp={() => !disabled && api({ transform: "scale(1.0)" })}
      onTouchStart={() => !disabled && api({ transform: "scale(0.9)" })}
      onTouchCancel={() => !disabled && api({ transform: "scale(1.0)" })}
      onTouchEnd={() => !disabled && api({ transform: "scale(1.0)" })}
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
        style={animate ? styles : undefined}
      >
        {/*<Container
          style={animate && !disabled ? buttonHoverAnimation : undefined}
        >*/}
        <F__Button
          // buttonColor={buttonColor}
          // buttonShadow={buttonShadow}
          // buttonSize={buttonSize}
          // buttonType={buttonType}
          onClick={clickAction}
          disabled={disabled}
        >
          {iconPosition === ButtonIconPositions.Left ? (
            <>
              {icon && (
                <ButtonIcon
                  icon={icon}
                  iconSize={BUTTON_SIZE[buttonSize].icon}
                  iconState={buttonState}
                  iconColor={iconColor}
                />
              )}
              {name !== "" && !hover && (
                <Text_Span
                  fontSize={BUTTON_SIZE[buttonSize].text}
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
                />
              )}
            </>
          )}
        </F__Button>
        {/*</Container>*/}
      </Container>
    </ContainerRef>
  );
};

export default Button;
