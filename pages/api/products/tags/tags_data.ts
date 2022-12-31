let id: number = 0;

interface Tags {
	id: number;
	title: string;
	others: Array<string>;
}

export const tags: Tags[] = [
	{
		id: id++,
		title: 'Oro',
		others: ['oro', 'gold'],
	},
	{
		id: id++,
		title: 'Oro rosa',
		others: ['oro', 'rosa', 'pink gold'],
	},
	{
		id: id++,
		title: 'Bisutería',
		others: ['orfebrería', 'oropel'],
	},
	{
		id: id++,
		title: 'Bodas',
		others: ['Boda', 'Matrimonio'],
	},
];
