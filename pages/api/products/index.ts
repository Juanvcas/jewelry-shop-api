import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './products_data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(products);
}
