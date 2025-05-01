import { Container, Layout } from "functionalui";
import {
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Radiuses,
  TabMenu,
} from "functionalui/types";
import { useState } from "react";
import useMeasure from "react-use-measure";
import TabsMenu from "./TabsMenu";
import TabsRoom from "./TabsRoom";

type P = {
  tab: number;
  tabMenu: TabMenu[];
  setTab?: (a: number) => void;
};

const Tabs = ({ tabMenu, tab, setTab }: P) => {
  const [activeItem, setActiveItem] = useState(tab || 0);
  const handleSelectTab = (v: number) => {
    setTab && setTab(v);
    setActiveItem(v);
  };
  const [ref, bounds] = useMeasure();
  const tabRoomWidth = bounds.width / tabMenu.length;

  return (
    <Layout
      display={Displays.Flex}
      flexJustifyContent={FlexJustifyContents.Center}
      flexAlignItem={FlexAlignItems.Center}
    >
      <div ref={ref} style={{ boxSizing: "border-box" }}>
        <Container
          borderRadius={Radiuses.Size5}
          // padding={Spacings.Size1}
          bgColor={ColorPalettes.Grey1}
          style={{
            width: "max-content",
            height: "max-content",
            position: "relative",
            zIndex: 9,
          }}
        >
          <Layout
            display={Displays.Grid}
            style={{
              gridTemplateColumns: `repeat(${tabMenu.length}, 1fr)`,
              position: "relative",
            }}
          >
            <TabsRoom
              height={bounds.height}
              width={bounds.width}
              activeItem={activeItem}
              tabRoomWidth={tabRoomWidth}
            />
            {tabMenu.map((menu, idx) => (
              <TabsMenu
                key={idx}
                idx={idx}
                menu={menu}
                active={activeItem === idx}
                setActiveItem={handleSelectTab}
                menuWrapper={menu.menuWrapper}
                route={menu.route}
              />
            ))}
          </Layout>
        </Container>
      </div>
    </Layout>
  );
};

export default Tabs;
