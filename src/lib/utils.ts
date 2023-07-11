import type { RadialColor, HSLColor } from './types';

export type GetListeners<T> = Extract<keyof T, `on:${string}`>;
export type FilterListeners<T, E extends GetListeners<T> = never> = Omit<
	T,
	Exclude<`on:${string}`, E>
>;

export const limit = (n: number, min: number, max: number) => {
	return n > max ? max : n < min ? min : n;
};

export const getHSLObject = (color: RadialColor): HSLColor => {
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
