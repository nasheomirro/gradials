import type { Circle, Color, HSLColor } from './types';

export const getHSLObject = (color: Color): HSLColor => {
	let [h, s, l, _, a] = color.value
		.slice(4, -1)
		.split(' ')
		.map((v) => parseFloat(v));

	return {
		h: h || 0,
		s: s || 0,
		l: l || 0,
		a: a || 0
	};
};

export const getHSLString = (hsl: HSLColor) => {
	let { h, s, l, a } = hsl;
	h = h || 0;
	s = s || 0;
	l = l || 0;
	a = a || 0;
	return `hsl(${h}deg ${s}% ${l}% / ${a}%)`;
};

export const getBackgroundStyle = (circles: Circle[]) => {
	return circles.reduce((str: string, circle: Circle, i) => {
		const comment = i === circles.length - 1 ? ';' : ',';
		const colors = circle.colors.reduce((str: string, color: Color, i) => {
			const comment = i === circle.colors.length - 1 ? '' : ',';
			return str + `${color.value} ${color.stopAt || 0}%${comment}`;
		}, '');

		let { x, y } = circle.position;
		x = x || 0;
		y = y || 0;

		const rule = `radial-gradient(circle at ${x}% ${y}%, ${colors})${comment} `;
		return str + rule;
	}, 'background-image: ');
};
