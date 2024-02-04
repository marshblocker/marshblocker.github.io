import CoverImage, { CoverImageProps } from "../CoverImage/CoverImage";
import "./Content.styles.css";

export interface ContentMetadata {
	summary: string;
	uri: string;
	projectLink?: string;
}

export interface ContentHeader {
	title: string;
	publishDate: Date;
	cover?: CoverImageProps;
}

export interface ContentInfo {
	header: ContentHeader;
	metadata: ContentMetadata;
	renderContent: () => React.JSX.Element;
}

export interface ContentProps {
	title: string;
	publishDate: Date;
	body: React.JSX.Element;
	cover?: CoverImageProps;
	projectLink?: string;
}

const Content = ({
	title,
	publishDate,
	body,
	cover,
	projectLink,
}: ContentProps) => {
	return (
		<article className="Content">
			<header className="Content__header">
				{cover && <CoverImage { ...cover } />}
				<h1>{title}</h1>
				<p className="italicize">
					Published at {publishDate.toDateString()}
				</p>
			</header>
			{body}
			{projectLink && (
				<section className="Content__project-link">
					<a href={projectLink}>Link to Github repository</a>
				</section>
			)}
		</article>
	);
};

export default Content;
