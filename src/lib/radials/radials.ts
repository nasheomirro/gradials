import type { Radial } from '../types';
import { nanoid } from 'nanoid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getHSLString, limit } from '$lib/utils';

const createRadials = () => {
	const { subscribe, set, update } = writable<Radial[]>([], (set) => {
		if (browser) {
			const storedItem = localStorage.getItem('last-save');
			if (storedItem) {
				const radials = JSON.parse(storedItem) as Radial[];
				set(radials);
			}
		}
	});

	subscribe((radials) => {
		if (browser) {
			localStorage.setItem('last-save', JSON.stringify(radials));
		}
	});

	const createDefault = (): Radial => ({
		id: nanoid(),
		position: {
			x: 50,
			y: 50
		},
    shape: 'ellipse',
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
		update((radials) => {
			let prevIndex = radials.findIndex((radial) => radial.id === id);
			if (prevIndex !== undefined) {
				let newIndex = limit(prevIndex + by, 0, radials.length - 1);
				let arr = [...radials];

				let element = arr[prevIndex];
				arr.splice(prevIndex, 1);
				arr.splice(newIndex, 0, element);

				return arr;
			}

			return radials;
		});
	};

	const add = () => {
		update((radials) => [...radials, createDefault()]);
	};

	const remove = (id: string) => {
		update((radials) => radials.filter((radial) => radial.id !== id));
	};

	return {
		subscribe,
		set,
		add,
		move,
		remove
	};
};

export const radials = createRadials();
