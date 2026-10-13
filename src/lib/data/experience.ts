import FreelanceDescription from '$lib/data/description/experience/freelanceSoftwareDeveloperDescription.html?raw';
import Description3d from '$lib/data/description/experience/aryanDukeDescription3D.html?raw';
import DescriptionGraphic from '$lib/data/description/experience/aryanDukeDescriptionGraphic.html?raw';
import DescriptionWeb from '$lib/data/description/experience/aryanDukeDescriptionWeb.html?raw';

export interface Experience {
	company: string;
	position: string;
	start: string;
	end?: string;
	description: string;
}

const experience: Experience[] = [
	{
		company: 'Upwork (Remote)',
		position: 'Freelance Software Developer',
		description: FreelanceDescription,
		start: 'May 2024',
		end: 'May 2025'
	},
	{
		company: 'Aryan Duke Parsi',
		position: 'Website Administrator and IT Specialist',
		description: DescriptionWeb,
		start: 'October 2022',
		end: 'November 2023'
	},
	{
		company: 'Aryan Duke Parsi',
		position: 'Graphic Designer',
		description: DescriptionGraphic,
		start: 'November 2021',
		end: 'October 2022'
	},
	{
		company: 'Aryan Duke Parsi',
		position: '3D Artist',
		description: Description3d,
		start: 'June 2021',
		end: 'November 2021'
	}
];

export default experience;
