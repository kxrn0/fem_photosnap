import IconArrow from "../../icons/IconArrow.tsx";
import { ImageType } from "../../types.ts";
import SCCard from "./Card.styled.tsx";

type Props = {
  image: ImageType;
  title: string;
  author: string;
  story: string;
  date?: string;
};

export default function Card({ image, title, story, author, date }: Props) {
  return (
    <SCCard>
      <picture>
        <source
          srcSet={image.desktop.src}
          media={`(min-width: ${image.desktop.breakPoint}px)`}
        />
        <source
          srcSet={image.tablet.src}
          media={`(min-width: ${image.tablet.breakPoint}px)`}
        />
        <img src={image.mobile.src} alt={title} />
      </picture>
      <div className="content">
        <div className="details">
          {date && <p className="fs-body-2">{date}</p>}
          <h3 className="fs-h3">{title}</h3>
          <p className="fs-body-2">by {author}</p>
        </div>
        <a
          href={story}
          className="button-secondary white fs-h4"
          target="_blank"
        >
          <span>read story</span>
          <IconArrow />
        </a>
      </div>
    </SCCard>
  );
}
