import { Link } from "wouter";
import SCSection from "./Section.styled.tsx";
import IconArrow from "../../../icons/IconArrow.tsx";
import { ImageType } from "../../../types.ts";

type Props = {
  image: ImageType;
  title: string;
  description: string;
  reverse?: boolean;
};

export default function Section({ image, title, description, reverse }: Props) {
  return (
    <SCSection className={`${reverse && "reverse"}`}>
      <div className={`content ${reverse && "reverse"}`}>
        <h1 className="fs-h1 scaled">{title}</h1>
        <p className="fs-body-1">{description}</p>
        <Link
          to="/fem_photosnap/stories"
          className={`button-secondary black fs-h4 ${reverse && "reverse"}`}
        >
          <span>view the stories</span>
          <IconArrow />
        </Link>
      </div>
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
    </SCSection>
  );
}
