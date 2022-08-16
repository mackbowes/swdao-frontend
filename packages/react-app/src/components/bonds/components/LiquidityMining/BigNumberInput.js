import React, { useMemo } from 'react';

const DECIMAL_RE = new RegExp(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/);
export const isValidNumber = (/** @type {string} */ value) => {
	if (value.length === 0) {
		return false;
	}
	return DECIMAL_RE.test(value);
};

export default function BigNumberInput(props) {
	const { onValueChange, decimals, readonly, ...rest } = props;
	const { value } = rest;

	const handleChange = useMemo(
		() => (e) => {
			const { value: tgtValue } = e.target;
			if (tgtValue === '') {
				onValueChange('');
				return;
			}
			if (tgtValue === '.') {
				onValueChange('0.');
				return;
			}
			if (!isValidNumber(tgtValue)) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
			// check for over-long input
			let parts = tgtValue.split('.');
			if (parts.length > 0 && parts[0].length > 1) {
				if (parts[0].length > 9) {
					tgtValue = tgtValue.slice(parts[0].length - 8);
					parts = tgtValue.split('.');
				}
				while (parts[0][0] == '0' && parts[0][1] != '.' && parts[0].length > 1) {
					tgtValue = tgtValue.slice(1);
					parts = tgtValue.split('.');
				}
			}
			if (
				parts.length > 2 ||
				(parts.length > 0 && parts[0].length > 8) ||
				(parts.length === 2 && parts[1].length > decimals)
			) {
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
			try {
				// parse the value - and if successful, call the onValueChange handler
				parseFloat(tgtValue);
				onValueChange(tgtValue);
			} catch (e) {
				// pass
			}
		},
		[onValueChange, value],
	);
	if (readonly) rest['readonly'] = '';
	return (
		<input
			onChange={handleChange}
			style={{
				overflow: `hidden`,
				whiteSpace: `nowrap`,
				textOverflow: `ellipsis`,
			}}
			{...rest}
		/>
	);
}
