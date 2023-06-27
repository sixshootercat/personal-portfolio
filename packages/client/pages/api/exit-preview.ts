import { NextApiResponse, NextApiRequest } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
