import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { tags } from './tags_data';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await NextCors(req, res, {
		methods: ['GET'],
		origin: '*',
		optionsSuccessStatus: 200,
	});

	res.status(200).json(tags);
}
