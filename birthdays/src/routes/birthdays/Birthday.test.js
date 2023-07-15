import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday', () => {
	const exampleBirthday = {
		name: 'Ares',
		dob: '1997-04-08'
	};

	it('display the name of the person', () => {
		render(Birthday, {
			...exampleBirthday,
			name: 'James'
		});
		expect(screen.queryByText('James')).toBeVisible();
	});

	it('display the date of birth', () => {
		render(Birthday, {
			...exampleBirthday,
			dob: '1994-02-23'
		});
		expect(screen.queryByText('1994-02-23')).toBeVisible();
	});

	it('display the name of another person', () => {
		render(Birthday, {
			...exampleBirthday,
			name: 'Athena'
		});
		expect(screen.queryByText('Athena')).toBeVisible();
	});
});
