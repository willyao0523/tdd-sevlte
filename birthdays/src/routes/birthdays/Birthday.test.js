import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Birthday from './Birthday.svelte';
import { createBirthday } from 'src/factories/birthday';

describe('Birthday', () => {
	it('display the name of the person', () => {
		render(Birthday, createBirthday('Hercules', '1996-03-03'));
		expect(screen.queryByText('Hercules')).toBeVisible();
	});

	it('display the date of birth', () => {
		render(Birthday, createBirthday('Athena', '1994-02-02'));
		expect(screen.queryByText('1994-02-02')).toBeVisible();
	});

	it('display the name of another person', () => {
		render(Birthday, createBirthday('Ares', '1996-03-03'));
		expect(screen.queryByText('Ares')).toBeVisible();
	});
});
