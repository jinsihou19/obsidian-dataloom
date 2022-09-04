import React from "react";
import { CellType } from "src/services/appData/state/types";
import { isValidCellContent } from "src/services/appData/state/utils";

import "./styles.css";
interface Props {
	content: string;
}

export default function DateCell({ content }: Props) {
	if (!isValidCellContent(content, CellType.DATE)) content = "";
	return <div className="NLT__date-cell">{content}</div>;
}
