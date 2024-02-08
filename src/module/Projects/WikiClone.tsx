import Content from "../../component/Content/Content";
import { PROJECTS } from "./constants";

const WikiClone = () => {
	const renderBody = () => (
		<>
			<p>
				A Wikipedia clone that includes features like article CRUD functionality,
				user role system, and article version control system. Uses a flat table
				implementation for its database schema for faster reading time, uses Redis
				for caching recently viewed articles in memory, and uses Socket.io for
				real-time update on article and user changes.
			</p>
		</>
	);
	const { header, metadata } = PROJECTS["wikiclone"];
    const { title, publishDate, cover } = header;
	const { projectLink } = metadata;

	return (
		<Content
			title={title}
			body={renderBody()}
			publishDate={publishDate}
			cover={cover}
			projectLink={projectLink}
		/>
	);
};

export default WikiClone;
