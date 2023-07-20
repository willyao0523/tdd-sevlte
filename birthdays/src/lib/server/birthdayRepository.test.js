import { describe, it, expect, beforeEach } from 'vitest';
import { createBirthday } from 'src/factories/birthday';
import { addNew, clear, getAll, replace } from './birthdayRepository';

describe('birthdayRepository', () => {
	beforeEach(clear);

	const storedId = () => getAll()[0].id;

	it('is initially empty', () => {
		expect(getAll()).toHaveLength(0);
	});

	describe('addNew', () => {
		it('adds a new birthday into the list', () => {
			addNew(createBirthday('Zeus', '2009-02-02'));
			expect(getAll()).toContainEqual(
				expect.objectContaining({
					name: 'Zeus',
					dob: '2009-02-02'
				})
			);
		});
		it('saves unique ids onto each new birthday', () => {
			const birthday = createBirthday('Zeus', '2009-02-02');
			addNew(birthday);
			addNew(birthday);
			expect(getAll()[0].id).not.toEqual(getAll()[1].id);
		});
		it('returns the added birthday with its id', () => {
			expect(addNew(createBirthday('Zeus', '2009-02-02'))).toEqual({
				id: storedId(),
				name: 'Zeus',
				dob: '2009-02-02'
			});
		});
		describe('validation error', () => {
			describe('when the name is not provided', () => {
				let result;
				beforeEach(() => {
					result = addNew(createBirthday('', '1991-05-06'));
				});
				it('does not save the birthday', () => {
					expect(getAll()).toHaveLength(0);
				});
				it('returns an error', () => {
					expect(result).toEqual({
						error: 'Please provide a name.'
					});
				});
			});
			describe('when the date of birth in the right format', () => {
				let result;
				beforeEach(() => {
					result = addNew(createBirthday('Hercules', 'unknown'));
				});
				it('does not save the birthday', () => {
					expect(getAll()).toHaveLength(0);
				});
				it('returns an error', () => {
					expect(result).toEqual({
						error: 'Please provide a date of birth in the YYYY-MM-DD format.'
					});
				});
			});
		});
	});

	describe('replace', () => {
		beforeEach(() => {
			addNew(createBirthday('Hercules', '1991-05-06'));
		});
		const storeId = () => getAll()[0].id;

		it('updates an entry that shares the same id', () => {
			replace(storeId(), createBirthday('Zeus Ex', '2007-02-02'));
			expect(getAll()).toHaveLength(1);
			expect(getAll()).toContainEqual({
				id: storeId(),
				name: 'Zeus Ex',
				dob: '2007-02-02'
			});
		});
		it('returns the updated birthday', () => {
			expect(
				replace(storeId(), createBirthday('Zeus Ex', '2007-02-02'))
			).toEqual({
				id: storeId(),
				name: 'Zeus Ex',
				dob: '2007-02-02'
			});
		});
		describe('validation errors', () => {
			describe('when the name is not provided', () => {
				let result;
				beforeEach(() => {
					result = replace(storeId(), createBirthday('', '1991-05-06'));
				});
				it('does not update the birthday', () => {
					expect(getAll()[0].name).toEqual('Hercules');
				});
				it('returns an error', () => {
					expect(result).toEqual({
						error: 'Please provide a name.'
					});
				});
			});
			describe('when the date of birth in the right format', () => {
				let result;
				beforeEach(() => {
					result = replace(storeId(), createBirthday('Hercules', 'unknown'));
				});
				it('does not update the birthday', () => {
					expect(getAll()[0].dob).toEqual('1991-05-06');
				});
				it('returns an error', () => {
					expect(result).toEqual({
						error: 'Please provide a date of birth in the YYYY-MM-DD format.'
					});
				});
			});
			it('returns the id when an empty date for birth is provided', () => {
				expect(
					replace('234', createBirthday('Hercules', '2009-01-02'))
				).toEqual({
					error: 'An unknown ID was provided'
				});
			});
		});
	});
});
