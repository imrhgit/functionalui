import {
	AlignSelfs,
	Displays,
	FlexAlignContents,
	FlexAlignItems,
	FlexDirections,
	FlexJustifyContents,
	FlexWraps,
	GridAlignContents,
	GridGaps,
	GridJustifyContents,
	JustifySelfs,
} from "./generics";

export const DISPLAY_CLASSES = {
	[Displays.None]: "layout--none",
	[Displays.Block]: "layout--block",
	[Displays.InlineBlock]: "layout--inline-block",
	[Displays.Flex]: "layout--flex",
	[Displays.InlineFlex]: "layout--inline-flex",
	[Displays.Grid]: "layout--grid",
};
export const FLEX_DIRECTION_CLASSES = {
	[FlexDirections.Row]: "layout--fd-row",
	[FlexDirections.Column]: "layout--fd-column",
	[FlexDirections.RowReverse]: "layout--fd-row-reverse",
	[FlexDirections.ColumnReverse]: "layout--fd-column-reverse",
};
export const FLEX_WRAP_CLASSES = {
	[FlexWraps.NoWrap]: "layout--fd-nowrap",
	[FlexWraps.Wrap]: "layout--fd-wrap",
	[FlexWraps.WrapReverse]: "layout--fd-wrap-reverse",
};
export const FLEX_JUSTIFY_CONTENT_CLASSES = {
	[FlexJustifyContents.FlexStart]: "layout--fjc-flex-start",
	[FlexJustifyContents.FlexEnd]: "layout--fjc-flex-end",
	[FlexJustifyContents.Center]: "layout--fjc-center",
	[FlexJustifyContents.SpaceBetween]: "layout--fjc-space-between",
	[FlexJustifyContents.SpaceAround]: "layout--fjc-space-around",
};
export const FLEX_ALIGN_ITEMS_CLASSES = {
	[FlexAlignItems.FlexStart]: "layout--fai-flex-start",
	[FlexAlignItems.FlexEnd]: "layout--fai-flex-end",
	[FlexAlignItems.Center]: "layout--fai-center",
	[FlexAlignItems.Baseline]: "layout--fai-baseline",
	[FlexAlignItems.Stretch]: "layout--fai-stretch",
};
export const FLEX_ALIGN_CONTENT_CLASSES = {
	[FlexAlignContents.FlexStart]: "layout--fac-flex-start",
	[FlexAlignContents.FlexEnd]: "layout--fac-flex-end",
	[FlexAlignContents.Center]: "layout--fac-center",
	[FlexAlignContents.SpaceBetween]: "layout--fac-space-between",
	[FlexAlignContents.SpaceAround]: "layout--fac-space-around",
	[FlexAlignContents.Stretch]: "layout--fac-stretch",
};

export const GRID_GAP_CLASSES = {
	[GridGaps.Size1]: "layout--ggp-size-1",
	[GridGaps.Size2]: "layout--ggp-size-2",
	[GridGaps.Size3]: "layout--ggp-size-3",
	[GridGaps.Size4]: "layout--ggp-size-4",
	[GridGaps.Size5]: "layout--ggp-size-5",
	[GridGaps.Size6]: "layout--ggp-size-6",
	[GridGaps.Size7]: "layout--ggp-size-7",
	[GridGaps.Size8]: "layout--ggp-size-8",
	[GridGaps.Size9]: "layout--ggp-size-9",
};
export const GRID_ROW_GAP_CLASSES = {
	[GridGaps.Size1]: "layout--grg-size-1",
	[GridGaps.Size2]: "layout--grg-size-2",
	[GridGaps.Size3]: "layout--grg-size-3",
	[GridGaps.Size4]: "layout--grg-size-4",
	[GridGaps.Size5]: "layout--grg-size-5",
	[GridGaps.Size6]: "layout--grg-size-6",
	[GridGaps.Size7]: "layout--grg-size-7",
	[GridGaps.Size8]: "layout--grg-size-8",
	[GridGaps.Size9]: "layout--grg-size-9",
};
export const GRID_COLUMN_GAP_CLASSES = {
	[GridGaps.Size1]: "layout--gcg-size-1",
	[GridGaps.Size2]: "layout--gcg-size-2",
	[GridGaps.Size3]: "layout--gcg-size-3",
	[GridGaps.Size4]: "layout--gcg-size-4",
	[GridGaps.Size5]: "layout--gcg-size-5",
	[GridGaps.Size6]: "layout--gcg-size-6",
	[GridGaps.Size7]: "layout--gcg-size-7",
	[GridGaps.Size8]: "layout--gcg-size-8",
	[GridGaps.Size9]: "layout--gcg-size-9",
};
export const GRID_JUSTIFY_CONTENT_CLASSES = {
	[GridJustifyContents.Start]: "layout--gjc-start",
	[GridJustifyContents.End]: "layout--gjc-end",
	[GridJustifyContents.Center]: "layout--gjc-center",
	[GridJustifyContents.Left]: "layout--gjc-left",
	[GridJustifyContents.Right]: "layout--gjc-right",
	[GridJustifyContents.SpaceAround]: "layout--gjc-space-around",
	[GridJustifyContents.SpaceBetween]: "layout--gjc-space-between",
	[GridJustifyContents.Stretch]: "layout--gjc-stretch",
	[GridJustifyContents.SpaceEvenly]: "layout--gjc-space-evenly",
};
export const GRID_ALIGN_CONTENT_CLASSES = {
	[GridAlignContents.Start]: "layout--gac-start",
	[GridAlignContents.End]: "layout--gac-end",
	[GridAlignContents.Center]: "layout--gac-center",
	[GridAlignContents.Left]: "layout--gac-left",
	[GridAlignContents.Right]: "layout--gac-right",
	[GridAlignContents.SpaceAround]: "layout--gac-space-around",
	[GridAlignContents.SpaceBetween]: "layout--gac-space-between",
	[GridAlignContents.Stretch]: "layout--gac-stretch",
	[GridAlignContents.SpaceEvenly]: "layout--gac-space-evenly",
};
export const JUSTIFY_SELF_CLASSES = {
	[JustifySelfs.Start]: "fctrd--js-start",
	[JustifySelfs.End]: "fctrd--js-end",
	[JustifySelfs.Center]: "fctrd--js-center",
	[JustifySelfs.Left]: "fctrd--js-left",
	[JustifySelfs.Right]: "fctrd--js-right",
	[JustifySelfs.SelfStart]: "fctrd--js-self-start",
	[JustifySelfs.SelfEnd]: "fctrd--js-self-end",
	[JustifySelfs.Stretch]: "fctrd--js-stretch",
	[JustifySelfs.Normal]: "fctrd--js-normal",
	[JustifySelfs.Auto]: "fctrd--js-auto",
};
export const ALIGN_SELF_CLASSES = {
	[AlignSelfs.Start]: "fctrd--as-start",
	[AlignSelfs.End]: "fctrd--as-end",
	[AlignSelfs.Center]: "fctrd--as-center",
	[AlignSelfs.Left]: "fctrd--as-left",
	[AlignSelfs.Right]: "fctrd--as-right",
	[AlignSelfs.SelfStart]: "fctrd--as-self-start",
	[AlignSelfs.SelfEnd]: "fctrd--as-self-end",
	[AlignSelfs.Stretch]: "fctrd--as-stretch",
	[AlignSelfs.Normal]: "fctrd--as-normal",
	[AlignSelfs.Auto]: "fctrd--as-auto",
};
