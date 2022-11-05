/* eslint-disable @typescript-eslint/no-var-requires */

if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen({ onUnhandledRequest: 'warn' });
  console.log('Loaded MSW on server.');
} else {
  const { worker } = require('./browser');
  worker
    .start({ onUnhandledRequest: 'warn' })
    .then(() => console.log('Loaded MSW on browser.'))
    .catch((error: Error) => console.error(`Could not start MSW worker: ${error}.`));
}

export {};
