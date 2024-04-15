// userRoutes.test.js
const request = require('supertest');
const app = require('../server.ts');

describe('Testando rotas de desenvolvedores', () => {
  it('Deve retornar um desenvolvedor com status 200', async () => {
    const response = await request(app).get('/api/desenvolvedores/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'John Doe' });
  });
});

describe('Testando rotas de níveis', () => {
  it('Deve retornar um desenvolvedor com status 200', async () => {
    const response = await request(app).get('/api/niveis/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'John Doe' });
  });
});
