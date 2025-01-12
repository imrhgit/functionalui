import {
  BorderStyles,
  BorderWidths,
  BoxShadows,
  BoxSizings,
  Cursors,
  ElementResizes,
  FontFamilies,
  FontSizes,
  FontStyles,
  FontWeights,
  MediaSizes,
  Positions,
  Radiuses,
  Spacings,
  TextAligns,
} from "../types/generics";

type ClassType = { [key: number]: string };

export const MARGIN_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csm-size-0",
  [Spacings.Size1]: "fctrd--csm-size-1",
  [Spacings.Size2]: "fctrd--csm-size-2",
  [Spacings.Size3]: "fctrd--csm-size-3",
  [Spacings.Size4]: "fctrd--csm-size-4",
  [Spacings.Size5]: "fctrd--csm-size-5",
  [Spacings.Size6]: "fctrd--csm-size-6",
  [Spacings.Size7]: "fctrd--csm-size-7",
  [Spacings.Size8]: "fctrd--csm-size-8",
  [Spacings.Size9]: "fctrd--csm-size-9",
  [Spacings.Auto]: "fctrd--csm-size-auto",
};
export const MARGIN_TOP_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csmt-size-0",
  [Spacings.Size1]: "fctrd--csmt-size-1",
  [Spacings.Size2]: "fctrd--csmt-size-2",
  [Spacings.Size3]: "fctrd--csmt-size-3",
  [Spacings.Size4]: "fctrd--csmt-size-4",
  [Spacings.Size5]: "fctrd--csmt-size-5",
  [Spacings.Size6]: "fctrd--csmt-size-6",
  [Spacings.Size7]: "fctrd--csmt-size-7",
  [Spacings.Size8]: "fctrd--csmt-size-8",
  [Spacings.Size9]: "fctrd--csmt-size-9",
  [Spacings.Auto]: "fctrd--csmt-size-auto",
};
export const MARGIN_BOTTOM_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csmb-size-0",
  [Spacings.Size1]: "fctrd--csmb-size-1",
  [Spacings.Size2]: "fctrd--csmb-size-2",
  [Spacings.Size3]: "fctrd--csmb-size-3",
  [Spacings.Size4]: "fctrd--csmb-size-4",
  [Spacings.Size5]: "fctrd--csmb-size-5",
  [Spacings.Size6]: "fctrd--csmb-size-6",
  [Spacings.Size7]: "fctrd--csmb-size-7",
  [Spacings.Size8]: "fctrd--csmb-size-8",
  [Spacings.Size9]: "fctrd--csmb-size-9",
  [Spacings.Auto]: "fctrd--csmb-size-auto",
};
export const MARGIN_LEFT_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csml-size-0",
  [Spacings.Size1]: "fctrd--csml-size-1",
  [Spacings.Size2]: "fctrd--csml-size-2",
  [Spacings.Size3]: "fctrd--csml-size-3",
  [Spacings.Size4]: "fctrd--csml-size-4",
  [Spacings.Size5]: "fctrd--csml-size-5",
  [Spacings.Size6]: "fctrd--csml-size-6",
  [Spacings.Size7]: "fctrd--csml-size-7",
  [Spacings.Size8]: "fctrd--csml-size-8",
  [Spacings.Size9]: "fctrd--csml-size-9",
  [Spacings.Auto]: "fctrd--csml-size-auto",
};
export const MARGIN_RIGHT_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csmr-size-0",
  [Spacings.Size1]: "fctrd--csmr-size-1",
  [Spacings.Size2]: "fctrd--csmr-size-2",
  [Spacings.Size3]: "fctrd--csmr-size-3",
  [Spacings.Size4]: "fctrd--csmr-size-4",
  [Spacings.Size5]: "fctrd--csmr-size-5",
  [Spacings.Size6]: "fctrd--csmr-size-6",
  [Spacings.Size7]: "fctrd--csmr-size-7",
  [Spacings.Size8]: "fctrd--csmr-size-8",
  [Spacings.Size9]: "fctrd--csmr-size-9",
  [Spacings.Auto]: "fctrd--csmr-size-auto",
};
export const PADDING_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--csp-size-0",
  [Spacings.Size1]: "fctrd--csp-size-1",
  [Spacings.Size2]: "fctrd--csp-size-2",
  [Spacings.Size3]: "fctrd--csp-size-3",
  [Spacings.Size4]: "fctrd--csp-size-4",
  [Spacings.Size5]: "fctrd--csp-size-5",
  [Spacings.Size6]: "fctrd--csp-size-6",
  [Spacings.Size7]: "fctrd--csp-size-7",
  [Spacings.Size8]: "fctrd--csp-size-8",
  [Spacings.Size9]: "fctrd--csp-size-9",
};
export const PADDING_TOP_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--cspt-size-0",
  [Spacings.Size1]: "fctrd--cspt-size-1",
  [Spacings.Size2]: "fctrd--cspt-size-2",
  [Spacings.Size3]: "fctrd--cspt-size-3",
  [Spacings.Size4]: "fctrd--cspt-size-4",
  [Spacings.Size5]: "fctrd--cspt-size-5",
  [Spacings.Size6]: "fctrd--cspt-size-6",
  [Spacings.Size7]: "fctrd--cspt-size-7",
  [Spacings.Size8]: "fctrd--cspt-size-8",
  [Spacings.Size9]: "fctrd--cspt-size-9",
  [Spacings.Auto]: "fctrd--cspt-size-auto",
};
export const PADDING_BOTTOM_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--cspb-size-0",
  [Spacings.Size1]: "fctrd--cspb-size-1",
  [Spacings.Size2]: "fctrd--cspb-size-2",
  [Spacings.Size3]: "fctrd--cspb-size-3",
  [Spacings.Size4]: "fctrd--cspb-size-4",
  [Spacings.Size5]: "fctrd--cspb-size-5",
  [Spacings.Size6]: "fctrd--cspb-size-6",
  [Spacings.Size7]: "fctrd--cspb-size-7",
  [Spacings.Size8]: "fctrd--cspb-size-8",
  [Spacings.Size9]: "fctrd--cspb-size-9",
  [Spacings.Auto]: "fctrd--cspb-size-auto",
};
export const PADDING_LEFT_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--cspl-size-0",
  [Spacings.Size1]: "fctrd--cspl-size-1",
  [Spacings.Size2]: "fctrd--cspl-size-2",
  [Spacings.Size3]: "fctrd--cspl-size-3",
  [Spacings.Size4]: "fctrd--cspl-size-4",
  [Spacings.Size5]: "fctrd--cspl-size-5",
  [Spacings.Size6]: "fctrd--cspl-size-6",
  [Spacings.Size7]: "fctrd--cspl-size-7",
  [Spacings.Size8]: "fctrd--cspl-size-8",
  [Spacings.Size9]: "fctrd--cspl-size-9",
  [Spacings.Auto]: "fctrd--cspl-size-auto",
};
export const PADDING_RIGHT_CLASSES: ClassType = {
  [Spacings.Size0]: "fctrd--cspr-size-0",
  [Spacings.Size1]: "fctrd--cspr-size-1",
  [Spacings.Size2]: "fctrd--cspr-size-2",
  [Spacings.Size3]: "fctrd--cspr-size-3",
  [Spacings.Size4]: "fctrd--cspr-size-4",
  [Spacings.Size5]: "fctrd--cspr-size-5",
  [Spacings.Size6]: "fctrd--cspr-size-6",
  [Spacings.Size7]: "fctrd--cspr-size-7",
  [Spacings.Size8]: "fctrd--cspr-size-8",
  [Spacings.Size9]: "fctrd--cspr-size-9",
  [Spacings.Auto]: "fctrd--cspr-size-auto",
};
export const MEDIA_SIZES: ClassType = {
  [MediaSizes.Mobile]: "mq--mxw-mobile",
  [MediaSizes.SmallTablet]: "mq--mxw-smalltablet",
  [MediaSizes.Tablet]: "mq--mxw-tablet",
  [MediaSizes.BigTablet]: "mq--mxw-bigtablet",
  [MediaSizes.HalfScreen]: "mq--mxw-halfscreen",
  [MediaSizes.Laptop]: "mq--mxw-laptop",
  [MediaSizes.Large]: "mq--mxw-large",
  [MediaSizes.Extra]: "mq--mxw-extra",
};

