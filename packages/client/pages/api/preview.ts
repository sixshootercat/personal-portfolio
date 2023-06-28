import { NextApiResponse, NextApiRequest } from 'next';
import { isDevEnv } from 'src/helpers';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  if (!isDevEnv()) {
    res.redirect('/');
  } else {
    res.setPreviewData({});
    res.writeHead(307, { Location: '/' });
  }

  res.end();
}
