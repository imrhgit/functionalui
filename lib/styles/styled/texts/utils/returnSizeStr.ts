import { FontSizes } from "functionalui/types"

export default function returnSizeStr(a: FontSizes, b: FontSizes): FontSizes {
  if (a + b > 8) {
    return FontSizes.Size8
  } else if (a + b < 1) {
    return FontSizes.Size1
  } else {
    return a + b
  }
}