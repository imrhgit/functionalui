import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_P } from "functionalui/texts/p";
import { Text_Span } from "functionalui/texts/span";
import { UIcon } from "functionalui/icons";
import {
  AdmonitionLevels,
  BorderWidths,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Radiuses,
} from "functionalui/types";
import {
  ADMONITION_SIZE,
  AdmonitionColors,
  AdmonitionIcons,
  AdmonitionSizes,
  AdmonitionTitles,
} from "../../../styles/types/ui/admonition/types";

type Props = {
  level: AdmonitionLevels;
  size?: AdmonitionSizes;
  descriptionText: string;
  children?: React.ReactNode;
};
const Admonition = ({
  level,
  size = AdmonitionSizes.Medium,
  descriptionText,
  children,
}: Props) => {
  return (
    <Container
      borderRadius={Radiuses.Size4}
      borderColor={AdmonitionColors[level].borderColor}
      borderWidth={BorderWidths.Size2}
      bgColor={AdmonitionColors[level].bgColor}
      style={{ width: "max-content" }}
    >
      <Layout>
        {/* title -- icon title x(optional) */}
        <Container
          padding={ADMONITION_SIZE[size].title.padding}
          paddingBottom={ADMONITION_SIZE[size].title.paddingBottom}
          paddingLeft={ADMONITION_SIZE[size].title.paddingLeft}
          paddingRight={ADMONITION_SIZE[size].title.paddingRight}
        >
          <Layout
            display={Displays.Flex}
            flexJustifyContent={FlexJustifyContents.FlexStart}
            flexAlignItem={FlexAlignItems.Center}
          >
            <UIcon
              name={AdmonitionIcons[level].titleIcon}
              colorLight={AdmonitionColors[level].iconColor}
              colorDark={AdmonitionColors[level].iconColor}
              size={ADMONITION_SIZE[size].title.iconSize}
              withMargin={false}
              borderRadius={undefined}
              overflow={""}
            />
            <Container marginLeft={ADMONITION_SIZE[size].title.iconMargin}>
              <Text_Span
                fontSize={ADMONITION_SIZE[size].title.fontSize}
                fontWeight={ADMONITION_SIZE[size].title.fontWeight}
              >
                {AdmonitionTitles[level]}
              </Text_Span>
            </Container>
            {/* close - optional */}
          </Layout>
        </Container>
        {/* description */}
        <Container
          padding={ADMONITION_SIZE[size].content.padding}
          paddingTop={ADMONITION_SIZE[size].content.paddingTop}
          paddingLeft={ADMONITION_SIZE[size].content.paddingLeft}
          paddingRight={ADMONITION_SIZE[size].title.paddingRight}
        >
          <Text_P fontSize={ADMONITION_SIZE[size].content.fontSize}>
            {descriptionText}
          </Text_P>
        </Container>
        {/* children */}
        {children && (
          <Container
            padding={ADMONITION_SIZE[size].content.padding}
            paddingTop={ADMONITION_SIZE[size].content.paddingTop}
            paddingLeft={ADMONITION_SIZE[size].content.paddingLeft}
            paddingRight={ADMONITION_SIZE[size].title.paddingRight}
          >
            {children}
          </Container>
        )}
      </Layout>
    </Container>
  );
};

export default Admonition;
