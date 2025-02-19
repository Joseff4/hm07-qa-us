// eslint-disable-next-line no-undef
jest.setTimeout(10000);
const config = require('../config');

const requestBody = {
    "productsList": [{"id": 54, "quantity": 5}]
};

test('should return 200 status when creating a product kit', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/kits/3/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        data = await response.json();
    } catch (error) {
        console.error('API request failed:', error.message);
    }

    expect(response).toBeDefined();
    expect(response?.status).toBe(200);  // Исправлено с 201 на 200
    expect(data).toBeDefined();
    expect(data).toHaveProperty('name');
    expect(data.name).toBe('Tastes of Paris');
});

const requestBody2 = {
    "productsList": [{"id": 2, "quantity": 31}]
};

test('should return 400 status if more than 30 products are added to the set.', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/kits/1/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody2)
        });

        data = await response.json();
    } catch (error) {
        console.error('API request failed:', error.message);
    }

    expect(response).toBeDefined();
    expect(response?.status).toBe(400);
    expect(data).toBeDefined();
    expect(data).toHaveProperty('message');
    expect(data.message).toBeDefined();
});


