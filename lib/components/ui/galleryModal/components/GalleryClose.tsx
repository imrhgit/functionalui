import { useTransition } from "@react-spring/web";
import { Container, Layout, UIcon } from "functionalui";
import {
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Sizings,
} from "functionalui/types";
import { FC } from "react";

interface P {
  handleCloseGallery: () => void;
}
const GalleryClose: FC<P> = ({ handleCloseGallery }) => {
  const transitions = useTransition(true, {
    from: { opacity: 0, y: -100, x: -50 },
    enter: { opacity: 1, y: 25, x: -50 },
    leave: { opacity: 0, y: -100, x: -50 },
  });
  return (
    <Layout
      style={{ width: "100%" }}
      display={Displays.Flex}
      flexJustifyContent={FlexJustifyContents.FlexEnd}
      flexAlignItem={FlexAlignItems.Center}
    >
      {transitions(
        (styles, item) =>
          item && (
            <Container style={styles}>
              <UIcon
                name="x"
                iconAction={() => handleCloseGallery()}
                size={Sizings.Size5}
              />
            </Container>
          ),
      )}
    </Layout>
  );
};

export default GalleryClose;
