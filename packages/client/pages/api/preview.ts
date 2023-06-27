import { NextApiResponse, NextApiRequest } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' });
  res.end();
}