export const BOX_SHADOW_CLASSES: ClassType = {
  [BoxShadows.Size0]: "fctrd--cboxs-0",
  [BoxShadows.Size1]: "fctrd--cboxs-1",
  [BoxShadows.Size2]: "fctrd--cboxs-2",
  [BoxShadows.Size3]: "fctrd--cboxs-3",
  [BoxShadows.Size4]: "fctrd--cboxs-4",
  [BoxShadows.Size5]: "fctrd--cboxs-5",
  [BoxShadows.Size6]: "fctrd--cboxs-6",
};

// border
export const BORDER_RADIUS_CLASSES: ClassType = {
  [Radiuses.Size0]: "fctrd--bdr-radius-0",
  [Radiuses.Size1]: "fctrd--bdr-radius-1",
  [Radiuses.Size2]: "fctrd--bdr-radius-2",
  [Radiuses.Size3]: "fctrd--bdr-radius-3",
  [Radiuses.Size4]: "fctrd--bdr-radius-4",
  [Radiuses.Size5]: "fctrd--bdr-radius-5",
  [Radiuses.Size6]: "fctrd--bdr-radius-6",
  [Radiuses.Size7]: "fctrd--bdr-radius-7",
  [Radiuses.Size8]: "fctrd--bdr-radius-8",
  [Radiuses.Size9]: "fctrd--bdr-radius-9",
};
export const BORDER_TOP_LEFT_RADIUS_CLASSES: ClassType = {
  [Radiuses.Size0]: "fctrd--bdr-top-left-radius-0",
  [Radiuses.Size1]: "fctrd--bdr-top-left-radius-1",
  [Radiuses.Size2]: "fctrd--bdr-top-left-radius-2",
  [Radiuses.Size3]: "fctrd--bdr-top-left-radius-3",
  [Radiuses.Size4]: "fctrd--bdr-top-left-radius-4",
  [Radiuses.Size5]: "fctrd--bdr-top-left-radius-5",
  [Radiuses.Size6]: "fctrd--bdr-top-left-radius-6",
  [Radiuses.Size7]: "fctrd--bdr-top-left-radius-7",
  [Radiuses.Size8]: "fctrd--bdr-top-left-radius-8",
  [Radiuses.Size9]: "fctrd--bdr-top-left-radius-9",
};
export const BORDER_TOP_RIGHT_RADIUS_CLASSES: ClassType = {
  [Radiuses.Size0]: "fctrd--bdr-top-right-radius-0",
  [Radiuses.Size1]: "fctrd--bdr-top-right-radius-1",
  [Radiuses.Size2]: "fctrd--bdr-top-right-radius-2",
  [Radiuses.Size3]: "fctrd--bdr-top-right-radius-3",
  [Radiuses.Size4]: "fctrd--bdr-top-right-radius-4",
  [Radiuses.Size5]: "fctrd--bdr-top-right-radius-5",
  [Radiuses.Size6]: "fctrd--bdr-top-right-radius-6",
  [Radiuses.Size7]: "fctrd--bdr-top-right-radius-7",
  [Radiuses.Size8]: "fctrd--bdr-top-right-radius-8",
  [Radiuses.Size9]: "fctrd--bdr-top-right-radius-9",
};
export const BORDER_BOTTOM_LEFT_RADIUS_CLASSES: ClassType = {
  [Radiuses.Size0]: "fctrd--bdr-bottom-left-radius-0",
  [Radiuses.Size1]: "fctrd--bdr-bottom-left-radius-1",
  [Radiuses.Size2]: "fctrd--bdr-bottom-left-radius-2",
  [Radiuses.Size3]: "fctrd--bdr-bottom-left-radius-3",
  [Radiuses.Size4]: "fctrd--bdr-bottom-left-radius-4",
  [Radiuses.Size5]: "fctrd--bdr-bottom-left-radius-5",
  [Radiuses.Size6]: "fctrd--bdr-bottom-left-radius-6",
  [Radiuses.Size7]: "fctrd--bdr-bottom-left-radius-7",
  [Radiuses.Size8]: "fctrd--bdr-bottom-left-radius-8",
  [Radiuses.Size9]: "fctrd--bdr-bottom-left-radius-9",
};
export const BORDER_BOTTOM_RIGHT_RADIUS_CLASSES: ClassType = {
  [Radiuses.Size0]: "fctrd--bdr-bottom-right-radius-0",
  [Radiuses.Size1]: "fctrd--bdr-bottom-right-radius-1",
  [Radiuses.Size2]: "fctrd--bdr-bottom-right-radius-2",
  [Radiuses.Size3]: "fctrd--bdr-bottom-right-radius-3",
  [Radiuses.Size4]: "fctrd--bdr-bottom-right-radius-4",
  [Radiuses.Size5]: "fctrd--bdr-bottom-right-radius-5",
  [Radiuses.Size6]: "fctrd--bdr-bottom-right-radius-6",
  [Radiuses.Size7]: "fctrd--bdr-bottom-right-radius-7",
  [Radiuses.Size8]: "fctrd--bdr-bottom-right-radius-8",
  [Radiuses.Size9]: "fctrd--bdr-bottom-right-radius-9",
};
export const BORDER_STYLE_CLASSES: ClassType = {
  [BorderStyles.None]: "fctrd--bdr-style-none",
  [BorderStyles.Hidden]: "fctrd--bdr-style-hidden",
  [BorderStyles.Dotted]: "fctrd--bdr-style-dotted",
  [BorderStyles.Dashed]: "fctrd--bdr-style-dashed",
  [BorderStyles.Solid]: "fctrd--bdr-style-solid",
  [BorderStyles.Double]: "fctrd--bdr-style-double",
  [BorderStyles.Groove]: "fctrd--bdr-style-groove",
  [BorderStyles.Ridge]: "fctrd--bdr-style-ridge",
  [BorderStyles.Inset]: "fctrd--bdr-style-inset",
  [BorderStyles.Outset]: "fctrd--bdr-style-outset",
};
export const BORDER_LEFT_STYLE_CLASSES: ClassType = {
  [BorderStyles.None]: "fctrd--bdr-lf-style-none",
  [BorderStyles.Hidden]: "fctrd--bdr-lf-style-hidden",
  [BorderStyles.Dotted]: "fctrd--bdr-lf-style-dotted",
  [BorderStyles.Dashed]: "fctrd--bdr-lf-style-dashed",
  [BorderStyles.Solid]: "fctrd--bdr-lf-style-solid",
  [BorderStyles.Double]: "fctrd--bdr-lf-style-double",
  [BorderStyles.Groove]: "fctrd--bdr-lf-style-groove",
  [BorderStyles.Ridge]: "fctrd--bdr-lf-style-ridge",
  [BorderStyles.Inset]: "fctrd--bdr-lf-style-inset",
  [BorderStyles.Outset]: "fctrd--bdr-lf-style-outset",
};
export const BORDER_RIGHT_STYLE_CLASSES: ClassType = {
  [BorderStyles.None]: "fctrd--bdr-rg-style-none",
  [BorderStyles.Hidden]: "fctrd--bdr-rg-style-hidden",
  [BorderStyles.Dotted]: "fctrd--bdr-rg-style-dotted",
  [BorderStyles.Dashed]: "fctrd--bdr-rg-style-dashed",
  [BorderStyles.Solid]: "fctrd--bdr-rg-style-solid",
  [BorderStyles.Double]: "fctrd--bdr-rg-style-double",
  [BorderStyles.Groove]: "fctrd--bdr-rg-style-groove",
  [BorderStyles.Ridge]: "fctrd--bdr-rg-style-ridge",
  [BorderStyles.Inset]: "fctrd--bdr-rg-style-inset",
  [BorderStyles.Outset]: "fctrd--bdr-rg-style-outset",
};
export const BORDER_TOP_STYLE_CLASSES: ClassType = {
  [BorderStyles.None]: "fctrd--bdr-tp-style-none",
  [BorderStyles.Hidden]: "fctrd--bdr-tp-style-hidden",
  [BorderStyles.Dotted]: "fctrd--bdr-tp-style-dotted",
  [BorderStyles.Dashed]: "fctrd--bdr-tp-style-dashed",
  [BorderStyles.Solid]: "fctrd--bdr-tp-style-solid",
  [BorderStyles.Double]: "fctrd--bdr-tp-style-double",
  [BorderStyles.Groove]: "fctrd--bdr-tp-style-groove",
  [BorderStyles.Ridge]: "fctrd--bdr-tp-style-ridge",
  [BorderStyles.Inset]: "fctrd--bdr-tp-style-inset",
  [BorderStyles.Outset]: "fctrd--bdr-tp-style-outset",
};
export const BORDER_BOTTOM_STYLE_CLASSES: ClassType = {
  [BorderStyles.None]: "fctrd--bdr-bt-style-none",
  [BorderStyles.Hidden]: "fctrd--bdr-bt-style-hidden",
  [BorderStyles.Dotted]: "fctrd--bdr-bt-style-dotted",
  [BorderStyles.Dashed]: "fctrd--bdr-bt-style-dashed",
  [BorderStyles.Solid]: "fctrd--bdr-bt-style-solid",
  [BorderStyles.Double]: "fctrd--bdr-bt-style-double",
  [BorderStyles.Groove]: "fctrd--bdr-bt-style-groove",
  [BorderStyles.Ridge]: "fctrd--bdr-bt-style-ridge",
  [BorderStyles.Inset]: "fctrd--bdr-bt-style-inset",
  [BorderStyles.Outset]: "fctrd--bdr-bt-style-outset",
};

