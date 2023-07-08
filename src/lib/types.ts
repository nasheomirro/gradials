export type Color = {
	h: number;
	s: number;
	l: number;
	a: number;
};

export type Circle = {
	id: string;
	position: string;
	colors: Color[];
};
