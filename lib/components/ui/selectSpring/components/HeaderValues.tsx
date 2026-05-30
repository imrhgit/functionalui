import { Text_Span } from "functionalui/texts/span";
import { SelectOption } from "functionalui/types";
import { FC } from "react";
import {
  SelectedValuesStyles,
  SELECT_SIZES,
  SelectSizes,
} from "../../../../styles/types/ui/selectSpring/types";

interface P {
  selectedValues: SelectOption[];
  doubleZero: boolean;
  title: string;
  selectedValueStyles?: SelectedValuesStyles;
  sizes?: SelectSizes;
}
const HeaderValues: FC<P> = ({
  selectedValues,
  doubleZero,
  title,
  selectedValueStyles = SelectedValuesStyles.Text,
  sizes = SelectSizes.Medium,
}) => {
  if (selectedValues.length === 1) {
    const t: any = selectedValues[0].text;
    // eslint-disable-next-line no-empty
    if (doubleZero && t == 0) {
    }
  }
  // console.log("devel:HeaderValues", title, selectedValues, selectedValueStyles)
  if (selectedValues.length < 1) {
    return <TitleText sizes={sizes} title={title} />;
  } else if (selectedValueStyles === SelectedValuesStyles.Text) {
    return (
      <>
        {selectedValues.map((i, idx) => (
          <Text_Span key={idx} fontSize={SELECT_SIZES[sizes].font.size}>
            {i.text}
          </Text_Span>
        ))}
      </>
    );
  } else
    return (
      // @todo_20240503_1350("chip")
      <>
        {selectedValues.map((i, idx) => (
          <Text_Span key={idx} fontSize={SELECT_SIZES[sizes].font.size}>
            {i.text}
          </Text_Span>
        ))}
      </>
    );
};

export default HeaderValues;

const TitleText = ({ title, sizes }: { title: string; sizes: SelectSizes }) => {
  return (
    <Text_Span fontSize={SELECT_SIZES[sizes].font.size}>{title}</Text_Span>
  );
};
