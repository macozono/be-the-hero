const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        connection.destroy();
    });

    it ('Shold be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAD 3",
            email: "apad3@apad.teste.com.br",
            whatsapp: "1199999999",
            city: "Osasco",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})