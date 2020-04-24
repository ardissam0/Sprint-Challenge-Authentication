const request = require("supertest");
const server = require("../api/server.js");
const DB = require("../database/dbConfig.js");

describe('auth-router', () => {
    beforeEach(async () => {
        await DB('users').truncate();
    })

    describe('POST /register', () => {

        it('returns 201 on successful register', () => {
            return request(server)
                .post('/api/auth/register')
                .send({ username: 'test', password: 'test123' })
                .then(response => {
                    expect(response.status).toBe(201)
            })
        })
        it("should return a 500 error for inputing an incomplete password", () => {
            return request(server)
                .post("/api/auth/register")
                .send({ username: 'test2', password: 5})
                .then(response => {
                expect(response.status).toBe(500);
            });
        });
    })

    describe('POST /login', () => {
        it('should return 401 error', () => {
            return request(server)
                .post('/api/auth/login')
                .send({ username: '', password: '' })
                .then(response => {
                    expect(response.status).toBe(401)
                })
        })
        it("should return a 500 error for a numbered password", () => {
            const username = 'username'
            const password = 'password'
            return request(server)
            .post("/api/auth/register")
            .send({ username: 'test4', password: 1})
            .then(response => {
            expect(response.status).toBe(500);
            });
        });
    })
});