import type { Radial, RadialColor } from '../types';

export const getBackgroundStyle = (radials: Radial[]) => {
	return radials.reduce((str: string, radial: Radial, i) => {
		const comment = i === radials.length - 1 ? ';' : ',';
		const colors = radial.colors.reduce((str: string, color: RadialColor, i) => {
			const comment = i === radial.colors.length - 1 ? '' : ',';
			return str + `${color.value} ${color.stopAt || 0}%${comment}`;
		}, '');

    let shape = radial.shape;
		let { x, y } = radial.position;
		x = x || 0;
		y = y || 0;

		const rule = `radial-gradient(${shape} at ${x}% ${y}%, ${colors})${comment} `;
		return str + rule;
	}, '');
};
