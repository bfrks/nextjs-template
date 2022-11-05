import { rest } from 'msw';
import { ANY_LOREM_RESPONSE } from './constants';

const handlers = [
  rest.get('/api/lorem', (_req, res, ctx) => {
    return res(ctx.json(ANY_LOREM_RESPONSE));
  }),
];

export default handlers;
