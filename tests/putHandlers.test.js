// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    name: 'Fruit Power Juice - Litchi',
    price: 349,
    weight: 900,
    units: 'ml'
};

test('Check response status code is 200 for successful PUT request', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
    } catch (error) {
        console.error(error);
    }
    expect(response.status).toBe(200);
});

test('Check updated product data with GET request', async () => {
    let getResponse;
    try {
        await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        getResponse = await fetch(`${config.API_URL}/products/5`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
    } catch (error) {
        console.error(error);
    }
    const responseBody = await getResponse.json();
    expect(responseBody.name).toBe('Fruit Power Juice - Litchi');
    expect(responseBody.price).toBe(349);
    expect(responseBody.weight).toBe(900);
    expect(responseBody.units).toBe('ml');
});

test('Check error response for invalid data', async () => {
    const invalidRequestBody = { price: -1 };
    let response;
    try {
        response = await fetch(`${config.API_URL}/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(invalidRequestBody)
        });
    } catch (error) {
        console.error(error);
    }
    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.error).toBeDefined();
});

