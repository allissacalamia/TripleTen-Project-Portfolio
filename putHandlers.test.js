// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 175
}

test('Grocery item price changes to 175', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} 
	catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true); 
});

test('Should get a 200 status code when grocery item price changes to 175', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7` , {
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});