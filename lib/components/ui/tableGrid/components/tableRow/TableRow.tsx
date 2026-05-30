import { Layout } from "functionalui/layout";
import { Displays, TableRowElement } from "functionalui/types";
import { useState } from "react";
import TableRowAnimation from "./TableRowAnimation";
import TableRowCell from "./TableRowCell";
import cstyles from "./styles.module.css";

const TableRow = ({
  rowId,
  templateColumns = [],
  cells = [],
  hover,
  onClickRow,
}: TableRowElement) => {
  const [onHover, setOnHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <TableRowAnimation hover={hover} onHover={onHover} isClicked={isClicked}>
      <Layout
        className={cstyles.gridTableRow}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        onClick={(e) => {
          if (onClickRow) {
            onClickRow(rowId, e);
          }
        }}
        display={Displays.Grid}
        style={{ gridTemplateColumns: templateColumns.join(" ") }}
      >
        {cells.map((item, idx) => (
          <TableRowCell
            key={item.cellId || idx}
            cellId={item.cellId}
            element={item.element}
            styles={item.styles}
            onClickCell={item.onClickCell}
          />
        ))}
      </Layout>
    </TableRowAnimation>
  );
};

export default TableRow;
