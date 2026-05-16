import { Meta } from "@storybook/react-vite";
import { Container, Layout, Text_Span } from "functionalui";
import {
  BorderStyles,
  BorderWidths,
  COLOR_VALUES,
  ColorPalettes,
  ColorRanges,
  Displays,
  FlexWraps,
  FontSizes,
  Spacings,
  ColorSets as STORY_ITEM
} from "functionalui/types";
import { ReactNode, useEffect, useState } from "react";

const meta: Meta<typeof Container> = {
  title: "Tokens/Themes/Light Colors",
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

const colorSets = Object.keys(STORY_ITEM)
  .filter((key) => isNaN(Number(key))) // Filter out numeric keys
  .map((key) => ({
    name: key,
    value: STORY_ITEM[key as keyof typeof STORY_ITEM],
  }));
// how to create list of color palette / ranges from a color set?
const colorPalettes = colorSets.map((item) => {
  // [...Array(11 - 2 + 1).keys()].map(i => i + 2).forEach(num => console.log(num));
  let ccolors = [
    ...Array(
      ColorRanges[item.value][1] - ColorRanges[item.value][0] + 1
    ).keys(),
  ].map((i) => COLOR_VALUES[i + ColorRanges[item.value][0]]);
  // .forEach((v) => v);
  return {
    name: item.name,
    value: item.value,
    colors: ccolors,
  };
});
export function LightColors() {
  // useeffect to set to dark
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <Layout>
      {colorPalettes.map(
        (item: { name: string; value: number; colors: string[] }, idx) => (
          <ShowcaseContainer key={idx}>
            <ColorPallete item={item}>
              {/*name*/}
              <Text_Span
                paletteColor={ColorPalettes.Grey1}
                fontSize={FontSizes.Size6}
                style={{
                  display: "inline-block",
                }}
              >
                {item.name}
              </Text_Span>
            </ColorPallete>
          </ShowcaseContainer>
        )
      )}
    </Layout>
  );
}
function ColorPallete({
  item,
  children,
}: {
  item: { name: string; value: number; colors: string[] };
  children: ReactNode;
}) {
  const [showName, setShowName] = useState(false);
  return (
    <Layout>
      <div>{children}</div>
      {/* actions */}
      <button onClick={() => setShowName((prev) => !prev)}>
        {showName ? "hide name" : "show name"}
      </button>
      {/*colors*/}
      <Layout
        display={Displays.Flex}
        // flexDirection={FlexDirections.Column}
        flexWrap={FlexWraps.Wrap}
      >
        {item.colors.map((clr, ky) => (
          <ColorItem key={ky} value={clr} showName={showName} />
        ))}
      </Layout>
    </Layout>
  );
}
const ColorItem = ({ value, showName }: any) => {
  return (
    <Layout>
      {/*show color*/}
      <Container style={{ backgroundColor: value, width: 75, height: 75 }} />
      {/*color value*/}
      {showName && (
        <Text_Span
          paletteColor={ColorPalettes.Grey1}
          style={{
            display: "inline-block",
          }}
        >
          {value}
        </Text_Span>
      )}
    </Layout>
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
        {children}
      </Container>
    </Layout>
  );
};
