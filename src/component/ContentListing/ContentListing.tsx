import "./ContentListing.styles.css";

import ContentListingItem, {
	ContentListingItemProps,
} from "../ContentListingItem/ContentListingItem";

export interface ContentListingProps {
	title: string;
	description?: string;
	contents: ContentListingItemProps[];
}

const ContentListing = ({
	title,
	description,
	contents,
}: ContentListingProps) => {
	return (
        <>
            <article>
                <header className="ContentListing__header">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </header>
                <section>
                    <ul>
                        {contents.map((content) => (
                            <li key={content.uri}>
                                <ContentListingItem {...content} />
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </>
	);
};

export default ContentListing;
