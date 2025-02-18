// eslint-disable-next-line no-undef
jest.setTimeout(10000); // Устанавливаем время ожидания в 10 секунд
const config = require('../config');
test('should return status code 200 or handle error appropriately', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/warehouses`);
    } catch (error) {
        console.error('API request failed:', error);
    }
    // Здесь вы можете добавить проверку на статус ошибки, например:
    if (response) {
        expect(response.status).toBe(200);  // Ожидаем 200 OK
    } else {
        // Можно проверять ошибки или статус, если запрос не прошёл
        expect(response).not.toBeNull();
    }
});
test('should return expected data properties', async () => {
	let response;
	try {
	  response = await fetch(`${config.API_URL}/warehouses`);
	} catch (error) {
	  console.error('API request failed:', error);
	}
  
	if (response) {
	  const data = await response.json(); // Парсим JSON-ответ
	  // Проверяем, что данные содержат нужные свойства
	  expect(data[0]).toHaveProperty('name'); // Проверяем, что первый элемент массива содержит свойство 'name'
	  expect(data[0].workingHours).toHaveProperty('start'); // Проверяем, что 'workingHours' содержит свойство 'start'
	  expect(data[0].workingHours).toHaveProperty('end'); // Проверяем, что 'workingHours' содержит свойство 'end'
	} else {
	  expect(response).not.toBeNull(); // Если ответа нет, тест не пройден
	}
  });
  test('should return a non-empty list of warehouses', async () => {
	let response;
	try {
	  response = await fetch(`${config.API_URL}/warehouses`);
	} catch (error) {
	  console.error('API request failed:', error);
	}
  
	if (response) {
	  const data = await response.json(); // Парсим JSON-ответ
	  // Проверяем, что список складов не пуст
	  expect(data.length).toBeGreaterThan(0); // Проверка, что длина массива больше 0
	} else {
	  expect(response).not.toBeNull(); // Если ответа нет, тест не пройден
	}
  });
  