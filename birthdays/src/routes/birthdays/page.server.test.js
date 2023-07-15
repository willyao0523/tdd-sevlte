import { describe, it, expect } from 'vitest';
import { load, actions } from './+page.server';
import { createFormDataRequest } from '../../factories/formDataRequest';

describe('/birthdays - load', () => {
	it('returns a fixture of two items', () => {
		const result = load();
		expect(result.birthdays).toEqual([
			{ name: 'Hercules', dob: '1994-02-03' },
			{ name: 'Athena', dob: '1990-08-03' }
		]);
	});
});

describe('/birthday - default action', () => {
	it('adds a new birthday into the list', async () => {
		const request = createFormDataRequest({
			name: 'Zeus',
			dob: '2009-06-03'
		});
		await actions.default({ request });
		expect(load().birthdays).toContainEqual(
			expect.objectContaining({
				name: 'Zeus',
				dob: '2009-06-03'
			})
		);
	});
});
