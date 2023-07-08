import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

export type Circle = {
	id: string;
	position: string;
	firstColor: {
		value: string;
		stopAt: string;
	};
	secondColor: {
		value: string;
		stopAt: string;
	};
};

const createDefault = (): Circle => ({
	id: nanoid(),
	position: 'at 50% 50%',
	firstColor: {
		value: '#000000',
		stopAt: '0px'
	},
	secondColor: {
		value: 'transparent',
		stopAt: '50%'
	}
});

const createCircles = () => {
	const { subscribe, set, update } = writable<Circle[]>([]);

	function reset() {
		set([]);
	}

	function addCircle() {
		update((circles) => [...circles, createDefault()]);
	}

	function removeCircle(id: string) {
		update((circles) => circles.filter((circle) => circle.id !== id));
	}

	return {
		subscribe,
		set,
		reset,
		addCircle,
		removeCircle
	};
};

export const circles = createCircles();

export const getStyleFromCircles = (circles: Circle[]) => {
	return circles.reduce((str: string, circle: Circle, i) => {
		const comment = i === circles.length - 1 ? ';' : ',';
		const rule = `radial-gradient(circle ${circle.position}, ${circle.firstColor.value} ${circle.firstColor.stopAt}, ${circle.secondColor.value} ${circle.secondColor.stopAt})${comment} `;
		return str + rule;
	}, 'background: ');
};
