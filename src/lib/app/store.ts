import type { Circle } from './types';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';

const createStore = () => {
	const { subscribe, set, update } = writable<Circle[]>([]);

	const createDefault = (): Circle => ({
		id: nanoid(),
		position: 'at 50% 50%',
		colors: [
			{
				value: 'hsl(0, 0, 0, 100)',
				stopAt: '0%'
			},
			{
				value: 'hsl(0, 100, 100, 0)',
				stopAt: '50%'
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