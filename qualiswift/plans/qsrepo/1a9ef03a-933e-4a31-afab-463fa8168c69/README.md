Qualiswift approved plan: RedbusticketBookingset2
Version 8 · SHA-256 6bb74c35fd017e162ce3e2614d9b49bfd2da5a2b4c4e37b1562d9e96c3771219
1. Verify bus ticket search functionality
Case ID: TC-001
Story IDs: 67
1. Verify user is able to click on Source
Step Expected: user should be able to click on Source
Step Test Data: //*[@id="search-div"]/div/div[1]
2. Verify user is able to add source
Step Expected: User should able to add source
Step Test Data: Add source text Pune
Test Data: https://www.redbus.com/
Expected: User should able to add source
2. Add destination
Case ID: TC-002
Story IDs: 67
Preconditions: User is logged into the app.
1. Navigate to destination
Step Expected: user should able to add destination
Step Test Data: //*[@id="search-div"]/div/div[3]
2. Select destination as Mumbai from the destination dropdown or input field.
Step Expected: Mumbai text should get add
Step Test Data: text Mumbai
Test Data: Source: Pune; Destination: Mumbai
Expected: Source should be set to Pune and destination should be set to Mumbai without errors.
3. select date
Case ID: TC-003
Story IDs: 67
1. Open the date picker for journey date and select today's date
Step Expected: User should able to select date
Step Test Data: //*[@id="date-box"]
Test Data: Date picker with various dates
Expected: User should not be able to select any past dates. Today's date and future dates should be selectable.
