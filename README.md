# Sprint 7 project
# Urban Grocers API Testing

## Project Description

This project contains tests for the **Urban Grocers** API. The testing includes verification of **GET, POST, PUT, and DELETE** requests to the API, analyzing response codes, and validating response content. During testing, errors were identified in some API endpoints.

## Technologies Used

- **JavaScript** (Node.js)
- **Jest** (for API testing)
- **fetch API** (for executing HTTP requests)

## Test Structure

Tests are organized by HTTP methods and divided into separate files:

- `getHandlers.test.js` – Testing `GET` requests
- `postHandlers.test.js` – Testing `POST` requests
- `putHandlers.test.js` – Testing `PUT` requests
- `deleteHandlers.test.js` – Testing `DELETE` requests

## Instructions for Running Tests

### 1. Install Dependencies

Before running tests, install dependencies:

```sh
npm install
```

### 2. Run All Tests

To execute all tests, use:

```sh
npx jest
```

### 3. Run a Specific Test

For example, to run only `DELETE` tests:

```sh
npx jest tests/deleteHandlers.test.js
```

## Identified Issues

### 1. PUT Request Error

- **Expected:** When sending invalid data (`price: -1`), the server should return **400 Bad Request**.
- **Received:** The server returns **200 OK**, even though the data is clearly invalid.
- **Possible Cause:** The server does not validate input data before updating the resource.
- **Impact:** This can lead to incorrect or inconsistent data being stored in the system.

### 2. DELETE Request Issue

- **Initially used endpoint** `/api/v1/orders/5` returned **404 Not Found**.
- **Correct endpoint:** `/api/v1/kits/7` (based on documentation), which successfully executes the deletion.

## Conclusion

The tests effectively verify the functionality of the **Urban Grocers** API, but issues were found with error handling (`PUT` does not validate input data). This may require fixes on the API side. If necessary, the tests can be enhanced, for example, by adding additional validation for server responses to incorrect input.

Additionally, in the PUT request tests, we identified a critical issue: when sending invalid data (`price: -1`), the API should reject it with a `400 Bad Request` response. However, it incorrectly accepts the data and responds with `200 OK`. This highlights a **lack of input validation on the API side**, which could cause problems in real-world usage. This issue has been documented in our test suite for future reference and should be addressed by the API developers.
