import { Meta } from "@storybook/react-vite";
import { Layout, Text_Span } from "functionalui";
import { ColorPalettes, FontBaseSizes, FontSizes } from "functionalui/types";
import useMeasure from "react-use-measure";

const meta: Meta = {
  title: "Typography/Dynamic Font Sizes",
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

const fontSizes = Object.keys(FontSizes)
  .filter((key) => isNaN(Number(key))) // Filter out numeric keys
  .map((key) => ({
    name: key,
    value: FontSizes[key as keyof typeof FontSizes],
  }));

export function Default() {
  return (
    <Layout>
      <button onClick={decrementBase}>-size</button>
      <button onClick={incrementBase}>+size</button>
      {fontSizes.map((item, idx) => (
        <RenderText key={idx} value={item.value} name={item.name}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </RenderText>
      ))}
    </Layout>
  );
}

const RenderText = ({ value, name, children }: any) => {
  const [ref, bound] = useMeasure({ debounce: 1000 });
  return (
    <Layout>
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
    </Layout>
  );
};

function decrementBase() {
  const sz = document.documentElement.getAttribute("data-b-fsize");
  if (sz == null) {
    // should be at "default"
    document.documentElement.setAttribute("data-b-fsize", "small");
  } else if (sz == FontBaseSizes.Big) {
    document.documentElement.setAttribute("data-b-fsize", "default");
  } else if (sz == FontBaseSizes.Default) {
    document.documentElement.setAttribute("data-b-fsize", "small");
  }
}
function incrementBase() {
  const sz = document.documentElement.getAttribute("data-b-fsize");
  if (sz == null) {
    // should be at "default"
    document.documentElement.setAttribute("data-b-fsize", "big");
  } else if (sz == FontBaseSizes.Small) {
    document.documentElement.setAttribute("data-b-fsize", "default");
  } else if (sz == FontBaseSizes.Default) {
    document.documentElement.setAttribute("data-b-fsize", "big");
  }
}
