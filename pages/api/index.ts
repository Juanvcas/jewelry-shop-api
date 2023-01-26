// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	await NextCors(req, res, {
		methods: ['GET'],
		origin: '*',
		optionsSuccessStatus: 200,
	});

	if (req.method === 'GET') {
		res.status(200).json('jewelry shop API');
	} else {
		res.status(200).json('You dont have access to this API');
	}
}
