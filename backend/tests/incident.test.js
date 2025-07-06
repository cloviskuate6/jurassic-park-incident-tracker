const request = require('supertest');
const app = require('../src/index'); // à adapter si structure modulaire
// Tests d'intégration simplifiés ici (normalement on mock la DB)

test('GET /api/incidents unauthorized', async () => {
  const res = await request(app).get('/api/incidents');
  expect(res.statusCode).toBe(401);
});
