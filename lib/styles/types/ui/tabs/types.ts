import { ComponentType, type ReactNode } from "react";

export interface TabMenu {
  name: string;
  menuWrapper?: ComponentType<any>;
  route?: string;
  path?: string;
  element?: ReactNode;
}
