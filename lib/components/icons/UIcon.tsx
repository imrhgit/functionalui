"use client";

import { AnimatedProps, useSpring } from "@react-spring/web";
import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import {
  COLOR_VALUES,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Icons,
  RADIUS_VALUES,
  Sizings,
} from "functionalui/types";
import { FC, HTMLAttributes } from "react";
import { Cursors, Radiuses } from "../../styles/types/generics";
import { UICON_SIZING } from "../../styles/types/icons/values";
import Spinner from "./Spinner";

/*
	@todo_20241220_1655("")
	shadow
*/

interface P extends AnimatedProps<HTMLAttributes<HTMLDivElement>> {
  name: Icons | string;
  withMargin?: boolean;
  size?: Sizings;
  width?: number;
  height?: number;
  lazy?: boolean;
  colorLight?: ColorPalettes;
  colorDark?: ColorPalettes;
  iconAction?: (v?: any) => void;
  animated?: boolean;
  cursor?: Cursors;
  overflow?: string;
  borderRadius?: Radiuses | string;
  bgColor?: ColorPalettes;
}

const UIcon: FC<P> = ({
  name,
  size = Sizings.Size5,
  withMargin = true,
  width,
  height,
  colorLight = ColorPalettes.Grey5,
  colorDark = ColorPalettes.Grey5,
  iconAction,
  cursor = Cursors.Default,
  animated = true,
  overflow = "hidden",
  // borderRadius = "50%",
  borderRadius,
  bgColor,
  ...props
}) => {
  const [styles, api] = useSpring(() => ({
    backgroundColor: COLOR_VALUES[ColorPalettes.Transparent],
    scale: 1.0,
  }));

  const collectedClasses: Array<string> = [];
  if (colorDark || colorLight) {
    collectedClasses.push(COLOR_VALUES[colorDark || colorLight]);
  }
  const clickable = animated && typeof iconAction !== "undefined";
  return (
    <Layout
      onClick={iconAction}
      display={Displays.Flex}
      flexJustifyContent={FlexJustifyContents.Center}
      flexAlignItem={FlexAlignItems.Center}
      style={{
        width: "max-content",
        color: COLOR_VALUES[colorDark || colorLight],
        cursor: clickable ? "pointer" : "default",
        borderRadius: isBorderRadius(borderRadius)
          ? RADIUS_VALUES[borderRadius]
          : borderRadius,
        overflow: overflow,
      }}
      tabIndex={0}
      // hover
      onMouseEnter={() =>
        clickable &&
        api.start({
          backgroundColor: COLOR_VALUES[bgColor || ColorPalettes.Primary3],
        })
      }
      onMouseLeave={() =>
        clickable &&
        api.start({
          backgroundColor: COLOR_VALUES[bgColor || ColorPalettes.Transparent],
        })
      }
      // click
      onMouseDown={() =>
        clickable &&
        api.start({
          backgroundColor: COLOR_VALUES[bgColor || ColorPalettes.Primary2],
          scale: 0.85,
        })
      }
      onMouseUp={() =>
        clickable &&
        api.start({
          backgroundColor: COLOR_VALUES[bgColor || ColorPalettes.Primary3],
          scale: 1.0,
        })
      }
      {...props}
    >
      <Container
        padding={withMargin ? UICON_SIZING[size].padding : undefined}
        cursor={cursor}
        style={
          clickable
            ? {
                ...styles,
                borderRadius: isBorderRadius(borderRadius)
                  ? RADIUS_VALUES[borderRadius]
                  : borderRadius,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: UICON_SIZING[size].size + 3,
                minHeight: UICON_SIZING[size].size + 3,
                cursor: "inherit",
              }
            : {
                borderRadius: isBorderRadius(borderRadius)
                  ? RADIUS_VALUES[borderRadius]
                  : borderRadius,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: UICON_SIZING[size].size + 3,
                minHeight: UICON_SIZING[size].size + 3,
              }
        }
      >
        {name === "spinner" ? (
          <Spinner
            size={UICON_SIZING[size].size}
            className={collectedClasses.filter(Boolean).join(" ")}
          />
        ) : (
          <svg
            width={width || UICON_SIZING[size].size}
            height={height || UICON_SIZING[size].size}
            fill="none"
            stroke={COLOR_VALUES[colorDark || colorLight]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            cursor="inherit"
          >
            <use href={`/feather-sprite.svg#${name}`} />
          </svg>
        )}
      </Container>
    </Layout>
  );
};

export default UIcon;

function isBorderRadius(v: unknown): v is Radiuses {
  return (
    typeof v === "number" && Object.values(Radiuses).includes(v as Radiuses)
  );
}
