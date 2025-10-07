import { useTransition } from "@react-spring/web";
import { Container, Text_Span, UIcon } from "functionalui";
import { ColorPalettes, Sizings, Spacings } from "functionalui/types";
import { useEffect, useState } from "react";
import {
  BUTTON_STATE,
  ButtonIconPositions,
  ButtonStateIcon,
  ButtonStates,
} from "../../../../styles/types/ui/button/types";
import { Cursors } from "../../../../styles/types/generics";

type Props = {
  icon: string;
  iconState: ButtonStates;
  iconSize: Sizings;
  iconColor: ColorPalettes;
  iconPosition?: ButtonIconPositions;
  iconMargin?: Spacings;
};
const ButtonIcon = ({
  icon,
  iconSize,
  iconState,
  iconColor,
  iconPosition,
  iconMargin,
}: Props) => {
  const [buttonState, setButtonState] = useState(iconState);
  useEffect(() => {
    setButtonState(iconState);
  }, [iconState]);
  const iconTransitions = useTransition(buttonState, {
    from: { opacity: 0, transform: "scale(0.6)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.6)" },
    onRest: () => {
      if (
        iconState === ButtonStates.Success ||
        iconState !== ButtonStates.Error
      ) {
        setTimeout(() => {
          if (
            buttonState === ButtonStates.Success ||
            buttonState !== ButtonStates.Error
          ) {
            setButtonState(ButtonStates.Icon);
          }
        }, 3000);
      }
    },
  });
  return (
    <Container
      marginRight={
        iconPosition === ButtonIconPositions.Left ? iconMargin : undefined
      }
      marginLeft={
        iconPosition === ButtonIconPositions.Right ? iconMargin : undefined
      }
      style={{
        position: "relative",
        // [iconMargin === Spacings.Size0 ? "marginRight" : "marginLeft"]: 2,
        [iconMargin === Spacings.Size0
          ? iconPosition === ButtonIconPositions.Left
            ? "marginRight"
            : iconPosition === ButtonIconPositions.Right
            ? "marginLeft"
            : ""
          : ""]: 2,
        // marginRight:
        //   iconPosition === ButtonIconPositions.Left && !iconMargin ? 3 : "auto",
        // marginLeft:
        //   iconPosition === ButtonIconPositions.Right && !iconMargin ? 3 : "auto",
        minWidth: iconSize,
        maxWidth: iconSize,
        minHeight: iconSize,
        maxHeight: iconSize,
      }}
    >
      {iconTransitions((styles) => (
        <Text_Span
          style={{ ...styles, position: "absolute", top: "0", left: "0" }}
        >
          <UIcon
            name={
              iconState !== ButtonStates.Icon
                ? ButtonStateIcon[iconState]
                : icon
            }
            colorLight={
              BUTTON_STATE[buttonState]?.icon?.iconColor
                ? BUTTON_STATE[buttonState]?.icon?.iconColor
                : iconColor
            }
            colorDark={
              BUTTON_STATE[buttonState]?.icon?.iconColor
                ? BUTTON_STATE[buttonState]?.icon?.iconColor
                : iconColor
            }
            size={iconSize}
            withMargin={false}
            cursor={
              BUTTON_STATE[buttonState]?.cursor
                ? BUTTON_STATE[buttonState].cursor
                : Cursors.Pointer
            }
          />
        </Text_Span>
      ))}
    </Container>
  );
};

export default ButtonIcon;
