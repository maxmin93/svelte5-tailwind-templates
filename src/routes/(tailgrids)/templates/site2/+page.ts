import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	// image path : '/src/lib/assets/images/team' + member.imgSrc
	const members = [
		{
			imgSrc: '/image-07/image-01.png',
			name: 'Melissa Tatcher',
			position: 'Marketing Expert',
		},
		{ imgSrc: '/image-07/image-02.png', name: 'Stuard Ferrel', position: 'Digital Marketer' },
		{ imgSrc: '/image-07/image-03.png', name: 'Eva Hudson', position: 'Creative Designer' },
		{ imgSrc: '/image-07/image-04.png', name: 'Jackie Sanders', position: 'SEO Expert' },
	];

	return {
		members,
	};
};
