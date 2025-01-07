import { Spacings } from "functionalui/types";

export enum TagColorSizes {
  Small = 1,
  Medium,
  Big,
  Large,
}
export const TAG_SIZE = {
  [TagColorSizes.Small]: {
    borderRadius: "50%",
    width: 12,
    height: 12,
    margins: {
      marginTop: Spacings.Size1,
      marginBottom: Spacings.Size1,
      marginLeft: Spacings.Size1,
      marginRight: Spacings.Size1,
    },
  },
  [TagColorSizes.Medium]: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    margins: {
      marginTop: Spacings.Size1,
      marginBottom: Spacings.Size1,
      marginLeft: Spacings.Size1,
      marginRight: Spacings.Size1,
    },
  },
  [TagColorSizes.Big]: {
    borderRadius: "50%",
    width: 24,
    height: 24,
    margins: {
      marginTop: Spacings.Size1,
      marginBottom: Spacings.Size1,
      marginLeft: Spacings.Size1,
      marginRight: Spacings.Size1,
    },
  },
  [TagColorSizes.Large]: {
    borderRadius: "50%",
    width: 32,
    height: 32,
    margins: {
      marginTop: Spacings.Size1,
      marginBottom: Spacings.Size1,
      marginLeft: Spacings.Size1,
      marginRight: Spacings.Size1,
    },
  },
};
