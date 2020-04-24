const request = require('supertest');
const server = require('../api/server');
const DB = require('../database/dbConfig');

describe('jokes-router', () => {
    beforeEach(async () => {
        await DB('users').truncate();
    })

    describe('GET /jokes', () => {
        it('returns 401', () => {
            return request(server)
                .get('/api/jokes')
                .then(response => {
                    expect(response.status).toBe(401)
                })
             })
             it('returns JSON', function() {
                return request(server).get('/')
                    .then(res => {
                        expect(res.type).toMatch(/json/i)
                    })
             })
       });
});