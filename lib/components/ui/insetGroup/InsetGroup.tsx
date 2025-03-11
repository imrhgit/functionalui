"use client";

import { Layout } from "functionalui";
import {
  ColorSets,
  Displays,
  FlexAlignItems,
  Radiuses,
} from "functionalui/types";
import { FC, useEffect, useState } from "react";
import InsetItem from "./components/InsetItem";
import { InsetGroupOption } from "../../../styles/types/ui/insetGroup/types";

interface P {
  id: any;
  options: InsetGroupOption[];
  valueIndex?: any;
  setInput?: any;
  setSelect?: (v: InsetGroupOption) => void;
  // rgbBg: any;
  insetColor?: ColorSets;
}
const InsetGroup: FC<P> = ({
  options = [], // id, value, text
  valueIndex = 0,
  id,
  setInput,
  setSelect,
  // rgbBg,
  insetColor,
}) => {
  const [selectedInsetIdx, setSelectedInsetIdx] = useState(valueIndex);
  useEffect(() => {
    if (typeof valueIndex === "number") {
      setSelectedInsetIdx(valueIndex);
    }
  }, [valueIndex]);

  const handleSelectInset = (idx: number) => {
    setSelectedInsetIdx(idx);
    if (setInput) {
      setInput((prev: any) => ({
        ...prev,
        [id]: options[idx],
      }));
    }
    if (setSelect) {
      setSelect(options[idx]);
    }
  };
  return (
    <Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
      {options.map((item: InsetGroupOption, index: number) => (
        <InsetItem
          key={index}
          text={item.text}
          value={item.value}
          idx={index}
          id={item.id}
          handleSelectInset={handleSelectInset}
          isSelected={index === selectedInsetIdx}
          // rgbBg={rgbBg}
          insetColor={insetColor}
          borderTopLeftRadius={index === 0 ? Radiuses.Size4 : undefined}
          borderTopRightRadius={
            index === options.length - 1 ? Radiuses.Size4 : undefined
          }
          borderBottomLeftRadius={index === 0 ? Radiuses.Size4 : undefined}
          borderBottomRightRadius={
            index === options.length - 1 ? Radiuses.Size4 : undefined
          }
        />
      ))}
    </Layout>
  );
};

export default InsetGroup;
