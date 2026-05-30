import { Meta } from "@storybook/react";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_H1 } from "functionalui/texts/h1";
import { Text_Header } from "functionalui/texts/header";
import { Text_P } from "functionalui/texts/p";
import { Text_Span } from "functionalui/texts/span";
import { ColorPalettes, FontSizes, FontWeights, Spacings } from "functionalui/types";

const meta: Meta = {
  title: "Components/Texts",
};

export default meta;

export const H1 = () => {
  /* const ref = useRef<HTMLHeadingElement | null>(null); */
  function switchTheme(v: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", v);
    /* if (ref.current) {
			console.log("ref working", ref.current.innerText)
		} */
  }

  return (
    <Container>
      <Layout>
        <button onClick={() => switchTheme("light")}>light theme</button>
        <button onClick={() => switchTheme("dark")}>dark theme</button>
      </Layout>
      <Container marginTop={Spacings.Size5} marginBottom={Spacings.Size5}>
        <Text_H1 header="h1" paletteColor={ColorPalettes.Primary5}>
          H1 header
        </Text_H1>
        <Text_Header header="h1" paletteColor={ColorPalettes.Secondary5}>
          H1 Text_Header
        </Text_Header>
        <Text_Header header="h2" paletteColor={ColorPalettes.Secondary5}>
          H2 Text_Header
        </Text_Header>
        <Text_Header header="h3" paletteColor={ColorPalettes.Secondary5}>
          H3 Text_Header
        </Text_Header>

        <Text_Span
          fontSize={FontSizes.Size5}
          paletteColor={ColorPalettes.Secondary5}
          fontWeight={FontWeights.Size6}
        >
          Span text
        </Text_Span>
        <Text_P>P text</Text_P>
      </Container>
    </Container>
  );
};
