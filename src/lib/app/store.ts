import type { Circle } from './types';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';
import { getHSLString } from './utils';
import { browser } from '$app/environment';
import { limit } from '$lib/utils';

const createStore = () => {
	const { subscribe, set, update } = writable<Circle[]>([], (set) => {
		if (browser) {
			const storedItem = localStorage.getItem('last-save');
			if (storedItem) {
				const circles = JSON.parse(storedItem) as Circle[];
				set(circles);
			}
		}
	});

	subscribe((circles) => {
		if (browser) {
			localStorage.setItem('last-save', JSON.stringify(circles));
		}
	});

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

	const move = (id: string, by: -1 | 1) => {
		update((circles) => {
			let prevIndex = circles.findIndex((circle) => circle.id === id);
			if (prevIndex !== undefined) {
				let newIndex = limit(prevIndex + by, 0, circles.length - 1);
				let arr = [...circles];

				let element = arr[prevIndex];
				arr.splice(prevIndex, 1);
				arr.splice(newIndex, 0, element);

				return arr;
			}

			return circles;
		});
	};

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
		move,
		remove
	};
};

export const store = createStore();
