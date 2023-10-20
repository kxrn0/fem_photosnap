import heroDesktop from "../../assets/pricing/desktop/hero.jpg";
import heroTablet from "../../assets/pricing/tablet/hero.jpg";
import heroMobile from "../../assets/pricing/mobile/hero.jpg";
import SCPricing from "./Pricing.styled.tsx";
import { BreakPointType } from "../../types.ts";
import PseudoFooter from "../../components/PseudoFooter/PseudoFooter.tsx";
import Toggle from "../../components/Toggle/Toggle.tsx";
import { useMemo, useState } from "react";
import AnHero from "../../components/AnHero/AnHero.tsx";
import PriceCard from "../../components/PriceCard/PriceCard.tsx";
import IconCheck from "../../icons/IconCheck.tsx";

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
  const prices = useMemo(
    () => [
      {
        title: "Basic",
        description:
          "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
        monthlyRate: 19,
        yearlyRate: 190,
        link: "https://www.youtube.com/watch?v=P4ALDytLAXQ",
        isPro: false,
      },
      {
        title: "Pro",
        description:
          "More advanced features available. Recommended for photography veterans and professionals.",
        monthlyRate: 39,
        yearlyRate: 390,
        link: "https://www.youtube.com/watch?v=5sHu__--POY",
        isPro: true,
      },
      {
        title: "Business",
        description:
          "Additional features available such as more detailed metrics. Recommended for business owners.",
        monthlyRate: 99,
        yearlyRate: 990,
        link: "https://www.youtube.com/watch?v=ivp7AmHZp1E",
        isPro: false,
      },
    ],
    []
  );
  const comparisons = useMemo(
    () => [
      {
        name: "UNLIMITED SHITPOSTING",
        basic: true,
        pro: true,
        business: true,
      },
      {
        name: "UNLIMITED PHOTO UPLOAD",
        basic: true,
        pro: true,
        business: true,
      },
      {
        name: "EMBEDDING CUSTOM CONTENT",
        basic: false,
        pro: true,
        business: true,
      },
      {
        name: "CUSTOMIZE METADATA",
        basic: false,
        pro: true,
        business: true,
      },
      {
        name: "ADVANCED METRICS",
        basic: false,
        pro: false,
        business: true,
      },
      {
        name: "PHOTO DOWNLOADS",
        basic: false,
        pro: false,
        business: true,
      },
      {
        name: "SEARCH ENGINE INDEXING",
        basic: false,
        pro: false,
        business: true,
      },
      {
        name: "CUSTOM ANALYTICS",
        basic: false,
        pro: false,
        business: true,
      },
    ],
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
      <section className="rate">
        <Toggle
          isA={isMonthly}
          aLabel="Monthly"
          bLabel="Yearly"
          toggle={toggle}
        />
        <div className="prices">
          {prices.map((price, index) => (
            <PriceCard key={index} {...price} isMonthly={isMonthly} />
          ))}
        </div>
      </section>
      <section className="comparision">
        <h1 className="fs-h1 scaled">compare</h1>
        <ul className="table">
          <li className="row">
            <p className="fs-h4">the features</p>
            <div className="points">
              <p className="fs-h4 item">basic</p>
              <p className="fs-h4 item">pro</p>
              <p className="fs-h4 item">business</p>
            </div>
          </li>
          {comparisons.map((cmp, index) => (
            <li key={index} className="row">
              <p className="fs-h4">{cmp.name}</p>
              <ul className="points">
                <li className="point">
                  <span className="fs-h4">basic</span>
                  <label className="item">
                    <input
                      type="checkbox"
                      checked={cmp.basic}
                      disabled={true}
                    />
                    {cmp.basic && <IconCheck />}
                  </label>
                </li>
                <li className="point">
                  <span className="fs-h4">pro</span>
                  <label className="item">
                    <input type="checkbox" checked={cmp.pro} disabled={true} />
                    {cmp.pro && <IconCheck />}
                  </label>
                </li>
                <li className="point">
                  <span className="fs-h4">business</span>
                  <label className="item">
                    <input
                      type="checkbox"
                      checked={cmp.business}
                      disabled={true}
                    />
                    {cmp.business && <IconCheck />}
                  </label>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <PseudoFooter breakPoints={breakPoints} />
    </SCPricing>
  );
}
