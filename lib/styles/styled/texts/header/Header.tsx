import { animated } from "@react-spring/web";
import { HeadElementProps } from "functionalui/types";
import { forwardRef } from "react";

export const Header = ({ header, children, ...props }: HeadElementProps) => {
	switch (header) {
		case "h1":
			return <animated.h1 {...props}>{children}</animated.h1>;
		case "h2":
			return <animated.h2 {...props}>{children}</animated.h2>;
		case "h3":
			return <animated.h3 {...props}>{children}</animated.h3>;
		case "h4":
			return <animated.h4 {...props}>{children}</animated.h4>;
		case "h5":
			return <animated.h5 {...props}>{children}</animated.h5>;
		case "h6":
			return <animated.h6 {...props}>{children}</animated.h6>;
		default:
			return <animated.h6 {...props}>{children}</animated.h6>;
	}
};

export const HeaderRef = forwardRef(
	({ header, children, ...props }: HeadElementProps, ref: any) => {
		switch (header) {
			case "h1":
				return (
					<animated.h1 ref={ref} {...props}>
						{children}
					</animated.h1>
				);
			case "h2":
				return (
					<animated.h2 ref={ref} {...props}>
						{children}
					</animated.h2>
				);
			case "h3":
				return (
					<animated.h3 ref={ref} {...props}>
						{children}
					</animated.h3>
				);
			case "h4":
				return (
					<animated.h4 ref={ref} {...props}>
						{children}
					</animated.h4>
				);
			case "h5":
				return (
					<animated.h5 ref={ref} {...props}>
						{children}
					</animated.h5>
				);
			case "h6":
				return (
					<animated.h6 ref={ref} {...props}>
						{children}
					</animated.h6>
				);
			default:
				return (
					<animated.h6 ref={ref} {...props}>
						{children}
					</animated.h6>
				);
		}
	},
);
