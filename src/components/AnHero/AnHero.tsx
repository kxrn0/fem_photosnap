import { ImageType } from "../../types.ts";
import SCAnHero from "./AnHero.styled.tsx";

type Props = { title: string; description: string; image: ImageType };

export default function AnHero({ title, description, image }: Props) {
  return (
    <SCAnHero>
      <div className="content">
        <h1 className="fs-h1 scaled">{title}</h1>
        <p className="fs-body-1">{description}</p>
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
        <img src={image.mobile.src} alt="features" />
      </picture>
    </SCAnHero>
  );
}