export const BORDER_WIDTH_CLASSES: ClassType = {
  [BorderWidths.Size0]: "fctrd--bdr-wd-s-0",
  [BorderWidths.Size1]: "fctrd--bdr-wd-s-1",
  [BorderWidths.Size2]: "fctrd--bdr-wd-s-2",
  [BorderWidths.Size3]: "fctrd--bdr-wd-s-3",
  [BorderWidths.Size4]: "fctrd--bdr-wd-s-4",
  [BorderWidths.Size5]: "fctrd--bdr-wd-s-5",
  [BorderWidths.Size6]: "fctrd--bdr-wd-s-6",
  [BorderWidths.Size7]: "fctrd--bdr-wd-s-7",
};

export const BOX_SIZING_CLASSES: ClassType = {
  [BoxSizings.ContentBox]: "fctrd--bsz-content",
  [BoxSizings.BorderBox]: "fctrd--bsz-border",
};

export const POSITION_TOP_CLASSES: ClassType = {
  [Positions.Size0]: "fctrd--pos-t-s0",
  [Positions.Size1]: "fctrd--pos-t-s1",
  [Positions.Size2]: "fctrd--pos-t-s2",
  [Positions.Size3]: "fctrd--pos-t-s3",
  [Positions.Size4]: "fctrd--pos-t-s4",
  [Positions.Size5]: "fctrd--pos-t-s5",
  [Positions.Size6]: "fctrd--pos-t-s6",
  [Positions.Size7]: "fctrd--pos-t-s7",
  [Positions.Size8]: "fctrd--pos-t-s8",
  [Positions.Size9]: "fctrd--pos-t-s9",
};
export const POSITION_BOTTOM_CLASSES: ClassType = {
  [Positions.Size0]: "fctrd--pos-b-s0",
  [Positions.Size1]: "fctrd--pos-b-s1",
  [Positions.Size2]: "fctrd--pos-b-s2",
  [Positions.Size3]: "fctrd--pos-b-s3",
  [Positions.Size4]: "fctrd--pos-b-s4",
  [Positions.Size5]: "fctrd--pos-b-s5",
  [Positions.Size6]: "fctrd--pos-b-s6",
  [Positions.Size7]: "fctrd--pos-b-s7",
  [Positions.Size8]: "fctrd--pos-b-s8",
  [Positions.Size9]: "fctrd--pos-b-s9",
};
export const POSITION_LEFT_CLASSES: ClassType = {
  [Positions.Size0]: "fctrd--pos-l-s0",
  [Positions.Size1]: "fctrd--pos-l-s1",
  [Positions.Size2]: "fctrd--pos-l-s2",
  [Positions.Size3]: "fctrd--pos-l-s3",
  [Positions.Size4]: "fctrd--pos-l-s4",
  [Positions.Size5]: "fctrd--pos-l-s5",
  [Positions.Size6]: "fctrd--pos-l-s6",
  [Positions.Size7]: "fctrd--pos-l-s7",
  [Positions.Size8]: "fctrd--pos-l-s8",
  [Positions.Size9]: "fctrd--pos-l-s9",
};
export const POSITION_RIGHT_CLASSES: ClassType = {
  [Positions.Size0]: "fctrd--pos-r-s0",
  [Positions.Size1]: "fctrd--pos-r-s1",
  [Positions.Size2]: "fctrd--pos-r-s2",
  [Positions.Size3]: "fctrd--pos-r-s3",
  [Positions.Size4]: "fctrd--pos-r-s4",
  [Positions.Size5]: "fctrd--pos-r-s5",
  [Positions.Size6]: "fctrd--pos-r-s6",
  [Positions.Size7]: "fctrd--pos-r-s7",
  [Positions.Size8]: "fctrd--pos-r-s8",
  [Positions.Size9]: "fctrd--pos-r-s9",
};
export const ELEMENT_RESIZE_CLASSES = {
  [ElementResizes.None]: "fctrd--resize-none",
  [ElementResizes.Both]: "fctrd--resize-both",
  [ElementResizes.Horizontal]: "fctrd--resize-horizontal",
  [ElementResizes.Vertical]: "fctrd--resize-vertical",
};
export const TEXT_ALIGN_CLASSES = {
  [TextAligns.Start]: "fctrd--txt-al-st",
  [TextAligns.End]: "fctrd--txt-al-en",
  [TextAligns.Center]: "fctrd--txt-al-ct",
  [TextAligns.Justify]: "fctrd--txt-al-js",
};
export const FONT_SIZE_CLASSES: ClassType = {
  [FontSizes.Size1]: "font-size-1", //smallest
  [FontSizes.Size2]: "font-size-2",
  [FontSizes.Size3]: "font-size-3",
  [FontSizes.Size4]: "font-size-4",
  [FontSizes.Size5]: "font-size-5",
  [FontSizes.Size6]: "font-size-6",
  [FontSizes.Size7]: "font-size-7",
  [FontSizes.Size8]: "font-size-8",
  [FontSizes.Size9]: "font-size-9",
  [FontSizes.Size10]: "font-size-10", //largest
};
export const FONT_WEIGHT_CLASSES = {
  [FontWeights.Size1]: "font-wg-size-1",
  [FontWeights.Size2]: "font-wg-size-2",
  [FontWeights.Size3]: "font-wg-size-3",
  [FontWeights.Size4]: "font-wg-size-4",
  [FontWeights.Size5]: "font-wg-size-5",
  [FontWeights.Size6]: "font-wg-size-6",
};
export const FONT_STYLE_CLASSES = {
  [FontStyles.Normal]: "font--st-norm",
  [FontStyles.Italic]: "font--st-ital",
};
export const FONT_FAMILY_CLASSES = {
  [FontFamilies.Default]: "font--fm-def",
};

