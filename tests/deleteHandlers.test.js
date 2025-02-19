// eslint-disable-next-line no-undef
const config = require('../config');

test('Check response status code is 200 for successful DELETE request', async () => {
    let actualStatus;

    try {
        const response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });

        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatus).toBe(200);
});

test('Check DELETE response body contains expected data', async () => {
    let responseBody;

    try {
        const response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });

        responseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(responseBody.ok).toBe(true);
});

