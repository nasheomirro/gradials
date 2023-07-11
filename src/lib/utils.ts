export type GetListeners<T> = Extract<keyof T, `on:${string}`>;
export type FilterListeners<T, E extends GetListeners<T> = never> = Omit<
	T,
	Exclude<`on:${string}`, E>
>;

export const limit = (n: number, min: number, max: number) => {
	return n > max ? max : n < min ? min : n;
};
