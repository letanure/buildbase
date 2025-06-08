import { test, expect } from '@playwright/test';

test('homepage UI elements are visible', async ({ page }) => {
  await page.goto('/');

  // Check logo
  const logo = page.getByRole('img', { name: /next\.js logo/i });
  await expect(logo).toBeVisible();

  // Check "Hello world!" and link
  await expect(page.getByText('Hello world!')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Go to the about page' })).toBeVisible();

  // Check edit instruction
  await expect(page.getByText(/Get started by editing/i)).toBeVisible();

  // Check all "Click me" buttons
  const clickMeButtons = await page.getByRole('button', { name: 'Click me' }).all();
  expect(clickMeButtons.length).toBeGreaterThanOrEqual(4);

  // Interact with the first "Click me" button
  await clickMeButtons[0].click();
  // You could add more assertions here if the button triggers a visible result

  // Check footer links
  await expect(page.getByRole('link', { name: /Learn/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Examples/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Go to nextjs\.org/i })).toBeVisible();
});