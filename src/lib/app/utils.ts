import type { Circle, Color, HSLColor } from './types';

export const getHSLObject = (color: Color): HSLColor => {
	const [h, s, l, _, a] = color.value
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
	return `hsl(${hsl.h}deg ${hsl.s}% ${hsl.l}% / ${hsl.a}%)`;
};

export const getBackgroundStyle = (circles: Circle[]) => {
	return circles.reduce((str: string, circle: Circle, i) => {
		const comment = i === circles.length - 1 ? ';' : ',';
		const colors = circle.colors.reduce((str: string, color: Color, i) => {
			const comment = i === circle.colors.length - 1 ? '' : ',';
			return str + `${color.value} ${color.stopAt}%${comment}`;
		}, '');

		const rule = `radial-gradient(circle at ${circle.position}, ${colors})${comment} `;
		return str + rule;
	}, 'background: ');
};
