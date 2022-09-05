import {
	NUMBER_REGEX,
	TAG_REGEX,
	DATE_REGEX,
	CHECKBOX_REGEX,
	CHECKBOX_CHECKED_REGEX,
} from "src/services/string/regex";

export const isNumber = (input: string): boolean => {
	return (input.match(NUMBER_REGEX) || []).length !== 0;
};

export const isDate = (input: string): boolean => {
	return (input.match(DATE_REGEX) || []).length !== 0;
};

export const isCheckbox = (input: string): boolean => {
	return (input.match(CHECKBOX_REGEX) || []).length !== 0;
};

export const isTag = (input: string): boolean => {
	return (input.match(TAG_REGEX) || []).length !== 0;
};

export const isCheckboxChecked = (input: string): boolean => {
	return (input.match(CHECKBOX_CHECKED_REGEX) || []).length !== 0;
};

/**
 * Checks to see if input string starts and ends with double square brackets
 * @param input The input string
 * @returns Has square brackets or not
 */
export const hasSquareBrackets = (input: string): boolean => {
	if (input.match(/(^\[\[)(.*)(]]$)/)) return true;
	return false;
};
