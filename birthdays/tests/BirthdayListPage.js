export class BirthdayListPage {
	constructor(page) {
		this.page = page;
	}
	async goto() {
		await this.page.goto('/birthdays');
	}

	dateOfBirthField() {
		return this.page.getByLabel('Date of birth');
	}

	nameField() {
		return this.page.getByLabel('Name');
	}

	saveButton() {
		return this.page.getByRole('button', { name: 'Save' });
	}

	async saveNameAndDateOfBirth(name, dob) {
		await this.nameField().fill(name);
		await this.dateOfBirthField().fill(dob);
		await this.saveButton().click();
	}

	entryFor(name) {
		return this.page.getByRole('listitem').filter({ hasText: name });
	}

	beginEditingFor(name) {
		return this.entryFor(name).getByRole('button', { name: 'Edit' }).click();
	}
}