export const CURSOR_CLASSES: ClassType = {
  [Cursors.Auto]: "fctrd--curs--auto",
  [Cursors.Default]: "fctrd--curs--default",
  [Cursors.Pointer]: "fctrd--curs--pointer",
  [Cursors.ContextMenu]: "fctrd--curs--context-menu",
  [Cursors.Help]: "fctrd--curs--help",
  [Cursors.Progress]: "fctrd--curs--progress",
  [Cursors.Wait]: "fctrd--curs--wait",
  [Cursors.Cell]: "fctrd--curs--cell",
  [Cursors.Crosshair]: "fctrd--curs--crosshair",
  [Cursors.Text]: "fctrd--curs--text",
  [Cursors.VerticalText]: "fctrd--curs--vertical-text",
  [Cursors.Alias]: "fctrd--curs--alias",
  [Cursors.Copy]: "fctrd--curs--copy",
  [Cursors.Move]: "fctrd--curs--move",
  [Cursors.NoDrop]: "fctrd--curs--no-drop",
  [Cursors.NotAllowed]: "fctrd--curs--not-allowed",
  [Cursors.Grab]: "fctrd--curs--grab",
  [Cursors.Grabbing]: "fctrd--curs--grabbing",
  [Cursors.ZoomIn]: "fctrd--curs--zoom-in",
  [Cursors.ZoomOut]: "fctrd--curs--zoom-out",
};
