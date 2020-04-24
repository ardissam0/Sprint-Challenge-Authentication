const request = require('supertest');

const server = require('./server.js');

describe('server', function() {
    it('runs test', function() {
        expect(true).toBe(true)
    })

    describe('GET /', function() {
        it('return 200', function() {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })
    })
});