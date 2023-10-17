import heroDesktop from "../../assets/features/desktop/hero.jpg";
import heroTablet from "../../assets/features/tablet/hero.jpg";
import heroMobile from "../../assets/features/mobile/hero.jpg";
import SCFeatures from "./Features.styled.tsx";
import { BreakPointType } from "../../types.ts";
import { useMemo } from "react";
import IconResponsive from "../../icons/IconResponsive.tsx";
import IconInfinity from "../../icons/IconInfinity.tsx";
import IconEmbed from "../../icons/IconEmbed.tsx";
import IconDomain from "../../icons/IconDomain.tsx";
import IconBoost from "../../icons/IconBoost.tsx";
import IconDrag from "../../icons/IconDrag.tsx";
import SellingPoint from "../../components/SellingPoint/SellingPoint.tsx";
import PseudoFooter from "../../components/PseudoFooter/PseudoFooter.tsx";
import AnHero from "../../components/AnHero/AnHero.tsx";

type Props = {
  breakPoints: BreakPointType;
};

export default function Features({ breakPoints }: Props) {
  const heroImage = useMemo(
    () => ({
      desktop: { src: heroDesktop, breakPoint: breakPoints.desktop },
      tablet: { src: heroTablet, breakPoint: breakPoints.tablet },
      mobile: { src: heroMobile, breakPoint: breakPoints.mobile },
    }),
    []
  );
  const painPoints = useMemo(
    () => [
      {
        Icon: IconResponsive,
        title: "100% Responsive",
        description:
          "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
      },
      {
        Icon: IconInfinity,
        title: "No Photo Upload Limit",
        description:
          "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
      },
      {
        Icon: IconEmbed,
        title: "Available to Embed",
        description:
          "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
      },
      {
        Icon: IconDomain,
        title: "Custom Domain",
        description:
          "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
      },
      {
        Icon: IconBoost,
        title: "Boost Your Exposure",
        description:
          "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
      },
      {
        Icon: IconDrag,
        title: "Boost Your Exposure",
        description:
          "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
      },
    ],
    []
  );

  return (
    <SCFeatures>
      <AnHero
        title="features"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        image={heroImage}
      />
      <section className="selling-points">
        {painPoints.map((point, index) => (
          <SellingPoint key={index} {...point} />
        ))}
      </section>
      <PseudoFooter breakPoints={breakPoints} />
    </SCFeatures>
  );
}
