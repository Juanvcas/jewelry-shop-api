// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	if (req.method === 'GET') {
		res.status(200).json('jewelry shop API');
	} else {
		res.status(200).json('You dont have access to this API');
	}
}
