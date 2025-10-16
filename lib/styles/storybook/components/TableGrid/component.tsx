import { TableGrid, Text_Span } from "functionalui";
import {
	AlignSelfs,
	JustifySelfs,
	TableHeaderElement,
	TableRowElement,
} from "functionalui/types";

const headerStylesPosition = {
	position: {
		justifySelf: JustifySelfs.Center,
		alignSelf: AlignSelfs.Center,
	},
};
const rowStylesPosition = {
	position: {
		justifySelf: JustifySelfs.Start,
		alignSelf: AlignSelfs.Center,
	},
};
const headers: TableHeaderElement[] = [
	{
		headerId: "title",
		element: <Text_Span>Title</Text_Span>,
		styles: headerStylesPosition,
	},
	{
		headerId: "description",
		element: <Text_Span>Description</Text_Span>,
		styles: headerStylesPosition,
	},
];
const rows: TableRowElement[] = [
	{
		rowId: 1,
		cells: [
			{
				cellId: 1,
				element: <Text_Span>Row one</Text_Span>,
				styles: rowStylesPosition,
			},
			{
				cellId: 1,
				element: <Text_Span>Lorem ipsum is a placeholder</Text_Span>,
				styles: rowStylesPosition,
			},
		],
		hover: true,
	},
	{
		rowId: 1,
		cells: [
			{
				cellId: 1,
				element: <Text_Span>Row two</Text_Span>,
				styles: rowStylesPosition,
			},
			{
				cellId: 1,
				element: <Text_Span>Row two desc</Text_Span>,
				styles: rowStylesPosition,
			},
		],
		hover: true,
	},
];
const Component = () => {
	return (
		<div>
			<TableGrid
				headers={headers}
				rows={rows}
				templateColumns={["minmax(200px, 300px)", "minmax(200px, 300px)"]}
			/>
		</div>
	);
};

export default Component;
