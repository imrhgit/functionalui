import { Container, Layout, Text_P, Text_Span, UIcon } from "functionalui";
import {
  AdmonitionLevels,
  BorderWidths,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Radiuses,
  Sizings,
} from "functionalui/types";
import {
  AdmonitionColors,
  AdmonitionIcons,
  AdmonitionTitles,
} from "../../../styles/types/ui/admonition/types";

type Props = {
  level: AdmonitionLevels;
  descriptionText: string;
  children?: React.ReactNode;
};
const Admonition = ({ level, descriptionText, children }: Props) => {
  return (
    <Container
      borderRadius={Radiuses.Size4}
      borderColor={AdmonitionColors[level].borderColor}
      borderWidth={BorderWidths.Size2}
      bgColor={AdmonitionColors[level].bgColor}
    >
      <Layout>
        {/* title -- icon title x(optional) */}
        <Container>
          <Layout
            display={Displays.Flex}
            flexJustifyContent={FlexJustifyContents.Center}
            flexAlignItem={FlexAlignItems.Center}
          >
            <UIcon
              name={AdmonitionIcons[level].titleIcon}
              colorLight={AdmonitionColors[level].iconColor}
              colorDark={AdmonitionColors[level].iconColor}
              size={Sizings.Size3}
            />
            <Container>
              <Text_Span>{AdmonitionTitles[level]}</Text_Span>
            </Container>
            {/* close - optional */}
          </Layout>
        </Container>

        {/* description */}
        <Container>
          <Text_P>{descriptionText}</Text_P>
        </Container>

        {/* children */}
        {children && <Container>{children}</Container>}
      </Layout>
    </Container>
  );
};

export default Admonition;
