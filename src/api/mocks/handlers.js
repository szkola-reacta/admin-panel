import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),

  rest.get('/me', (req, res, ctx) => {
    return res(
      // ctx.status(200),
      ctx.status(403),
      ctx.json({
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),

  rest.post('/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'ok'
      })
    );
  })
];
