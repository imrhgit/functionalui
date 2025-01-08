import React from "react";
import type { ReactNode } from "react";

interface P {
	children: ReactNode;
	vertical?: boolean;
}

const Stack = ({ children, vertical }: P) => {
	return <div className={`${vertical ? "vertical" : ""}`}>{children}</div>;
};

export default Stack;
