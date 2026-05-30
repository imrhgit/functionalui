import { Container } from "functionalui/container";
import { Layout } from "functionalui/layout";
import { Text_Span } from "functionalui/texts/span";
import {
	Displays,
	FlexAlignItems,
	FlexJustifyContents,
	Spacings,
	TabMenu,
} from "functionalui/types";
import { ComponentType, ReactNode } from "react";

interface P {
	menu: TabMenu;
	menuWrapper?: ComponentType<any>;
	route?: string;
	active: boolean;
	setActiveItem: (a: any) => void;
	idx: number;
}
const TabsMenu = ({ menu, setActiveItem, idx, menuWrapper, route }: P) => {
	const handleClick = () => {
		setActiveItem(idx);
	};

	return (
		<MenuWraper Wrapper={menuWrapper} route={route}>
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
		</MenuWraper>
	);
};

export default TabsMenu;

interface MenuWraperProps {
	Wrapper?: ComponentType<any>;
	route?: string;
	children?: ReactNode;
}
function MenuWraper({ Wrapper, route, children }: MenuWraperProps) {
	if (typeof Wrapper !== "undefined") {
		return <Wrapper href={route}>{children}</Wrapper>;
	} else {
		<>{children}</>;
	}
}
// const MenuLink = ({ routeTo, children }: { routeTo: string, children: React.ReactNode }) => {
//   if (routeTo && routeTo !== "") {
//     return <Link to={routeTo} style={{ backgroundColor: "transparent" }} >{children}</Link>
//   } else return <>{children}</>
// }
