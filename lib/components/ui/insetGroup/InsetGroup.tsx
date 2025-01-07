"use client";

import { Container } from "functionalui";
import { ColorSets } from "functionalui/types";
import { FC, useEffect, useState } from "react";
import InsetItem from "./components/InsetItem";
import cstyles from "./styles.module.css";

interface P {
  options: any;
  valueIndex: any;
  id: any;
  setInput: any;
  setSelect: any;
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
    <Container className={cstyles.insetGroupContainer}>
      {options.map((item: any, index: number) => (
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
        />
      ))}
    </Container>
  );
};

export default InsetGroup;
