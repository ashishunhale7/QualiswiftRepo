Qualiswift approved plan: From Excel
Version 2 · SHA-256 d52938895c44fab5a72b815be8745f22f0723ba9206ff06b350b9cb212f46df6
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
5. Verify error message on login attempt with invalid username
Case ID: TC-005
Story IDs: R007
Preconditions: User has access to the application URL.
1. Navigate to the OrangeHRM login page.
2. Enter invalid username 'InvalidUser'.
3. Enter valid password '$HRM_PASSWORD'.
4. Click the Login button.
Step Expected: Login is prevented and an appropriate error message is displayed indicating invalid credentials.
Test Data: Username: InvalidUser
Password: $HRM_PASSWORD
Expected: Login is prevented and an appropriate error message is displayed indicating invalid credentials.
6. Verify error message on login attempt with invalid password
Case ID: TC-006
Story IDs: R007
Preconditions: User has access to the application URL.
1. Navigate to the OrangeHRM login page.
2. Enter valid username '$HRM_USERNAME'.
3. Enter invalid password 'wrongpass'.
4. Click the Login button.
Step Expected: Login is prevented and an appropriate error message is displayed indicating invalid credentials.
Test Data: Username: $HRM_USERNAME
Password: wrongpass
Expected: Login is prevented and an appropriate error message is displayed indicating invalid credentials.
7. Verify validation when Username field is left blank
Case ID: TC-007
Story IDs: R008
Preconditions: User is on the OrangeHRM login page.
1. Navigate to the OrangeHRM login page.
2. Leave the Username field blank.
3. Enter valid password '$HRM_PASSWORD'.
4. Attempt to submit the login form by clicking Login.
Step Expected: Submission is prevented or a validation message is displayed indicating Username field cannot be blank.
Test Data: Username: 
Password: $HRM_PASSWORD
Expected: Submission is prevented or a validation message is displayed indicating Username field cannot be blank.
8. Verify validation when Password field is left blank
Case ID: TC-008
Story IDs: R008
Preconditions: User is on the OrangeHRM login page.
1. Navigate to the OrangeHRM login page.
2. Enter valid username '$HRM_USERNAME'.
3. Leave the Password field blank.
4. Attempt to submit the login form by clicking Login.
Step Expected: Submission is prevented or a validation message is displayed indicating Password field cannot be blank.
Test Data: Username: $HRM_USERNAME
Password:
Expected: Submission is prevented or a validation message is displayed indicating Password field cannot be blank.
9. Verify validation when both Username and Password fields are left blank
Case ID: TC-009
Story IDs: R008
Preconditions: User is on the OrangeHRM login page.
1. Navigate to the OrangeHRM login page.
2. Leave both Username and Password fields blank.
3. Attempt to submit the login form by clicking Login.
Step Expected: Submission is prevented or validation messages are displayed indicating both fields cannot be blank.
Test Data: Username: 
Password:
Expected: Submission is prevented or validation messages are displayed indicating both fields cannot be blank.
