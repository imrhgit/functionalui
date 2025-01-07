import { FontSizes } from "functionalui/types";
import { ReactNode } from "react";

export interface FUI__Avatar {
  children: ReactNode;
  name?: string;
  isLoading?: boolean;
  onClick?: (v?: any) => void;
}

export enum AvatarSizes {
  Size1 = 1,
  Size2,
  Size3,
  Size4,
  Size5,
  Size6,
  Size7,
  Size8,
  Size9,
}
export const AVATAR_SIZE = {
  [AvatarSizes.Size1]: { image: 20, fontSize: FontSizes.Size1 },
  [AvatarSizes.Size2]: { image: 32, fontSize: FontSizes.Size2 },
  [AvatarSizes.Size3]: { image: 48, fontSize: FontSizes.Size3 },
  [AvatarSizes.Size4]: { image: 72, fontSize: FontSizes.Size4 },
  [AvatarSizes.Size5]: { image: 96, fontSize: FontSizes.Size5 },
  [AvatarSizes.Size6]: { image: 120, fontSize: FontSizes.Size5 },
  [AvatarSizes.Size7]: { image: 144, fontSize: FontSizes.Size5 },
  [AvatarSizes.Size8]: { image: 168, fontSize: FontSizes.Size5 },
  [AvatarSizes.Size9]: { image: 192, fontSize: FontSizes.Size5 },
};
