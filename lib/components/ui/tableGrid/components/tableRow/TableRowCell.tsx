import { Container, Layout } from "functionalui";
import { TableRowCellElement } from "functionalui/types";
import { FC } from "react";

const TableRowCell: FC<TableRowCellElement> = ({
  cellId,
  element,
  styles,
  onClickCell,
}) => {
  return (
    <Layout
      justifySelf={styles.position.justifySelf}
      alignSelf={styles.position.alignSelf}
    >
      <Container
        /// mouse events
        onClick={(e) => {
          if (onClickCell) {
            onClickCell(cellId, e);
          }
        }}
        // touch events
      >
        {element}
      </Container>
    </Layout>
  );
};

export default TableRowCell;
