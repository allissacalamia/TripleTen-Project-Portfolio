// eslint-disable-next-line no-undef
const config = require('../config');

const requestBodyCreateKit = {
    "name" : "My set", 
	"cardId" : 7
}
test('Response body creates a kit with name My set', async () => {
	let kitId;
	let actualResponseBody; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreateKit),
		});
		const postResponseBody = await response.json();
		kitId = postResponseBody.id;
	} catch (error) {
		console.error(error);
	}

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		}) 
		const postResponseBody = await response.json();
		actualResponseBody = postResponseBody["ok"];
	} catch (error) {
		console.error(error);
	}
expect(actualResponseBody).toBe[true] 
});

test('Response body deletes the kit', async () => {
	let kitId;
	let actualResponseBody; 
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyCreateKit),
		});
		const postResponseBody = await response.json();
		kitId = postResponseBody.id;
	} catch (error) {
		console.error(error);
	}

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
		actualStatus = response.status; 
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

