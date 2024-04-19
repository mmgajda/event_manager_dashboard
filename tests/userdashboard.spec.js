// tests/user-dashboard.spec.js
import { test, expect } from '@playwright/test';

test.describe('User Dashboard', () => {
    // Login before each test
    // test.beforeEach(async ({ page }) => {
    //     await page.goto('http://localhost:3000/userdashboard');
    //     await page.fill('input[name="username"]', 'admin');
    //     await page.fill('input[name="password"]', 'password');
    //     await page.click('text="Login"');
    //     await page.waitForNavigation();
    //     // Navigate to the dashboard after login
    //     await page.goto('http://localhost:3000/dashboard');
    // });

    // Check if user list is displayed
    test('should load and display users', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('User Dashboard');
        await expect(page.locator('.user-item')).toHaveCount(5);
    });

    // Verify the new user appears in the list
    test('should allow adding a new user', async ({ page }) => {
        await page.click('text="Add User"');
        await page.fill('input[name="username"]', 'newuser');
        await page.fill('input[name="email"]', 'newuser@example.com');
        await page.fill('input[name="password"]', 'securepassword');
        await page.click('text="Submit"');
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
