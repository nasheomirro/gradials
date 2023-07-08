export type HSLColor = {
	h: number;
	s: number;
	l: number;
	a: number;
};

export type Color = {
  value: string;
  stopAt: string;
}

export type Circle = {
	id: string;
	position: string;
	colors: Color[];
};
