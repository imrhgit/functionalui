import { useSpring } from "@react-spring/web";
import { Container, Layout, UIcon } from "functionalui";
import {
  Displays,
  FlexAlignItems,
  Sizings,
  Spacings,
  TableHeaderElement,
  TableRowElement,
} from "functionalui/types";
import { FC, useCallback } from "react";

interface P extends TableHeaderElement {
  columnIndex: number;
  setTableRows?: (v?: any) => void;
}
const TableHeaderCell: FC<P> = ({
  headerId,
  element,
  styles,
  sortable = false,
  onClickHeaderCell,
  columnIndex,
  setTableRows,
}) => {
  const handleClickHeaderCell = useCallback(
    (e: any) => {
      if (onClickHeaderCell) {
        onClickHeaderCell(headerId, e);
      }
    },
    [headerId, onClickHeaderCell],
  );

  const handleClickSort = useCallback(() => {
    if (sortable) {
      if (setTableRows) {
        setTableRows((prev: TableRowElement[]) => {
          // sort at index columnIndex
          const _temp: any = [...prev];
          // check to sort by highest or lowest
          try {
            if (
              _temp[0].cells[columnIndex].cellId <
              _temp[_temp.length - 1].cells[columnIndex].cellId
            ) {
              // low , high
              _temp.sort((a: any, b: any) => {
                // high to low
                const _cA = a.cells[columnIndex].cellId;
                const _cB = b.cells[columnIndex].cellId;
                if (_cA < _cB) {
                  return 1;
                }
                if (_cA > _cB) {
                  return -1;
                }
                return 0;
              });
            } else {
              // high , low
              _temp.sort((a: any, b: any) => {
                // low to high
                const _cA = a.cells[columnIndex].cellId;
                const _cB = b.cells[columnIndex].cellId;
                if (_cA < _cB) {
                  return -1;
                }
                if (_cA > _cB) {
                  return 1;
                }
                return 0;
              });
            }
          } catch (error) {
            console.error(error);
            return prev;
          }
          return _temp;
        });
      }
    }
  }, [columnIndex, setTableRows, sortable]);

  const [st, api] = useSpring(() => ({
    opacity: 0,
  }));

  return (
    <Layout
      justifySelf={styles.position.justifySelf}
      alignSelf={styles.position.alignSelf}
      style={{ width: "100%" }}
    >
      <Container
        // mouse events
        onClick={handleClickHeaderCell}
        onMouseEnter={() => {
          api.start({ opacity: 1 });
        }}
        onMouseLeave={() => {
          api.start({ opacity: 0 });
        }}
        // touch events
      >
        <Layout display={Displays.Flex} flexAlignItem={FlexAlignItems.Center}>
          {element}

          {/* sort button */}
          {sortable && (
            <Container marginLeft={Spacings.Size3} style={st}>
              <UIcon
                name="arrow-up"
                size={Sizings.Size3}
                iconAction={() => handleClickSort()}
              />
            </Container>
          )}
        </Layout>
      </Container>
    </Layout>
  );
};

export default TableHeaderCell;
