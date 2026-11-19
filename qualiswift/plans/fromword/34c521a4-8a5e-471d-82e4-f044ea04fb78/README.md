Qualiswift approved plan: FromWord1
Version 3 · SHA-256 9c532ef4bb7b9a281f6b2d288aa816802c6ff18f608aabd4ddde456e4ce038b7
1. Verify OrangeHRM login page display
Case ID: TC-001
Story IDs: R001
Preconditions: The OrangeHRM application URL is accessible.
1. Open the OrangeHRM application URL in a supported web browser.
Step Expected: OrangeHRM login page is displayed with Username and Password fields and a Login button.
Test Data: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Expected: OrangeHRM login page is displayed with Username and Password fields and a Login button.
2. Verify Username and Password fields accept input
Case ID: TC-002
Story IDs: R002, R003
Preconditions: User is on the OrangeHRM login page.
1. Open the OrangeHRM login page.
2. Enter '$HRM_USERNAME' in the Username field.
3. Enter '$HRM_PASSWORD' in the Password field.
Step Expected: '$HRM_USERNAME' is entered in the Username field and '$HRM_PASSWORD' is entered in the Password field with password characters masked.
Test Data: Username: $HRM_USERNAME; Password: $HRM_PASSWORD
Expected: '$HRM_USERNAME' is entered in the Username field and '$HRM_PASSWORD' is entered in the Password field with password characters masked.
3. Verify successful login with valid credentials
Case ID: TC-004
Story IDs: R005, R006
Preconditions: A valid user account is available for login; application URL is accessible.
1. Open the OrangeHRM login page.
2. Enter valid Username: '$HRM_USERNAME'.
3. Enter valid Password: '$HRM_PASSWORD'.
4. Click the Login button.
Step Expected: User is authenticated and redirected to the application landing page.
Test Data: Username: $HRM_USERNAME; Password: $HRM_PASSWORD
Expected: User is authenticated and redirected to the application landing page.
