import heroDesktop from "../../assets/pricing/desktop/hero.jpg";
import heroTablet from "../../assets/pricing/tablet/hero.jpg";
import heroMobile from "../../assets/pricing/mobile/hero.jpg";
import SCPricing from "./Pricing.styled.tsx";
import { BreakPointType } from "../../types.ts";
import PseudoFooter from "../../components/PseudoFooter/PseudoFooter.tsx";
import Toggle from "../../components/Toggle/Toggle.tsx";
import { useMemo, useState } from "react";
import AnHero from "../../components/AnHero/AnHero.tsx";

type Props = {
  breakPoints: BreakPointType;
};

export default function Pricing({ breakPoints }: Props) {
  const [isMonthly, setIsMonthly] = useState(true);
  const heroImage = useMemo(
    () => ({
      desktop: { src: heroDesktop, breakPoint: breakPoints.desktop },
      tablet: { src: heroTablet, breakPoint: breakPoints.tablet },
      mobile: { src: heroMobile, breakPoint: breakPoints.mobile },
    }),
    []
  );

  function toggle() {
    setIsMonthly((prev) => !prev);
  }

  return (
    <SCPricing>
      <AnHero
        title="pricing"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        image={heroImage}
      />
      <div className="rate">
        <Toggle
          isA={isMonthly}
          aLabel="Monthly"
          bLabel="Yearly"
          toggle={toggle}
        />
        <div className="prices"></div>
      </div>
      <PseudoFooter breakPoints={breakPoints} />
    </SCPricing>
  );
}
