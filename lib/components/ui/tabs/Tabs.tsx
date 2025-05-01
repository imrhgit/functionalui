import { useSpring } from "@react-spring/web";
import { Container, Layout, Text_Span } from "functionalui";
import {
  BoxShadows,
  BoxSizings,
  ColorPalettes,
  Displays,
  FlexAlignItems,
  FlexJustifyContents,
  Radiuses,
  Spacings,
  TabMenu,
} from "functionalui/types";
import { useState } from "react";
import useMeasure from "react-use-measure";

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
            <TabRoom
              height={bounds.height}
              width={bounds.width}
              activeItem={activeItem}
              tabRoomWidth={tabRoomWidth}
            />
            {tabMenu.map((menu, idx) => (
              <Menu
                key={idx}
                idx={idx}
                menu={menu}
                active={activeItem === idx}
                setActiveItem={handleSelectTab}
              />
            ))}
          </Layout>
        </Container>
      </div>
    </Layout>
  );
};

export default Tabs;

interface TabRoom {
  height: number;
  width: number;
  tabRoomWidth: number;
  activeItem: number;
}
const TabRoom = ({ height, tabRoomWidth, activeItem }: TabRoom) => {
  const [styles, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  api.start({ x: tabRoomWidth * activeItem });
  return (
    <Container
      borderRadius={Radiuses.Size5}
      boxShadow={BoxShadows.Size1}
      // top={PositionTop.Size1} //top: 4,
      // left={PositionLeft.Size1} //left: 4
      // margin={Margins.Size1}
      padding={Spacings.Size1}
      boxSizing={BoxSizings.BorderBox}
      style={{
        position: "absolute",
        height: height,
        width: tabRoomWidth,
        zIndex: 10,
        ...styles,
      }}
    >
      <Container
        borderRadius={Radiuses.Size4}
        bgColor={ColorPalettes.Grey2}
        style={{ width: "100%", height: "100%" }}
      >
        <></>
      </Container>
    </Container>
  );
};

interface MenuProps {
  menu: TabMenu;
  active: boolean;
  setActiveItem: (a: any) => void;
  idx: number;
}
const Menu = ({ menu, setActiveItem, idx }: MenuProps) => {
  const handleClick = () => {
    setActiveItem(idx);
  };

  return (
    <Container
      onClick={() => handleClick()}
      paddingLeft={Spacings.Size3}
      paddingRight={Spacings.Size3}
      paddingTop={Spacings.Size2}
      paddingBottom={Spacings.Size2}
      // margin={Margins.Size1}  //margin: 4px;
      style={{ zIndex: 11, cursor: "pointer", userSelect: "none" }}
    >
      <Layout
        display={Displays.Flex}
        flexJustifyContent={FlexJustifyContents.Center}
        flexAlignItem={FlexAlignItems.Center}
      >
        <Text_Span style={{ zIndex: 12 }}>
          {/* {menu?.path && menu.path !== "" ? <Link to={menu.path} /> : <></>} */}
          {menu.name}
        </Text_Span>
      </Layout>
    </Container>
    // <MenuLink routeTo={menu.path || ""} >
    // </MenuLink>
  );
};
// const MenuLink = ({ routeTo, children }: { routeTo: string, children: React.ReactNode }) => {
//   if (routeTo && routeTo !== "") {
//     return <Link to={routeTo} style={{ backgroundColor: "transparent" }} >{children}</Link>
//   } else return <>{children}</>
// }
