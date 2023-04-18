const request = require('supertest');
const app = require('./index');
const server = app.listen(3000); // Importa y ejecuta el servidor Express

describe('GET /', () => {
  it('should return "Hola mundo"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hola mundo');
  });

  // Cierra el servidor después de ejecutar todas las pruebas
  afterAll(async () => {
    await server.close();
  });
});

