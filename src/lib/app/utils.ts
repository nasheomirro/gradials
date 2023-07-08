import type { Circle, Color } from './types';

export const getBackgroundStyle = (circles: Circle[]) => {
	return circles.reduce((str: string, circle: Circle, i) => {
		const comment = i === circles.length - 1 ? ';' : ',';
		const colors = circle.colors.reduce((str: string, color: Color, i) => {
			const comment = i === circle.colors.length - 1 ? '' : ',';
			return str + `${color.value} ${color.stopAt}${comment}`;
		}, '');

		const rule = `radial-gradient(circle ${circle.position}, ${colors})${comment} `;
		return str + rule;
	}, 'background: ');
};
