import { useSpring } from "@react-spring/web";
import { Container, Layout } from "functionalui";
import {
  BorderStyles,
  BorderWidths,
  ColorPalettes,
  Displays,
  FlexDirections,
} from "functionalui/types";
import { FC, ReactNode } from "react";
import {
  AVATAR_SIZE,
  AvatarSizes,
} from "../../../styles/types/ui/avatar/types";
import AvatarName from "./components/AvatarName";

interface P {
  isLoading?: boolean;
  size?: AvatarSizes;
  avatarName?: string | null;
  withHover?: boolean;
  onClick?: (v?: any) => void;
  children: ReactNode;
  border?: boolean;
  borderColor?: ColorPalettes;
}
const Avatar: FC<P> = ({
  avatarName,
  size = AvatarSizes.Size2,
  withHover = true,
  onClick,
  border = true,
  borderColor,
  children,
}) => {
  const [nameHoverAnim, api] = useSpring(() => ({
    // @todo_20241228_1242("hover tooltip animation")
    opacity: 0,
    x: -5,
  }));
  return (
    <Container
      onMouseEnter={() => api.start({ opacity: 1, x: 0 })}
      onMouseLeave={() => api.start({ opacity: 0, x: -5 })}
      onClick={onClick}
    >
      <Layout>
        {/* image */}
        <Layout
          display={Displays.Flex}
          flexDirection={FlexDirections.Column}
          style={{ width: "100%" }}
        >
          <Container
            borderColor={
              border
                ? borderColor
                  ? borderColor
                  : ColorPalettes.Primary3
                : undefined
            }
            borderStyle={border ? BorderStyles.Solid : undefined}
            borderWidth={border ? BorderWidths.Size2 : undefined}
            style={{
              overflow: "hidden",
              maxWidth: "100%",
              borderRadius: "50%",
              width: AVATAR_SIZE[size].image,
              height: AVATAR_SIZE[size].image,
            }}
          >
            {children}
          </Container>
        </Layout>

        {/* name */}
        {/* {withHover && avatarName &&
          <AnimDivContainer style={nameHoverAnim} >
            <Text_Span fontSize={AVATAR_SIZE[size].fontSize} >
              {avatarName}
            </Text_Span>
          </AnimDivContainer>
        } */}
        <AvatarName
          hoverAnimation={nameHoverAnim}
          avatarName={avatarName}
          size={size}
          withHover={withHover}
        />
      </Layout>
    </Container>
  );
};

export default Avatar;

// const Container = styled.div`
//   > * {
//     position: unset !important;
//     max-width: 100%;
//     > img {
//       object-fit: contain;
//       width: 100% !important;
//       border-radius: 50%;
//       position: relative !important;
//       height: unset !important;
//     }
//   }
// `;
