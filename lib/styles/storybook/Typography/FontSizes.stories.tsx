import { Meta } from "@storybook/react-vite";
import { Container, Layout, Text_Span } from "functionalui";
import {
  BorderStyles,
  BorderWidths,
  ColorPalettes,
  Displays,
  Radiuses,
  Spacings,
  FontSizes as STORY_ITEM,
} from "functionalui/types";
import useMeasure from "react-use-measure";

const meta: Meta<typeof Text_Span> = {
  title: "Typography/Font Sizes",
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
};

export default meta;

const fontSizes = Object.keys(STORY_ITEM)
  .filter((key) => isNaN(Number(key))) // Filter out numeric keys
  .map((key) => ({
    name: key,
    value: STORY_ITEM[key as keyof typeof STORY_ITEM],
  }));

export const Default = () => (
  <Layout>
    {fontSizes.map((item, idx) => (
      <ShowcaseContainer key={idx}>
        <RenderText value={item.value} name={item.name}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </RenderText>
      </ShowcaseContainer>
    ))}
  </Layout>
);

const RenderText = ({ value, name, children }: any) => {
  const [ref, bound] = useMeasure({ debounce: 1000 });
  return (
    <>
      <Text_Span
        ref={ref}
        paletteColor={ColorPalettes.Grey1}
        fontSize={value}
        style={{
          width: "100%",
          display: "inline-block",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {children}
      </Text_Span>
      <br />
      <br />
      <Text_Span paletteColor={ColorPalettes.Grey1}>{name}</Text_Span>
      <br />
      <br />
      <Text_Span paletteColor={ColorPalettes.Grey1}>{bound.height}</Text_Span>
    </>
  );
};

const ShowcaseContainer = ({ children }: any) => {
  return (
    <Layout>
      <Container
        borderBottomStyle={BorderStyles.Solid}
        borderWidth={BorderWidths.Size1}
        borderColor={ColorPalettes.Grey9}
        padding={Spacings.Size5}
      >
        {/* showcase */}
        <Layout display={Displays.Flex}>
          <Container borderRadius={Radiuses.Size6}>{children}</Container>
        </Layout>

        {/* token */}

        {/* value */}
      </Container>
    </Layout>
  );
};
