import type { NextApiRequest, NextApiResponse } from 'next';
import { tags } from './tags_data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(tags);
}
