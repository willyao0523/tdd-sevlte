import { describe, it, expect } from 'vitest';
import { load } from './+page.server';

describe('/birthdays - load', () => {
	it('returns a fixture of two items', () => {
		const result = load();
		expect(result.birthdays).toEqual([
			{ name: 'Hercules', dob: '1994-02-03' },
			{ name: 'Athena', dob: '1990-08-03' }
		]);
	});
});
