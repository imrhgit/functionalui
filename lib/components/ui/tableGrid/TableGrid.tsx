"use client";

import { FC, ReactNode, useState } from "react";
import { Container, Layout } from "functionalui";
import {
  Displays,
  FlexJustifyContents,
  TableHeaderElement,
  TableRowElement,
} from "functionalui/types";
import TableHeader from "./components/tableHeader/TableHeader";
import TableRow from "./components/tableRow/TableRow";

interface P {
  headers: TableHeaderElement[];
  rows: TableRowElement[];
  templateColumns: string[];
  hover?: boolean;
  emptyPlaceholder?: ReactNode;
}
const TableGrid: FC<P> = ({
  headers = [],
  rows = [],
  templateColumns,
  emptyPlaceholder,
  hover = true,
}) => {
  const [tableRows, setTableRows] = useState<TableRowElement[]>(rows);
  return (
    <Container style={{ flex: 1, width: "100%", maxWidth: "100%" }}>
      <TableHeader
        headers={headers}
        templateColumns={templateColumns}
        setTableRows={setTableRows}
      />
      {tableRows.length !== 0 ? (
        <>
          {tableRows.map((item) => (
            <TableRow
              key={item.rowId}
              rowId={item.rowId}
              templateColumns={templateColumns}
              cells={item.cells}
              hover={hover}
              onClickRow={item.onClickRow}
            />
          ))}
        </>
      ) : emptyPlaceholder ? (
        <Layout
          display={Displays.Flex}
          flexJustifyContent={FlexJustifyContents.Center}
          style={{ width: "100%" }}
        >
          {emptyPlaceholder}
        </Layout>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default TableGrid;
