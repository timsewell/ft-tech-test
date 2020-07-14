const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should respond to the GET method with the home page', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text.indexOf('<html>')).toBe(0);
            done();
        });
    });
});

describe('Test the data fetching', () => {
    test('It should fetch data from external URLs', () => {
        request(app).get('/get-data').then(response => {
            expect(response.body.length).toEqual(3);
        });
    });
});