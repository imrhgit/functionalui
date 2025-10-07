import { AlignSelfs, JustifySelfs } from "functionalui/types";
import { type ReactNode } from "react";

export interface CellStyles {
  position: {
    justifySelf: JustifySelfs;
    alignSelf: AlignSelfs;
  };
}

export interface TableHeaderElement {
  headerId: string | number;
  element: ReactNode;
  styles: CellStyles;
  onClickHeaderCell?: (v?: string | number, e?: any) => void; // headerId
  sortable?: boolean;
}
export type TableRowCellElement = {
  cellId?: string | number;
  element: ReactNode;
  styles: CellStyles;
  onClickCell?: (v?: string | number, e?: any) => void; // cellId
}
export type TableRowElement = {
  rowId: string | number;
  templateColumns: string[];
  cells: TableRowCellElement[];
  hover: boolean;
  onClickRow?: (v?: string | number, e?: any) => void; // rowId
}
