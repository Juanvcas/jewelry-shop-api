import { categories } from './categories/categories_data';
import { tags } from './tags/tags_data';

let id: number = 0;

interface Products {
	id: number;
	title: string;
	description: string;
	category: object;
	tags: Array<object>;
	images: Array<string>;
}

export const products: Products[] = [
	{
		id: id++,
		title: 'Anillo Curvo',
		description:
			'Este es un anillo de oro rosa hecho con un diseño curvo y abierto, con detalles sutiles, finos y una atadura de plata que resalta la elegancia del anillo.',
		category: categories[0],
		tags: [tags[1]],
		images: [
			'https://i.postimg.cc/qBj62Lht/anillo-ororosa-01.jpg',
			'https://i.postimg.cc/ZRLB7PwM/anillo-ororosa-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Anillo en Cadena',
		description:
			'Este es un anillo de oro hecho con un diseño en cadena que le da una apariencia disruptiva, resalta por su mismo diseño que llama la atención',
		category: categories[0],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/Hxm89v9M/anillo-oro-01.jpg',
			'https://i.postimg.cc/Fs6fBHxN/anillo-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Anillo Luna Estrella',
		description:
			'Este es un detallado anillo de oro con un diseño que hace alisión a la luna y las estrellas, con cuidados detalles hace de este un anillo perfecto para regalar.',
		category: categories[0],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/6QnGRxnw/anillo-oro-02.jpg',
			'https://i.postimg.cc/L65YD1Lx/anillo-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Espiral',
		description: 'Estas son unas aretas de oro con un diseño en espiral.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/NFfyWyVf/aretas-oro-01.jpg',
			'https://i.postimg.cc/7hsCDH81/aretas-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Brazalete',
		description:
			'Estas son unas aretas de oro con un diseño tipo brazalete griego.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/nhQsbfd7/aretas-oro-02.jpg',
			'https://i.postimg.cc/Xvfpqc6Y/aretas-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Aretas Diamantina',
		description:
			'Estas son unas aretas de oro con un incrustaciones de diamante.',
		category: categories[1],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/wB8194Pr/aretas-oro-03.jpg',
			'https://i.postimg.cc/XJxqcjJM/aretas-oro-03-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de Fé',
		description:
			'Esta es una cadena de oro con un dige de letras que dice "Fé".',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/90MML6RD/cadena-oro-01.jpg',
			'https://i.postimg.cc/W3stkFs6/cadena-oro-01-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de Argollas',
		description:
			'Esta es una cadena de oro hecha con argollas en forma de rectangulos gruesos.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/fW2kVRpm/cadena-oro-02.jpg',
			'https://i.postimg.cc/BbVvkmHM/cadena-oro-02-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Cadena de doble Frente',
		description:
			'Esta es una cadena de oro hecha con una línea argollas en forma de rectangulos delgados y otra con argollas mas pequeñas con diges.',
		category: categories[2],
		tags: [tags[0]],
		images: [
			'https://i.postimg.cc/281yhfNJ/cadena-oro-03.jpg',
			'https://i.postimg.cc/JzJhYcn5/cadena-oro-03-1.jpg',
		],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/Pr0xMFtq/pulsera-basica-01.jpg'],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/MGmpq61c/pulsera-basica-02.jpg'],
	},
	{
		id: id++,
		title: 'Pulsera decorada',
		description:
			'Esta es una pulsera hecha con bisutería y decorados de colores.',
		category: categories[3],
		tags: [tags[2]],
		images: ['https://i.postimg.cc/N0cj392q/pulsera-basica-03.jpg'],
	},
];
