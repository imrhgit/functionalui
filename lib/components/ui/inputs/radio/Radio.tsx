"use client";

import { config, useSpring, useTransition } from "@react-spring/web";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import {
  COLOR_VALUES,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  Sizings,
  Spacings,
} from "functionalui/types";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  type Ref,
  useEffect,
  useState,
} from "react";

interface P extends HTMLAttributes<HTMLInputElement> {
  checked: boolean;
  id: string;
  handleChange: (id: string, checked: boolean) => void;
  size?: Sizings;
  children: ReactNode;
  vertigo?: boolean;
  ref?: Ref<HTMLInputElement> | undefined;
}
const Radio: FC<P> = ({
  id,
  checked,
  size = Sizings.Size3,
  handleChange = () => {},
  vertigo,
  ref,
  children,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isFocused, setIsFocused] = useState(false);
  const handleSelect = (v: boolean) => {
    setIsChecked(v);
    handleChange(id, v);
  };
  useEffect(() => {
    const callbackHandler = (e: any) => {
      if (!isFocused || isChecked) return;
      if (e.key === " ") {
        handleSelect(true);
      }
    };
    if (document) {
      document.addEventListener("keydown", callbackHandler, false);
    }
    return () => {
      if (document) {
        document.removeEventListener("keydown", callbackHandler, false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, isChecked]);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Container
      onClick={() => {
        if (vertigo && isChecked) return;
        setIsChecked(!isChecked);
        handleChange(id, isChecked);
      }}
      style={{ cursor: "pointer" }}
      tabIndex={0}
      role="button"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
        <InputShown checked={isChecked} size={size} />
        <Container
          marginLeft={Spacings.Size1}
          style={{ transform: "translateY(-1px)", userSelect: "none" }}
        >
          {children}
        </Container>
        <input
          ref={ref}
          id={id}
          checked={isChecked}
          onChange={() => {}}
          type="radio"
          style={{
            appearance: "none",
            backgroundColor: "transparent",
            margin: 0,
            display: "none",
          }}
          {...props}
        />
      </Layout>
    </Container>
  );
};

export default Radio;

const InputShown = ({ checked, size }: { checked: boolean; size: Sizings }) => {
  const circleTransition = useTransition(checked, {
    from: { opacity: 0, scale: 0.6 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.6 },
    config: {
      ...config.stiff,
    },
  });
  const containerAnim = useSpring({
    borderColor: checked
      ? COLOR_VALUES[ColorPalettes.Primary5]
      : COLOR_VALUES[ColorPalettes.Grey5],
  });
  return (
    <Container
      style={{
        ...containerAnim,
        width: size,
        height: size,
        borderRadius: "50%",
        borderWidth: 2,
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {circleTransition(
        (styles, item) =>
          item && (
            <Container
              style={{
                ...styles,
                width: size - 10,
                height: size - 10,
                borderRadius: "50%",
                backgroundColor: COLOR_VALUES[ColorPalettes.Primary5],
              }}
            />
          )
      )}
    </Container>
  );
};
