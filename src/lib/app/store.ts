import type { Circle } from './types';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';
import { getHSLString } from './utils';

const createStore = () => {
	const { subscribe, set, update } = writable<Circle[]>([]);

	const createDefault = (): Circle => ({
		id: nanoid(),
		position: {
      x: 50,
      y: 50
    },
		colors: [
			{
				value: getHSLString({ h: 0, s: 70, l: 50, a: 100 }),
				stopAt: 0
			},
			{
				value: getHSLString({ h: 0, s: 0, l: 0, a: 0 }),
				stopAt: 50
			}
		]
	});

	const add = () => {
		update((circles) => [...circles, createDefault()]);
	};
	const remove = (id: string) => {
		update((circles) => circles.filter((circle) => circle.id !== id));
	};

	return {
		subscribe,
		set,
		add,
		remove
	};
};

export const store = createStore();