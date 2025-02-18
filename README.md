# Sprint 7 project
Urban Grocers API Testing

Project Description

This project contains tests for the Urban Grocers API. The testing includes verification of GET, POST, PUT, and DELETE requests to the API, analyzing response codes, and validating response content. During testing, errors were identified in some API endpoints.

Technologies Used

JavaScript (Node.js)

Jest (for API testing)

fetch API (for executing HTTP requests)

Test Structure

Tests are organized by HTTP methods and divided into separate files:

`` – Testing GET requests

`` – Testing POST requests

`` – Testing PUT requests

`` – Testing DELETE requests

Instructions for Running Tests

1. Install Dependencies

Before running tests, install dependencies:

npm install

2. Run All Tests

To execute all tests, use:

npx jest

3. Run a Specific Test

For example, to run only DELETE tests:

npx jest tests/deleteHandlers.test.js

Identified Issues

1. PUT Request Error

Expected: When sending invalid data (price: -1), the server should return 400 Bad Request.

Received: The server returns 200 OK, even though the data is clearly invalid.

Possible Cause: The server does not validate input data before updating the resource.

2. DELETE Request Issue

Initially used endpoint /api/v1/orders/5 returned 404 Not Found.

Correct endpoint: /api/v1/kits/7 (based on documentation), which successfully executes the deletion.

Conclusion

The tests effectively verify the functionality of the Urban Grocers API, but issues were found with error handling (PUT does not validate input data). This may require fixes on the API side. If necessary, the tests can be enhanced, for example, by adding additional validation for server responses to incorrect input.
