import { Route, Routes } from "react-router-dom";
import ContentListing, {
	ContentListingProps,
} from "../../component/ContentListing/ContentListing";
import { PROJECTS } from "./constants";
import NotFound from "../NotFound/NotFound";
import Project from "./Project";

const ProjectListingIndex = () => {
	const projects = PROJECTS;
	const props: ContentListingProps = {
		title: "Projects 🙌",
		description: "Some of the projects I have done over the years.",
		contents: Object.values(projects).map(({ header, metadata }) => ({
			title: header.title,
			summary: metadata.summary,
			publishDate: header.publishDate,
			uri: metadata.uri,
		})),
	};

	return <ContentListing {...props} />;
};

const ProjectListing = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<ProjectListingIndex />} />
				<Route path="/:projectId" element={<Project />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default ProjectListing;
