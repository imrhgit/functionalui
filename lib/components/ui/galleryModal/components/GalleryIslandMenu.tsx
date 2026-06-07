import { useTransition } from "@react-spring/web";
import { Button } from "functionalui/button";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  FontSizes,
  Icons,
  Spacings,
} from "functionalui/types";
import { FC } from "react";
import { ButtonSizes } from "../../../../styles/types/ui/button/types";
import { useGalleryContext } from "../contexts/GalleryContext";

interface P {
  openMenu: boolean;
}
const GalleryIslandMenu: FC<P> = ({ openMenu = true }) => {
  const {
    handleIncrease,
    handleDecrease,
    galleryImages,
    imgIndex,
    handleZoomIn,
    handleZoomOut,
  } = useGalleryContext();
  const transitions = useTransition(openMenu, {
    from: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: -50 },
    leave: { opacity: 0, y: 100 },
  });
  return transitions(
    (styles, item) =>
      item && (
        <Container
          style={{ width: "100%", ...styles }}
          // card styles
        >
          <Layout
            display={Displays.Flex}
            flexJustifyContent={FlexJustifyContents.Center}
          >
            <Layout
              display={Displays.Flex}
              flexAlignItem={FlexAlignItems.Center}
              style={{ minWidth: 350, maxWidth: 500, width: 400 }}
            >
              {/* next */}
              <MenuIcon
                icon={Icons.ChevronLeft}
                marginLeft={Spacings.Size4}
                marginRight={Spacings.Size1}
                clickAction={() => handleDecrease()}
                disabled={imgIndex <= 0 && true}
              />
              {/* previous */}
              <Layout>
                <Container>
                  <Text_Span
                    fontSize={FontSizes.Size4}
                  >{`${imgIndex + 1} / ${galleryImages.length}`}</Text_Span>
                </Container>
              </Layout>
              <MenuIcon
                icon={Icons.ChevronRight}
                marginLeft={Spacings.Size1}
                clickAction={() => handleIncrease()}
                disabled={imgIndex >= galleryImages.length - 1 && true}
              />

              {/* spacing */}
              {/* images count */}

              {/* zoom in, out, reset */}
              <MenuIcon
                icon={Icons.ZoomIn}
                marginLeft={Spacings.Auto}
                marginRight={Spacings.Size1}
                clickAction={() => {
                  handleZoomIn();
                }}
              />
              <MenuIcon
                icon={Icons.ZoomOut}
                marginLeft={Spacings.Size1}
                marginRight={Spacings.Size4}
                clickAction={() => {
                  handleZoomOut();
                }}
              />
            </Layout>
          </Layout>
        </Container>
      ),
  );
};

export default GalleryIslandMenu;

interface MenuIcon_p {
  icon: Icons;
  clickAction: (v?: any) => void;
  marginLeft?: Spacings;
  marginRight?: Spacings;
  disabled?: boolean;
}
const MenuIcon: FC<MenuIcon_p> = ({
  icon,
  clickAction,
  marginLeft,
  marginRight,
  // disabled,
}) => {
  return (
    <Container marginLeft={marginLeft} marginRight={marginRight}>
      <Button
        name=""
        icon={icon}
        buttonSize={ButtonSizes.Big}
        clickAction={clickAction}
        // buttonState={ButtonStates.Disabled}
      />
    </Container>
  );
};
