// Import images
import imgproc from '../images/dip.jpg';
import network from '../images/Ft.png';
import tenziesgame from '../images/tenziesgame.jpg';
import notesapp from '../images/notesapp.jpg';
import quizapp from '../images/quizapp.jpg';
import calc from '../images/calc.jpg';


export const projectsData = [
	{
		id: 1,
		title: 'Retinal Image Segmentation and Objects Analysis',
		category: 'Image Processing',
		img: imgproc,
		ProjectHeader: {
			title: 'Retinal Image Segmentation and Objects Analysis',
			publishDate: 'April 30, 2024',
			tags: 'Image Processing',
		},
	},
	{
		id: 2,
		title: 'Chat & File sharing App using bsd sockets',
		category: 'Networking',
		img: network,
	},
	{
		id: 3,
		title: 'Tenzies Game ',
		category: 'Web Application',
		img: tenziesgame,
	},
	{
		id: 4,
		title: 'Notes App',
		category: 'Web Application',
		img: notesapp,
	},
	{
		id: 5,
		title: 'Quiz App',
		category: 'Web Application',
		img: quizapp,
	},
	{
		id: 6,
		title: 'Calculator App',
		category: 'Web Application',
		img: calc,
	},
];
