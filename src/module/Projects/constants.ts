import { ContentInfo } from "../../component/Content/Content";
import CrsSeeker from "./CrsSeeker";
import GBIPG from "./GBIPG";
import WikiClone from "./WikiClone";

export const PROJECTS: { [id: string]: ContentInfo } = {
	gbipg: {
		header: {
			title: "GBIPG",
			publishDate: new Date(2022, 4, 1),
			cover: {
				name: "gbipg-cover.png",
				alt: "A step-by-step visualization of the GBIPG algorithm. It shows how a black and white image of a hand is transformed into an Ishihara plate using the algorithm.",
				width: 768,
				height: 200,
			},
		},
		metadata: {
			summary:
				"A terminal application for generating color vision test plate from an image.",
			uri: "gbipg",
			projectLink: "https://github.com/marshblocker/gbipg",
		},
		renderContent: GBIPG,
	},
	wikiclone: {
		header: {
			title: "WikiClone",
			publishDate: new Date(2022, 5, 1),
			cover: {
				name: "wikiclone-cover.png",
				alt: "A screenshot of WikiClone showing a 'Cat' article with an image of a small, brown-gray kitten on the right.",
				width: 768,
				height: 340,
			},
		},
		metadata: {
			summary:
				"A clone of the Wikipedia website that includes features like user roles and article version control system.",
			uri: "wikiclone",
			projectLink: "https://github.com/marshblocker/wikiclone",
		},
		renderContent: WikiClone,
	},
	"crs-seeker": {
		header: {
			title: "CRS Seeker",
			publishDate: new Date(2021, 11, 1),
			cover: {
				name: "crs-seeker-cover.png",
				alt: "A screenshot of a sample result of running CRS Seeker. It shows a table that ranks classes by the student's chance of getting it. A table row shows the class code, the name of the instructor, the schedule and room, any remarks regarding the class, and the chance of getting the class.",
				width: 768,
				height: 300,
			},
		},
		metadata: {
			summary:
				"A terminal application that ranks the available courses in the UP CRS website based on the chance of getting in.",
			uri: "crs-seeker",
			projectLink: "https://github.com/marshblocker/crs_seeker",
		},
		renderContent: CrsSeeker,
	},
};
