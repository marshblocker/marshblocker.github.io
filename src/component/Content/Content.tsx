import CoverImage, { CoverImageProps } from "../CoverImage/CoverImage";

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
