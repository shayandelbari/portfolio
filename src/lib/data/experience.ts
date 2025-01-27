import Description1 from '$lib/data/description/experience/aryanDukeDescription1.html?raw';

export interface Experience {
	company: string;
	position: string;
	start: string;
	end?: string;
	description: string;
}

const experience: Experience[] = [
	{
		company: 'Aryan Duke Parsi',
		position: 'Website Administrator and IT Specialist',
		description: Description1,
		start: 'July 2021',
		end: 'November 2023'
	}
];

export default experience;
