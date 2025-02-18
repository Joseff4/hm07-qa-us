// eslint-disable-next-line no-undef
const config = require('../config');

test('Check response status code is 200 for successful DELETE request', async () => {
    try {
        const response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });

        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
});
test('Check DELETE response body contains expected data', async () => {
    try {
        const response = await fetch(`${config.API_URL}/kits/7`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const responseBody = await response.json();
        expect(responseBody.ok).toBe(true);
    } catch (error) {
        console.error(error);
    }
});
