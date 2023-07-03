// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name" : "My set", 
	"cardId" : 7
}

test('Response body creates a kit with name My set', async () => {
	let actualResponseBody; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody),
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect (actualResponseBody.name).toBe("My set");
});

test('Response body creates a kit', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});