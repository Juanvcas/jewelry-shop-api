import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './products_data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(products);
	} else {
		res.status(200).json('You dont have access to this API');
	}
}
