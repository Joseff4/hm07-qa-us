// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    name: 'Fruit Power Juice - Litchi',
    price: 349,
    weight: 900,
    units: 'ml'
};

test('Check response status code is 200 for successful PUT request', async () => {
    try {
        const response = await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
});
test('Check updated product data with GET request', async () => {
    try {
        await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const getResponse = await fetch(`${config.API_URL}/products/5`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const responseBody = await getResponse.json();
        expect(responseBody.name).toBe('Fruit Power Juice - Litchi');
        expect(responseBody.price).toBe(349);
        expect(responseBody.weight).toBe(900);
        expect(responseBody.units).toBe('ml');
    } catch (error) {
        console.error(error);
    }
});
test('Check error response for invalid data', async () => {
    const invalidRequestBody = { price: -1 };
    try {
        const response = await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(invalidRequestBody)
        });

        expect(response.status).toBe(400);
        const responseBody = await response.json();
        expect(responseBody.error).toBeDefined();
    } catch (error) {
        console.error(error);
    }
});
