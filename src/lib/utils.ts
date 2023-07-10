export type GetListeners<T> = Extract<keyof T, `on:${string}`>;
export type FilterListeners<T, E extends GetListeners<T> = never> = Omit<
	T,
	Exclude<`on:${string}`, E>
>;
