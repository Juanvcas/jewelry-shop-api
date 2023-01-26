import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './products_data';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await NextCors(req, res, {
		methods: ['GET'],
		origin: '*',
		optionsSuccessStatus: 200,
	});

	if (req.method === 'GET') {
		res.status(200).json(products);
	} else {
		res.status(200).json('You dont have access to this API');
	}
}
