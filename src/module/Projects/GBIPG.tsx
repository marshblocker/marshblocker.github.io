import Content from "../../component/Content/Content";
import { PROJECTS } from "./constants";

const GBIPG = () => {
	const renderBody = () => (
		<>
			<p>
				Graph-based Ishihara Plate Generation (GBIPG) algorithm can
				generate a color vision test plate (Ishihara plate) from an
				image input using a novel graph-based algorithm that is
				significantly faster than the traditional Monte Carlo method by
				using a more deterministic approach in creating the plate.
			</p>
			<p>
				Included in the repository is a terminal application that
				implements the GBIPG algorithm using the Processing software for
				performing image processing.
			</p>
		</>
	);
	const { header, metadata } = PROJECTS["gbipg"];
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

export default GBIPG;
