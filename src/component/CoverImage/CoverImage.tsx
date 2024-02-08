import "./CoverImage.styles.css"

export interface CoverImageProps {
	/**
	 * Must include file extension, e.g. `foo.png`
	 */
	name: string;
	alt: string;
    width?: number;
    height?: number;
}

const CoverImage = ({ name, alt, width, height }: CoverImageProps) => (
    <div className="CoverImage__figure">
        {width && height ? (
            <img
                className="CoverImage__image"
                src={`/${name}`}
                alt={alt}
                width={width}
                height={height}
            ></img>    
        ) : (
            <img
                className="CoverImage__image"
                src={`../../../resources/${name}`}
                alt={alt}
            ></img>
        )}
    </div>
);

export default CoverImage;