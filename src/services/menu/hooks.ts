import { useMemo, useRef, useState } from "react";
import { MenuPosition, Menu, Position, MenuLevel } from "./types";
import { v4 as uuidv4 } from "uuid";

const useMenuPosition = (): MenuPosition => {
	const containerRef = useRef<any | null>(null);

	let position: Position = {
		top: 0,
		left: 0,
		width: 0,
		height: 0,
	};

	if (containerRef.current) {
		const node = containerRef.current as HTMLElement;
		const { top: nodeTop, left: nodeLeft } = node.getBoundingClientRect();
		//We use offsetWidth, and offsetHeight instead of the width and height of the rectangle
		//because we want whole values to match what we set as the column width.
		//This will make sure that the rendered cell and the input cell are the same size
		const { offsetWidth, offsetHeight } = node;
		position = {
			width: offsetWidth,
			height: offsetHeight,
			top: nodeTop,
			left: nodeLeft,
		};
	}

	return { containerRef, position };
};

export const useMenu = (
	level: MenuLevel,
	shouldRequestOnClose = false
): [Menu, MenuPosition] => {
	const menuPosition = useMenuPosition();
	const [id] = useState("m" + uuidv4());

	const menu: Menu = useMemo(() => {
		return { id, level, shouldRequestOnClose };
	}, [id, level, shouldRequestOnClose]);

	return [menu, menuPosition];
};
