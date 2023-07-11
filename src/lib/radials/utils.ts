import type { Radial, RadialColor } from '../types';

export const getBackgroundStyle = (circles: Radial[]) => {
	return circles.reduce((str: string, circle: Radial, i) => {
		const comment = i === circles.length - 1 ? ';' : ',';
		const colors = circle.colors.reduce((str: string, color: RadialColor, i) => {
			const comment = i === circle.colors.length - 1 ? '' : ',';
			return str + `${color.value} ${color.stopAt || 0}%${comment}`;
		}, '');

		let { x, y } = circle.position;
		x = x || 0;
		y = y || 0;

		const rule = `radial-gradient(circle at ${x}% ${y}%, ${colors})${comment} `;
		return str + rule;
	}, '');
};
