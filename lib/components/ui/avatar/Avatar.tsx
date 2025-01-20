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
import generateGradient from "../../../utils/gradientGenerator/gradientGenerator";

interface P {
  isLoading?: boolean;
  size?: AvatarSizes;
  avatarName?: string | null;
  withHover?: boolean;
  onClick?: (v?: any) => void;
  children?: ReactNode;
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
    opacity: 0,
    y: -5,
    scale: 0.7,
    transformOrigin: "top center",
    pointerEvents: "auto",
  }));
  return (
    <Container
      style={{ width: "max-content" }}
      onMouseEnter={() => api.start({ opacity: 1, y: 3, scale: 1 })}
      onMouseLeave={() =>
        api.start({ opacity: 0, y: -5, scale: 0.7, pointerEvents: "none" })
      }
      onClick={onClick}
    >
      <Layout style={{ width: "max-content", position: "relative" }}>
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
                  : ColorPalettes.Grey3
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
            {children ? (
              <>{children}</>
            ) : (
              <Container
                style={{
                  width: "100%",
                  height: "100%",
                  background: generateGradient(),
                }}
              />
            )}
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
