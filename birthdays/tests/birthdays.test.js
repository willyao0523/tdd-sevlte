import { expect, test } from '@playwright/test';

test('lists all birthdays', async ({ page }) => {
	await page.goto('/birthdays');
	await expect(page.getByText('Hercules')).toBeVisible();
	await expect(page.getByText('Athena')).toBeVisible();
});

test('saves a new birthday', async ({ page }) => {
	await page.goto('/birthdays');
	await page.getByLabel('Name').fill('Persephone');
	await page.getByLabel('Date of birth').fill('1987-09-03');
	await page.getByRole('button').click();
	await expect(page.getByText('Persephone')).toBeVisible();
});
