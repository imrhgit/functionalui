import { useTransition } from "@react-spring/web";
import { F__Ul, SpringOpenCloseHeight } from "functionalui";
import {
  // DropdownHeightStyles,
  // DropdownPositions,
  SelectStates,
} from "functionalui/types";
import { ReactNode } from "react";
import {
  DropdownHeightStyles,
  DropdownPositions,
} from "../../../../styles/types/ui/selectSpring/types";

const DROPDOWN_POSITION = {
  [DropdownPositions.Top]: {
    from: { y: -10 },
    enter: { y: -1 },
    leave: { y: -10 },
  },
  [DropdownPositions.Bottom]: {
    from: { y: 10 },
    enter: { y: -1 },
    leave: { y: 10 },
  },
};
type P = {
  dropdownHeightStyle: DropdownHeightStyles;
  isOpen: boolean;
  dropdownPosition: DropdownPositions;
  position: number; // 1 | -1 | 0;
  selectState: SelectStates;
  children: ReactNode;
};
const DropdownAnimation = ({
  dropdownHeightStyle,
  isOpen,
  dropdownPosition,
  position,
  selectState,
  children,
}: P) => {
  switch (dropdownHeightStyle) {
    case DropdownHeightStyles.Default:
      return (
        <DefaultDropdown
          dropdownHeightStyle={dropdownHeightStyle}
          isOpen={isOpen}
          dropdownPosition={dropdownPosition}
          position={position}
          selectState={selectState}
        >
          {children}
        </DefaultDropdown>
      );
    case DropdownHeightStyles.AutoHeight:
      return (
        <WithHeightDropdown
          dropdownHeightStyle={dropdownHeightStyle}
          isOpen={isOpen}
          dropdownPosition={dropdownPosition}
          position={position}
          selectState={selectState}
        >
          {children}
        </WithHeightDropdown>
      );
    default:
      return (
        <DefaultDropdown
          dropdownHeightStyle={dropdownHeightStyle}
          isOpen={isOpen}
          dropdownPosition={dropdownPosition}
          position={position}
          selectState={selectState}
        >
          {children}
        </DefaultDropdown>
      );
  }
};

export default DropdownAnimation;

const DefaultDropdown = ({
  isOpen,
  dropdownPosition,
  // dropdownHeightStyle,
  // hasSelect,
  position,
  children,
}: P) => {
  const dropdownTransition = useTransition(isOpen, {
    from: {
      opacity: 0,
      ...DROPDOWN_POSITION[dropdownPosition].from,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
    },
    enter: {
      opacity: 1,
      ...DROPDOWN_POSITION[dropdownPosition].enter,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
    },
    leave: {
      opacity: 0,
      ...DROPDOWN_POSITION[dropdownPosition].leave,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
    },
  });
  return dropdownTransition(
    (styles, item) =>
      item && (
        <F__Ul
          style={styles}
          // className={`${classStyles} ${hasSelect ? "has-select" : ""} ${selectState ? "error-required" : ""} drop-${dropdownHeightStyle}`}
        >
          {children}
        </F__Ul>
      ),
  );
};
const WithHeightDropdown = ({
  isOpen,
  // dropdownHeightStyle,
  // hasSelect,
  dropdownPosition,
  position,
  children,
}: P) => {
  const dropdownTransition = useTransition(isOpen, {
    from: {
      opacity: 0,
      scaleY: 0,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
      height: "0%",
    },
    enter: {
      opacity: 1,
      scaleY: 1,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
      height: "100%",
    },
    leave: {
      opacity: 0,
      scaleY: 0,
      transformOrigin:
        dropdownPosition === DropdownPositions.Top
          ? "bottom center"
          : dropdownPosition === DropdownPositions.Bottom
            ? "top center"
            : position < 0
              ? "bottom center"
              : "top center",
      height: "0%",
    },
    // from: { opacity: 0, scaleY: 0, transformOrigin: "bottom center", height: "0%" },
    // enter: { opacity: 1, scaleY: 1, transformOrigin: "bottom center", height: "100%" },
    // leave: { opacity: 0, scaleY: 0, transformOrigin: "bottom center", height: "0%" },
  });
  return (
    <SpringOpenCloseHeight isOpen={isOpen}>
      {dropdownTransition(
        (styles, item) =>
          item && (
            <F__Ul
              style={styles}
              // className={`${classStyles} ${hasSelect ? "has-select" : ""} ${selectState ? "error-required" : ""} drop-${dropdownHeightStyle}`}
            >
              {children}
            </F__Ul>
          ),
      )}
    </SpringOpenCloseHeight>
  );
};
