import bgDesktop from "../../assets/shared/desktop/bg-beta.jpg";
import bgTablet from "../../assets/shared/tablet/bg-beta.jpg";
import bgMobile from "../../assets/shared/mobile/bg-beta.jpg";
import SCPseudoFooter from "./PseudoFooter.styled.tsx";
import { BreakPointType } from "../../types.ts";
import IconArrow from "../../icons/IconArrow.tsx";

type Props = {
  breakPoints: BreakPointType;
};

export default function PseudoFooter({ breakPoints }: Props) {
  return (
    <SCPseudoFooter>
      <picture>
        <source
          srcSet={bgDesktop}
          media={`(min-width: ${breakPoints.desktop}px)`}
        />
        <source
          srcSet={bgTablet}
          media={`(min-width: ${breakPoints.tablet}px)`}
        />
        <img src={bgMobile} alt="background image" />
      </picture>
      <div className="content">
        <h1 className="fs-h1 scaled">We’re in beta. Get your invite today!</h1>
        <a
          href="https://4chan.org/g/catalog"
          className="button-secondary white fs-h4"
          target="_blank"
        >
          <span>get an invite</span>
          <IconArrow />
        </a>
      </div>
    </SCPseudoFooter>
  );
}
