// eslint-disable-next-line no-undef
const config = require('../config');

test('Should get a 200 status code for getting a list of warehouses', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('Response body contains Everything You Need for the list of warehouses', async () => {
	let responseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(responseBody[0].name).toBe("Everything You Need");
});



