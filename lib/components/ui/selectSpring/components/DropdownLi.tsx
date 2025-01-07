import { useSpring } from "@react-spring/web";
import { F__Li } from "functionalui";
import {
  COLOR_VALUES,
  ColorPalettes,
  ColorRanges,
  ColorSets,
  Spacings,
} from "functionalui/types";
import { FC } from "react";

interface P {
  handleSelectItem: (id: string | number, idx: number) => void;
  id: string | number;
  idx: number;
  children: React.ReactNode;
  colorSet: ColorSets;
}
const DropdownLi: FC<P> = ({
  handleSelectItem,
  id,
  idx,
  children,
  colorSet,
}) => {
  const [liStyles, liApi] = useSpring(() => ({
    backgroundColor: COLOR_VALUES[ColorPalettes.Grey2], // same as SelectHeader bgColor
  }));
  return (
    <F__Li
      paddingTop={Spacings.Size1}
      paddingBottom={Spacings.Size1}
      paddingLeft={Spacings.Size2}
      paddingRight={Spacings.Size2}
      style={{
        listStyle: "none",
        cursor: "pointer",
        userSelect: "none",
        ...liStyles,
      }}
      onMouseEnter={() => {
        liApi.start({
          backgroundColor: COLOR_VALUES[ColorRanges[colorSet][0] + 2],
        });
      }}
      onMouseLeave={() => {
        liApi.start({ backgroundColor: COLOR_VALUES[ColorPalettes.Grey2] });
      }}
      onMouseDown={() => {
        liApi.start({
          backgroundColor: COLOR_VALUES[ColorRanges[colorSet][0] + 3],
        });
      }}
      onClick={() => handleSelectItem(id, idx)}
    >
      {children}
    </F__Li>
  );
};

export default DropdownLi;
