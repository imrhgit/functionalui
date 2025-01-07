import { Layout } from "functionalui";
import { TableRowElement } from "functionalui/types";
import { FC, useState } from "react";
import TableRowAnimation from "./TableRowAnimation";
import TableRowCell from "./TableRowCell";
import cstyles from "./styles.module.css";

const TableRow: FC<TableRowElement> = ({
  rowId,
  templateColumns = [],
  cells = [],
  hover,
  onClickRow,
}) => {
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
        style={{ gridTemplateColumns: templateColumns.join(" ") }}
      >
        {cells.map((item) => (
          <TableRowCell
            key={item.cellId}
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
