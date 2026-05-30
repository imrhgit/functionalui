import { useSpring } from "@react-spring/web";
import HeaderValues from "./HeaderValues";
import {
  ColorPalettes,
  Cursors,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Radiuses,
  SelectedValuesStyles,
  SelectOption,
  Spacings,
} from "functionalui/types";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { UIcon } from "functionalui/icons";
import {
  SELECT_STATES,
  SelectSizes,
  SELECT_SIZES,
  SelectStates,
} from "../../../../styles/types/ui/selectSpring/types";

interface P {
  w: number;
  title: string;
  doubleZero: boolean;
  setOpenDropdown: any;
  openDropdown: any;
  // selectedItemIdx: number | null;
  selectedValues: SelectOption[];
  selectedValueStyles: SelectedValuesStyles;
  options: SelectOption[];
  sizes?: SelectSizes;

  selectState: SelectStates;
  setSelectState: (a: SelectStates) => void;
}
const SelectHeader = ({
  // w,
  setOpenDropdown,
  openDropdown,
  title,
  doubleZero,
  selectState,
  // selectedItemIdx,
  selectedValues,
  selectedValueStyles,
  sizes = SelectSizes.Medium,
}: P) => {
  return (
    <Container
      style={{ cursor: "pointer" }}
      paddingTop={Spacings.Size1} // @todo_20240829_1555("subject to sizing")
      paddingBottom={Spacings.Size1}
      paddingLeft={Spacings.Size2}
      paddingRight={Spacings.Size2}
      borderRadius={SELECT_STATES[selectState].header.borderRadius}
      borderWidth={SELECT_STATES[selectState].header.borderWidth}
      borderColor={SELECT_STATES[selectState].header.borderColor}
      borderTopLeftRadius={openDropdown ? Radiuses.Size0 : undefined}
      borderTopRightRadius={openDropdown ? Radiuses.Size0 : undefined}
      bgColor={SELECT_STATES[selectState].header.bgColor}
      onClick={() => setOpenDropdown((prev: boolean) => !prev)}
    >
      <Layout
        display={Displays.Flex}
        flexAlignItem={FlexAlignItems.Center}
        flexJustifyContent={FlexJustifyContents.SpaceBetween}
      >
        <HeaderValues
          sizes={sizes}
          selectedValues={selectedValues}
          doubleZero={doubleZero}
          title={title}
          selectedValueStyles={selectedValueStyles}
        />
        <div className="icon">
          <SelectSpringIcon isSelectOpen={openDropdown} sizes={sizes} />
        </div>
      </Layout>
    </Container>
  );
};
export default SelectHeader;

// const HeaderValues = ({
//   selectedValues,
//   doubleZero,
//   title,
//   selectedValueStyles = SelectedValuesStyles.Text,
//   sizes = SelectSizes.Medium,
// }: { selectedValues: SelectOption[], doubleZero: boolean, title: string, selectedValueStyles?: SelectedValuesStyles, sizes?: SelectSizes }) => {
//   // eslint-disable-next-line no-var
//   var v: any
//   if (selectedValues.length === 1) {
//     const t: any = selectedValues[0].text
//     if (doubleZero && t == 0) {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       v = "00"
//     }
//   }
//   if (selectedValues.length < 1) {
//     return (
//       <TitleText sizes={sizes} title={title} />
//     )
//   } else if (selectedValueStyles === SelectedValuesStyles.Text) {
//     return (
//       <>
//         {selectedValues.map((i, idx) => (
//           <Text_Span key={idx} fontSize={SELECT_SIZES[sizes].font.size} >{i.text}</Text_Span>
//         ))}
//       </>
//     )
//   } else return (
//     // @todo_20240503_1350("chip")
//     <>
//       {selectedValues.map((i, idx) => (
//         <Text_Span key={idx} fontSize={SELECT_SIZES[sizes].font.size} >{i.text}</Text_Span>
//       ))}
//     </>
//   )
// }

// const TitleText = ({ title, sizes }: { title: string, sizes: SelectSizes }) => {
//   return (
//     <Text_Span fontSize={SELECT_SIZES[sizes].font.size} >{title}</Text_Span>
//   )
// }

const SelectSpringIcon = ({
  isSelectOpen,
  sizes,
  cursor = Cursors.Pointer,
}: {
  isSelectOpen: boolean;
  sizes: SelectSizes;
  cursor?: Cursors;
}) => {
  const iconChevronAnimation = useSpring({
    rotateX: isSelectOpen ? 180 : 0,
  });
  return (
    // @todo_20241105_1045("tech debt")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <Container style={iconChevronAnimation}>
      <UIcon
        name="chevron-down"
        colorLight={ColorPalettes.Grey5}
        colorDark={ColorPalettes.Grey5}
        size={SELECT_SIZES[sizes].icon.size}
        cursor={cursor}
      />
    </Container>
  );
};
