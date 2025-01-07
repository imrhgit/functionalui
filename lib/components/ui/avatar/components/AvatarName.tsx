import { FC, ReactNode } from "react";
import {
  AVATAR_SIZE,
  AvatarSizes,
} from "../../../../styles/types/ui/avatar/types";
import DivContainer from "../../../../styles/styled/container/component";
import { Container, Text_Span } from "functionalui";

interface P {
  hoverAnimation: any;
  size?: AvatarSizes;
  avatarName?: string | null;
  withHover?: boolean;
}
const AvatarName: FC<P> = ({
  hoverAnimation,
  size = AvatarSizes.Size3,
  avatarName,
  withHover,
}) => {
  if (withHover) {
    if (avatarName) {
      return (
        <Container style={hoverAnimation}>
          <Text_Span fontSize={AVATAR_SIZE[size].fontSize}>
            {avatarName}
          </Text_Span>
        </Container>
      );
    } else return <></>;
  } else {
    if (avatarName) {
      return (
        <Name>
          <Text_Span fontSize={AVATAR_SIZE[size].fontSize}>
            {avatarName}
          </Text_Span>
        </Name>
      );
    } else return <></>;
  }
};

export default AvatarName;

const Name = ({ children }: { children: ReactNode }) => {
  // const [nameHoverAnim, api] = useSpring(() => ({
  //   opacity: 1,
  //   x: 0,
  // }))
  return <DivContainer style={{ opacity: 1 }}>{children}</DivContainer>;
};
