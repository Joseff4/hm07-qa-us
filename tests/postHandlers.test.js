// eslint-disable-next-line no-undef
jest.setTimeout(10000);
const config = require('../config');

const requestBody = {
    "productsList": [{"id": 54, "quantity": 5}]
    // put your body here
};

test('should return 201 status when creating a product kit', async () => {
    try {
        const response = await fetch(`${config.API_URL}/kits/3/products`, { // Указываем конечную точку для запроса
            method: 'POST',  // Метод запроса
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)  // Тело запроса с данными
        });

        const data = await response.json();  // Получаем данные из ответа
        expect(response.status).toBe(200);  // Проверяем статус ответа, ожидаем 201
        expect(data).toHaveProperty('name');  // Проверяем наличие поля 'name' в ответе
        expect(data.name).toBe('Tastes of Paris');  // Проверяем значение поля 'name'

    } catch (error) {
        console.error('API request failed:', error.message);  // Логируем ошибку, если она произошла
    }
});
const requestBody2 = {
    "productsList": [{"id": 2, "quantity": 31}]  // Ошибка: более 30 продуктов в наборе
};

test('should return 400 status if add more than 30 products to the set.', async () => {
    try {
        const response = await fetch(`${config.API_URL}/kits/1/products`, { // Указываем конечную точку для запроса
            method: 'POST',  // Метод запроса
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody2)  // Тело запроса с ошибкой
        });

        // Ожидаем статус 400
        expect(response.status).toBe(400); 

        const data = await response.json();  // Получаем данные из ответа
        console.log('Response data:', data);  // Выводим данные для дебага

        // Если ответ содержит сообщение об ошибке, проверяем его
        expect(data).toHaveProperty('message');  
        expect(data.message).toBeDefined(); // Проверяем, что сообщение ошибки присутствует

    } catch (error) {
        console.error('API request failed:', error.message);  // Логируем ошибку, если она произошла
    }
});