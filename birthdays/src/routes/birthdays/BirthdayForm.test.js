import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BirthdayForm from './BirthdayForm.svelte';

describe('BirthdayForm', () => {
	it('display a form', () => {
		render(BirthdayForm);
		expect(screen.queryByRole('form')).toBeVisible();
	});

	it('has a form method of POST', () => {
		render(BirthdayForm);
		expect(screen.getByRole('form').method).toEqual('post');
	});

	it('display a button to save the form', () => {
		render(BirthdayForm);
		expect(screen.queryByRole('button')).toBeVisible();
	});

	describe('name field', () => {
		it('displays a text field for the contact name', () => {
			render(BirthdayForm);
			const field = screen.queryByLabelText('Name', {
				selector: 'input[type=text]'
			});
			expect(field).toBeVisible();
			expect(field.name).toEqual('name');
		});
	});

	describe('date of birth field', () => {
		it('displays a text field for the date of birth', () => {
			render(BirthdayForm);
			const field = screen.queryByLabelText('Date of birth', {
				selector: 'input[type=text]'
			});
			expect(field).toBeVisible();
			expect(field.name).toEqual('dob');
		});
	});
});
