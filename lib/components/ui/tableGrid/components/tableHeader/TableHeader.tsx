import { Layout } from "functionalui";
import { Displays, GridGaps, TableHeaderElement } from "functionalui/types";
import { FC } from "react";
import TableHeaderCell from "./TableHeaderCell";
import cstyles from "./styles.module.css";

interface P {
  headers: TableHeaderElement[];
  templateColumns: string[];
  setTableRows: (v?: any) => void;
}

const TableHeader: FC<P> = ({
  headers = [],
  templateColumns,
  setTableRows,
}) => {
  return (
    <Layout
      display={Displays.Grid}
      gridGap={GridGaps.Size2}
      className={cstyles.gridTableHeader}
      style={{ gridTemplateColumns: templateColumns.join(" ") }}
    >
      {headers.map((item, index) => (
        <TableHeaderCell
          key={item.headerId}
          headerId={item.headerId}
          element={item.element}
          styles={item.styles}
          onClickHeaderCell={item.onClickHeaderCell}
          setTableRows={setTableRows}
          columnIndex={index}
          sortable={item.sortable}
        />
      ))}
    </Layout>
  );
};

export default TableHeader;
