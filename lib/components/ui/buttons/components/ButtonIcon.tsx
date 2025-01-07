import { useTransition } from "@react-spring/web";
import { Container, Text_Span, UIcon } from "functionalui";
import { ColorPalettes, Sizings } from "functionalui/types";
import { useEffect, useState } from "react";
import {
    ButtonStateIcon,
    ButtonStates,
} from "../../../../styles/types/ui/button/types";

type Props = {
  icon: string;
  iconState: ButtonStates;
  iconSize: Sizings;
  iconColor: ColorPalettes;
};
const ButtonIcon = ({ icon, iconSize, iconState, iconColor }: Props) => {
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
          setButtonState(ButtonStates.Icon);
        }, 10000);
      }
    },
  });
  return (
    <Container
      style={{
        position: "relative",
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
            colorLight={iconColor}
            colorDark={iconColor}
            size={iconSize}
          />
        </Text_Span>
      ))}
    </Container>
  );
};

export default ButtonIcon;
