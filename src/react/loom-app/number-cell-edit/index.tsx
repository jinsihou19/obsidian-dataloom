import React from "react";

import { usePlaceCursorAtEnd } from "src/shared/hooks";
import { isNumberInput } from "src/shared/match";

import Input from "src/react/shared/input";
import { LoomMenuCloseRequest } from "src/react/shared/menu-provider/types";

interface Props {
	closeRequest: LoomMenuCloseRequest | null;
	value: number | null;
	onChange: (value: number | null) => void;
	onClose: () => void;
}

export default function NumberCellEdit({
	closeRequest,
	value,
	onChange,
	onClose,
}: Props) {
	const initialValue = value?.toString() ?? "";
	const [localValue, setLocalValue] = React.useState(initialValue);
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	usePlaceCursorAtEnd(inputRef, localValue);

	React.useEffect(() => {
		if (closeRequest !== null) {
			if (localValue !== initialValue) {
				onChange(localValue === "" ? null : parseFloat(localValue));
			}
			onClose();
		}
	}, [initialValue, localValue, closeRequest, onClose, onChange]);

	function handleChange(inputValue: string) {
		if (!isNumberInput(inputValue)) return;

		setLocalValue(inputValue);
	}

	return (
		<div className="dataloom-number-cell-edit">
			<Input
				ref={inputRef}
				focusOutline="default"
				inputMode="numeric" //Set input mode so that the keyboard is numeric but selection is still available
				value={localValue}
				onChange={handleChange}
				onBlur={(e) => {
					e.target.classList.add("dataloom-blur--cell");
				}}
			/>
		</div>
	);
}
