import React, { useEffect, useRef } from "react";

import HeaderMenu from "../HeaderMenu";

import "./styles.css";
import {
	useDisableScroll,
	useMenuId,
	usePositionRef,
} from "src/app/services/hooks";
import { useMenu } from "../MenuProvider";

import { CSS_MEASUREMENT_PIXEL_REGEX } from "src/app/services/string/regex";
import { numToPx, pxToNum } from "src/app/services/string/parsers";
import { findCellStyle } from "src/app/services/cellSizing";

interface Props {
	id: string;
	index: number;
	width: string;
	height: string;
	content: string;
	sortName: string;
	type: string;
	isFirstChild: boolean;
	isLastChild: boolean;
	onMoveColumnClick: (id: string, moveRight: boolean) => void;
	onSortSelect: (id: string, type: string, sortName: string) => void;
	onInsertColumnClick: (id: string, insertRight: boolean) => void;
	onTypeSelect: (id: string, type: string) => void;
	onDeleteClick: (id: string) => void;
	onSaveClick: (id: string, content: string) => void;
	onWidthChange: (id: string, width: string) => void;
	onSizeChange: (
		columnIndex: number,
		rowIndex: number,
		width: number,
		height: number
	) => void;
}

export default function EditableTh({
	id,
	index,
	width,
	height,
	content,
	type,
	sortName,
	isFirstChild,
	isLastChild,
	onWidthChange,
	onInsertColumnClick,
	onMoveColumnClick,
	onSortSelect,
	onTypeSelect,
	onDeleteClick,
	onSaveClick,
	onSizeChange,
}: Props) {
	const menuId = useMenuId();
	const { isMenuOpen, openMenu, closeMenu, isMenuRequestingClose } =
		useMenu(menuId);
	const { positionRef, position } = usePositionRef([width]);
	const mouseDownX = useRef(0);
	const isResizing = useRef(false);
	const cellStyle = findCellStyle(width, height);

	useDisableScroll(isMenuOpen);

	useEffect(() => {
		if (isMenuRequestingClose) {
			closeMenu();
		}
	}, [isMenuRequestingClose]);

	useEffect(() => {
		if (position.width !== 0 && position.height !== 0)
			onSizeChange(index, 0, position.width, position.height);
	}, [position.width, position.height, index]);

	function handleHeaderClick(e: React.MouseEvent) {
		if (isResizing.current) return;
		openMenu();
	}

	function handleClose() {
		closeMenu();
	}

	function handleMouseDown(e: React.MouseEvent) {
		mouseDownX.current = e.pageX;
		isResizing.current = true;
	}

	function handleMouseMove(e: MouseEvent) {
		if (width.match(CSS_MEASUREMENT_PIXEL_REGEX)) {
			const oldWidth = pxToNum(width);
			const dist = e.pageX - mouseDownX.current;
			const newWidth = oldWidth + dist;

			//Keep a min-width of 50px
			if (newWidth < 50) return;
			onWidthChange(id, numToPx(newWidth));
		}
	}

	function handleMouseUp() {
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
		setTimeout(() => {
			isResizing.current = false;
		}, 100);
	}

	return (
		<>
			<th
				className="NLT__th NLT__selectable"
				ref={positionRef}
				style={cellStyle}
				onClick={handleHeaderClick}
			>
				<div className="NLT__th-container">
					<div className="NLT__th-content">{content}</div>
					<div className="NLT__th-resize-container">
						<div
							className="NLT__th-resize"
							onMouseDown={(e) => {
								//Prevents drag and drop
								//See: https://stackoverflow.com/questions/704564/disable-drag-and-drop-on-html-elements
								e.preventDefault();
								handleMouseDown(e);
								window.addEventListener(
									"mousemove",
									handleMouseMove
								);
								window.addEventListener(
									"mouseup",
									handleMouseUp
								);
							}}
							onClick={(e) => {
								//Stop propagation so we don't open the header
								e.stopPropagation();
							}}
						/>
					</div>
				</div>
			</th>
			<HeaderMenu
				isOpen={isMenuOpen}
				top={position.top}
				left={position.left}
				id={id}
				menuId={menuId}
				content={content}
				index={index}
				sortName={sortName}
				type={type}
				isFirstChild={isFirstChild}
				isLastChild={isLastChild}
				onOutsideClick={onSaveClick}
				onSortSelect={onSortSelect}
				onMoveColumnClick={onMoveColumnClick}
				onInsertColumnClick={onInsertColumnClick}
				onTypeSelect={onTypeSelect}
				onDeleteClick={onDeleteClick}
				onClose={handleClose}
			/>
		</>
	);
}
