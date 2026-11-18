Qualiswift approved plan: From Excel
Version 3 · SHA-256 48c486064229cfd32e03736abdec4dd53341a79536851b5fe196b48aa1ba0f1b
1. Verify OrangeHRM login page loads correctly
Case ID: TC-001
Story IDs: R001, R002
Preconditions: User has access to the application URL.
1. Navigate to the application URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Step Expected: The OrangeHRM login page is displayed with Username and Password fields and a Login button.
Test Data: URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Expected: The OrangeHRM login page is displayed with Username and Password fields and a Login button.
2. Verify Username and Password fields are editable
Case ID: TC-002
Story IDs: R003, R004
Preconditions: User is on the OrangeHRM login page.
1. Navigate to the OrangeHRM login page.
2. Enter the username '$HRM_USERNAME' in the Username field.
3. Enter the password '$HRM_PASSWORD' in the Password field.
Step Expected: The Username field accepts input '$HRM_USERNAME'. The Password field accepts input and masks the characters.
Test Data: Username: $HRM_USERNAME
Password: $HRM_PASSWORD
Expected: The Username field accepts input '$HRM_USERNAME'. The Password field accepts input and masks the characters.
3. Verify password input is masked
Case ID: TC-003
Story IDs: R004
Preconditions: User is on the OrangeHRM login page.
1. Navigate to the OrangeHRM login page.
2. Enter '$HRM_PASSWORD' in the Password field.
Step Expected: The password characters are masked (not shown in plain text) while being entered.
Test Data: Password: $HRM_PASSWORD
Expected: The password characters are masked (not shown in plain text) while being entered.
4. Verify successful login with valid credentials
Case ID: TC-004
Story IDs: R005, R006
Preconditions: User has valid OrangeHRM demo user account and access to the application URL.
1. Navigate to the OrangeHRM login page.
2. Enter valid username '$HRM_USERNAME'.
3. Enter valid password '$HRM_PASSWORD'.
4. Click the Login button.
Step Expected: User is authenticated successfully and redirected to the OrangeHRM dashboard page which is displayed.
Test Data: Username: $HRM_USERNAME
Password: $HRM_PASSWORD
Expected: User is authenticated successfully and redirected to the OrangeHRM dashboard page which is displayed.
