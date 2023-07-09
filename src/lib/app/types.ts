export type HSLColor = {
	/** must be from 0 - 360 */
	h: number;
	/** must be from 0 - 100 */
	s: number;
	/** must be from 0 - 100 */
	l: number;
	/** must be from 0 - 100 */
	a: number;
};

export type Color = {
	value: string;
	stopAt: number;
};

export type Circle = {
	id: string;
	position: string;
	colors: Color[];
};
