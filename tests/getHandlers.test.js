// eslint-disable-next-line no-undef
jest.setTimeout(10000);
const config = require('../config');

test('should return status code 200 or handle error appropriately', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/warehouses`);
    } catch (error) {
        console.error('API request failed:', error);
    }

    expect(response).toBeDefined();
    expect(response?.status).toBe(200);
});

test('should return expected data properties', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/warehouses`);
        data = await response.json();
    } catch (error) {
        console.error('API request failed:', error);
    }

    expect(data).toBeDefined();
    expect(data[0]).toHaveProperty('name');
    expect(data[0].workingHours).toHaveProperty('start');
    expect(data[0].workingHours).toHaveProperty('end');
});

test('should return a non-empty list of warehouses', async () => {
    let response;
    let data;

    try {
        response = await fetch(`${config.API_URL}/warehouses`);
        data = await response.json();
    } catch (error) {
        console.error('API request failed:', error);
    }

    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
});

  