// tests/user-dashboard.spec.js
import { test, expect } from '@playwright/test';

test.describe('User Dashboard', () => {
    test.beforeEach(async ({ page }) => {
        // Assuming you have a login mechanism
        await page.goto('http://localhost:3000/login');
        await page.fill('input[name="username"]', 'admin');
        await page.fill('input[name="password"]', 'password');
        await page.click('text="Login"');
        await page.waitForNavigation();
        // Navigate to the dashboard after login
        await page.goto('http://localhost:3000/dashboard');
    });

    test('should load and display users', async ({ page }) => {
        // Check if user list is displayed
        await expect(page.locator('h1')).toHaveText('User Dashboard');
        await expect(page.locator('.user-item')).toHaveCount(5); // Adjust number based on seed data or expected results
    });

    test('should allow adding a new user', async ({ page }) => {
        await page.click('text="Add User"');
        await page.fill('input[name="username"]', 'newuser');
        await page.fill('input[name="email"]', 'newuser@example.com');
        await page.fill('input[name="password"]', 'securepassword');
        await page.click('text="Submit"');
        // Verify the new user appears in the list
        await expect(page.locator('text="newuser"')).toBeVisible();
    });

    test('should allow updating a user', async ({ page }) => {
        await page.click('text="Edit" >> nth=0'); // Clicks the edit button on the first user in the list
        await page.fill('input[name="email"]', 'updateduser@example.com');
        await page.click('text="Update"');
        // Verify the user's email has been updated in the list
        await expect(page.locator('text="updateduser@example.com"')).toBeVisible();
    });

    test('should allow deleting a user', async ({ page }) => {
        await page.click('text="Delete" >> nth=0'); // Clicks the delete button on the first user in the list
        await expect(page.locator('text="User Deleted"')).toBeVisible(); // Assuming there's some notification or removal from the list
    });
});
