import { useTransition } from "@react-spring/web";
import { Button, Container, Layout, Text_Span } from "functionalui";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  FontSizes,
  Spacings,
} from "functionalui/types";
import { FC } from "react";
import { useGalleryContext } from "../contexts/GalleryContext";
import { ButtonSizes } from "../../../../styles/types/ui/button/types";

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
                icon="chevron-left"
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
                icon="chevron-right"
                marginLeft={Spacings.Size1}
                clickAction={() => handleIncrease()}
                disabled={imgIndex >= galleryImages.length - 1 && true}
              />

              {/* spacing */}
              {/* images count */}

              {/* zoom in, out, reset */}
              <MenuIcon
                icon="zoom-in"
                marginLeft={Spacings.Auto}
                marginRight={Spacings.Size1}
                clickAction={() => {
                  handleZoomIn();
                }}
              />
              <MenuIcon
                icon="zoom-out"
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
  icon: string;
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
