import { NavLink } from "react-router-dom";

export interface ContentListingItemProps {
	title: string;
	summary: string;
	publishDate: Date;
	uri: string;
}

const ContentListingItem = ({
	title,
	summary,
	publishDate,
	uri,
}: ContentListingItemProps) => (
	<div className="ContentListingItem">
		<p>
			<span className="italicize">({publishDate.toDateString()})</span>{" "}
			<NavLink to={uri}>{title}</NavLink> - {summary}
		</p>
	</div>
);

export default ContentListingItem;
