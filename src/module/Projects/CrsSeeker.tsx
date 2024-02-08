import Content from "../../component/Content/Content";
import { PROJECTS } from "./constants";

const CrsSeeker = () => {
	const renderBody = () => (
		<>
			<p>
                A terminal application that scrapes the UP Computerized Registration
                System (CRS) website and ranks the available courses in the pre-enlistment
                page based on the highest chance of getting in.
			</p>
			<p>
                Built using Python, and requests and beautifulsoup library for web scraping.
			</p>
		</>
	);
	const { header, metadata } = PROJECTS["crs-seeker"];
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

export default CrsSeeker;
