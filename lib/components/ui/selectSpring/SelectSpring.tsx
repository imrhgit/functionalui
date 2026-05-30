"use client";

import { Layout } from "functionalui/layout";
import {
  ColorSets,
  Displays,
  FlexDirections,
  SelectOption,
} from "functionalui/types";
import { FC, useEffect, useReducer, useState } from "react";
import useMeasure from "react-use-measure";
import useClickOutsideDOM from "../../../hooks/useClickOutsideDOM";
import {
  DropdownHeightStyles,
  DropdownPositions,
  SelectedValuesStyles,
  SelectStates,
} from "../../../styles/types/ui/selectSpring/types";
import SelectDropdown from "./components/SelectDropdown";
import SelectHeader from "./components/SelectHeader";

interface P {
  id: string | number;
  title: string;
  options: SelectOption[];
  // optionals
  selectedIdx?: number | null;
  w?: number;
  doubleZero?: boolean;
  required?: boolean;
  dropdownHeightStyle?: DropdownHeightStyles;
  state?: SelectStates;
  selectedValuesStyle?: SelectedValuesStyles;
  colorSet?: ColorSets;
  dropdownPosition?: DropdownPositions;
  // parent methods
  setSelectedIdx: (idx: number) => void;
  setInput?: (a: any) => void;
}

interface ReducerStates {
  selectState: SelectStates;
  openDropdown: boolean;
  selectedItemIdx: number | null;
  selectOptions: SelectOption[];
}
// "field" | "open" | "close" | "select"
function reducer(state: ReducerStates, action: any): ReducerStates {
  switch (action.type) {
    case "field":
      return { ...state, [action.field]: action.value };
    case "select":
      // single select
      return {
        ...state,
        selectedItemIdx: action.value,
        selectOptions: state.selectOptions.map(
          (item: SelectOption, i: number) => {
            if (action.value === i) {
              return { ...item, selected: true };
            } else return { ...item, selected: false };
          },
        ),
        openDropdown: false,
        selectState: SelectStates.Selected,
      };
    case "open":
      return { ...state, openDropdown: true };
    case "close":
      return { ...state, openDropdown: false };
    case "open-close":
      return { ...state, openDropdown: !state.openDropdown };
    case "parent-update-selected":
      return {
        ...state,
        selectedItemIdx: action.value,
        selectOptions: state.selectOptions.map((i, ix) => ({
          ...i,
          selected: ix === action.value ? true : false,
        })),
      };
    default:
      return state;
  }
}
const SelectSpring: FC<P> = ({
  id,
  title,
  options,
  selectedIdx = null,
  w = 225,
  doubleZero = false,
  required = false,
  dropdownHeightStyle = DropdownHeightStyles.AutoHeight,
  state = SelectStates.Default,
  selectedValuesStyle = SelectedValuesStyles.Text,
  colorSet = ColorSets.Primarys,
  dropdownPosition = DropdownPositions.Bottom,
  setSelectedIdx,
  setInput,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [rstate, dispatch] = useReducer(reducer, {
    selectState: state,
    openDropdown: false,
    selectedItemIdx: selectedIdx,
    selectOptions: options,
  } as ReducerStates);
  const { openDropdown, selectedItemIdx, selectOptions, selectState } = rstate;

  /** on mount logic
   * update default selected value - this component and parent component
   *
   */
  useEffect(() => {
    // console.log("devel:SelectSpring", "on mount", "1")
    setIsMounted(true);
    if (typeof selectedIdx === "number") {
      // run parent methods
      if (setSelectedIdx) setSelectedIdx(selectedIdx);
      if (setInput)
        setInput((prev: any) => ({ ...prev, [id]: options[selectedIdx] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // to update this component - when parent change the selectedIdx
    if (typeof selectedIdx === "number") {
      // dispatch({ type: "field", field: "selectedIdx", value: selectedIdx })
      dispatch({ type: "parent-update-selected", value: selectedIdx });
    }
  }, [selectedIdx]);

  /** to display error
   *
   */
  useEffect(() => {
    // this logic should be in reducer -- action select -- but how to pass required and isMounted
    if (required && isMounted && !openDropdown) {
      if (typeof selectedItemIdx === "number" && selectedItemIdx !== -1) {
        // update the select state - selected
        dispatch({
          type: "field",
          field: "selectState",
          value: SelectStates.Default,
        });
      } else {
        dispatch({
          type: "field",
          field: "selectState",
          value: SelectStates.Error,
        });
      }
    }
  }, [isMounted, openDropdown, required, selectedItemIdx]);

  const handleSelectItem = (id: string | number, idx: number) => {
    dispatch({ type: "select", value: idx });
    // update parent component
    if (setSelectedIdx) setSelectedIdx(idx);
    if (setInput) {
      setInput((prev: any) => ({
        ...prev,
        [id]: selectOptions[idx],
      }));
    }
  };

  const nodeDOM = useClickOutsideDOM(() => {
    dispatch({ type: "close" });
  });
  const [headerRef, headerBounds] = useMeasure();

  // console.log(
  //   "devel:SelectSpring",
  //   "\n",
  //   "id",
  //   id,
  //   "\n",
  //   "selectedIdx",
  //   selectedIdx,
  //   "\n"
  // );

  return (
    // <div ref={nodeDOM}>
    <Layout
      ref={nodeDOM}
      display={Displays.Flex}
      flexDirection={FlexDirections.Column}
      style={{ width: w, maxWidth: w }}
    >
      <div ref={headerRef}>
        <SelectHeader
          w={w}
          setOpenDropdown={() => dispatch({ type: "open-close" })}
          selectState={selectState}
          setSelectState={(s: SelectStates) =>
            dispatch({ type: "field", field: "selectState", value: s })
          }
          openDropdown={openDropdown}
          // selectedItemIdx={typeof selectedItemIdx === "number" && selectedItemIdx !== -1 ? selectedItemIdx : null}
          title={title}
          doubleZero={doubleZero}
          selectedValues={selectOptions.filter((v) => v.selected === true)}
          selectedValueStyles={selectedValuesStyle}
          options={options}
        />
      </div>

      {/* dropdown */}
      <SelectDropdown
        isSelectOpen={openDropdown} // to open or close dropdown
        closeSelect={() => dispatch({ type: "close" })}
        selectOptions={selectOptions} // to show the options list
        handleSelectItem={handleSelectItem} // to handle select option
        selectState={selectState}
        dropdownHeightStyle={dropdownHeightStyle}
        dropdownPosition={dropdownPosition}
        colorSet={colorSet}
        headerHeight={headerBounds.height}
        w={headerBounds.width}
      />
    </Layout>
    // </div>
  );
};

export default SelectSpring;
