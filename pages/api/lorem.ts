import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const lorem = await fetch(
      'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
    ).then((res) => res.json());
    res.status(200).send(lorem);
  } catch (error) {
    res.status(502).send((error as Error).message);
  }
}

export default handler;
