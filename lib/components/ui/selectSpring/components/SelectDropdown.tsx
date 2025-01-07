import { FC } from "react";
// import { useInView } from "react-intersection-observer";
import { Container, Text_Span } from "functionalui";
import {
  ColorSets,
  DropdownHeightStyles,
  SelectOption,
  SelectStates,
  Spacings,
} from "functionalui/types";
import useMeasure from "react-use-measure";
import DropdownAnimation from "./DropdownAnimation";
import DropdownLi from "./DropdownLi";
import useTopOrBottom from "./useTopOrBottom";
import { DropdownPositions } from "../../../../styles/types/ui/selectSpring/types";

interface P {
  isSelectOpen: boolean;
  closeSelect: () => void;
  selectOptions: SelectOption[];
  handleSelectItem: (id: string | number, idx: number) => void;
  selectState: SelectStates;
  dropdownHeightStyle: DropdownHeightStyles;
  colorSet: ColorSets;
  headerHeight: number;
  dropdownPosition?: DropdownPositions;
  w: number;
}
const SelectDropdown: FC<P> = ({
  isSelectOpen,
  selectOptions,
  handleSelectItem,
  selectState,
  dropdownHeightStyle,
  dropdownPosition = DropdownPositions.Bottom,
  colorSet,
  headerHeight,
  w,
  // closeSelect,
}) => {
  const [ref, bounds] = useMeasure();
  const position = useTopOrBottom(bounds);
  const translateY = position > 0 ? headerHeight : -bounds.height;
  return (
    <div
      ref={ref}
      style={{
        maxHeight: 250,
        width: w,
        overflowY: "scroll",
        position: "absolute",
        transform: `translateY(${translateY}px)`,
        overscrollBehaviorY: "none",
      }}
    >
      <DropdownAnimation
        dropdownHeightStyle={dropdownHeightStyle}
        isOpen={isSelectOpen}
        dropdownPosition={dropdownPosition}
        selectState={selectState}
        position={position}
      >
        {/* <DivInView setClose={closeSelect} /> */}
        {selectOptions.map((item, idx) => (
          <DropdownLi
            key={item.id}
            handleSelectItem={handleSelectItem}
            id={item.id}
            idx={idx}
            colorSet={colorSet}
          >
            {/* @todo_20240503_0114("font-size") */}
            <Container
              paddingTop={Spacings.Size1} // @todo_20240829_1555("subject to sizing")
              paddingBottom={Spacings.Size1}
              paddingLeft={Spacings.Size2}
              paddingRight={Spacings.Size2}
            >
              <Text_Span>{item.text}</Text_Span>
            </Container>
          </DropdownLi>
        ))}
        {/* <DivInView setClose={closeSelect} /> */}
      </DropdownAnimation>
    </div>
  );
};

export default SelectDropdown;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const DivInView = ({ setClose }: { setClose: (() => void) }) => {
//   const { ref, inView } = useInView({
//     threshold: 1,
//   });
//   useEffect(() => {
//     if (!inView) {
//       setClose()
//     }
//   }, [inView, setClose])

//   return (
//     <div ref={ref} />
//   )
// }
