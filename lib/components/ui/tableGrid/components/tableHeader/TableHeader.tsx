import { Container, Layout } from "functionalui";
import { Displays, Spacings, TableHeaderElement } from "functionalui/types";
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
    <Container paddingLeft={Spacings.Size1} paddingRight={Spacings.Size1}>
      <Layout
        display={Displays.Grid}
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
    </Container>
  );
};

export default TableHeader;
