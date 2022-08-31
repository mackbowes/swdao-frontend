export const getTickCount = (min, max) => {
	if (max - min === 0) return 3;
	const gap = Math.pow(10, Math.round(Math.log10((max - min) * 10))) / 100;
	let math = Math.ceil(max / gap) - Math.floor(min / gap);
	while (math > 10) math = math % 2 === 0 ? math / 2 : (math - 1) / 2 + 1;
	return math;
};

export const getDomain = (min, max, minMax) => {
	if (max - min === 0) return minMax ? max + 0.015 : max - 0.015;
	const gap = Math.pow(10, Math.round(Math.log10(max - min))) / 10;
	return minMax ? Math.ceil(max / gap) * gap + gap / 2 : Math.floor(min / gap) * gap - gap / 2;
};

export const getHorizontalPoints = (props, tickCount) => {
	const count = Math.round((tickCount * (props.width - 60)) / props.height);
	const points = [];
	for (let i = 1; i < count; i++) points.push(Math.round((props.width - 60) / count) * i + 60);
	return points;
};

export const tickFormatter = (change) => {
	return Math.round(Math.abs(1 - change) * 10) < 1 && change !== 1
		? ((change - 1) * 100).toFixed(1) + '%'
		: ((change - 1) * 100).toFixed(0) + '%';
};
