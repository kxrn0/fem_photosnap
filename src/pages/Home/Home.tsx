import { useMemo } from "react";
import IconArrow from "../../icons/IconArrow.tsx";

import heroDesktop from "../../assets/home/desktop/create-and-share.jpg";
import heroTablet from "../../assets/home/tablet/create-and-share.jpg";
import heroMobile from "../../assets/home/mobile/create-and-share.jpg";

import oneDesktop from "../../assets/home/desktop/beautiful-stories.jpg";
import oneTablet from "../../assets/home/tablet/beautiful-stories.jpg";
import oneMobile from "../../assets/home/mobile/beautiful-stories.jpg";

import twoDesktop from "../../assets/home/desktop/designed-for-everyone.jpg";
import twoTablet from "../../assets/home/tablet/designed-for-everyone.jpg";
import twoMobile from "../../assets/home/mobile/designed-for-everyone.jpg";

import mountainsDesktop from "../../assets/stories/desktop/mountains.jpg";
import mountainsMobile from "../../assets/stories/mobile/mountains.jpg";
import cityDesktop from "../../assets/stories/desktop/cityscapes.jpg";
import cityMobile from "../../assets/stories/mobile/cityscapes.jpg";
import voyageDesktop from "../../assets/stories/desktop/18-days-voyage.jpg";
import voyageMobile from "../../assets/stories/mobile/18-days-voyage.jpg";
import archDesktop from "../../assets/stories/desktop/architecturals.jpg";
import archMobile from "../../assets/stories/mobile/architecturals.jpg";

import SCHome from "./Home.styled.tsx";
import Section from "./Section/Section.tsx";
import Card from "../../components/Card/Card.tsx";
import IconResponsive from "../../icons/IconResponsive.tsx";
import IconInfinity from "../../icons/IconInfinity.tsx";
import IconEmbed from "../../icons/IconEmbed.tsx";
import SellingPoint from "../../components/SellingPoint/SellingPoint.tsx";
import { BreakPointType } from "../../types.ts";

type Props = {
  breakPoints: BreakPointType;
};

export default function Home({ breakPoints }: Props) {
  const sectionData = useMemo(
    () => [
      {
        image: {
          desktop: { src: oneDesktop, breakPoint: breakPoints.desktop },
          tablet: { src: oneTablet, breakPoint: breakPoints.tablet },
          mobile: { src: oneMobile, breakPoint: breakPoints.mobile },
        },
        title: "BEAUTIFUL STORIES EVERY TIME",
        description:
          "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      },
      {
        image: {
          desktop: { src: twoDesktop, breakPoint: breakPoints.desktop },
          tablet: { src: twoTablet, breakPoint: breakPoints.tablet },
          mobile: { src: twoMobile, breakPoint: breakPoints.mobile },
        },
        title: "DESIGNED FOR EVERYONE",
        description:
          "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
      },
    ],
    []
  );
  const stories = useMemo(
    () => [
      {
        title: "The Mountains",
        author: "John Appleseed",
        story: "https://www.youtube.com/watch?v=wg0G0FOoCI8",
        image: {
          desktop: { breakPoint: breakPoints.tablet, src: mountainsDesktop },
          tablet: { breakPoint: breakPoints.tablet, src: mountainsDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: mountainsMobile },
        },
      },
      {
        title: "Sunset Cityscapes",
        author: "Benjamin Cruz",
        story: "https://www.youtube.com/watch?v=UnIhRpIT7nc",
        image: {
          desktop: { breakPoint: breakPoints.tablet, src: cityDesktop },
          tablet: { breakPoint: breakPoints.tablet, src: cityDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: cityMobile },
        },
      },
      {
        title: "18 Days Voyage",
        author: "Alexei Borodin",
        story: "https://www.youtube.com/watch?v=BnkhBwzBqlQ",
        image: {
          desktop: { breakPoint: breakPoints.tablet, src: voyageDesktop },
          tablet: { breakPoint: breakPoints.tablet, src: voyageDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: voyageMobile },
        },
      },
      {
        title: "Architecturals",
        author: "Samantha Brooke",
        story: "https://www.youtube.com/watch?v=DdUoGjniJ7s",
        image: {
          desktop: { breakPoint: breakPoints.tablet, src: archDesktop },
          tablet: { breakPoint: breakPoints.tablet, src: archDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: archMobile },
        },
      },
    ],
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
    ],
    []
  );

  return (
    <SCHome>
      <header className="hero">
        <div className="content">
          <h1 className="fs-h1 scaled">
            Create and share your photo stories.{" "}
          </h1>
          <p className="fs-body-1">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <a
            href="https://4chan.org/g/catalog"
            className="button-secondary white fs-h4"
          >
            <span>get an invite</span>
            <IconArrow />
          </a>
        </div>
        <picture>
          <source
            srcSet={heroDesktop}
            media={`(min-width: ${breakPoints.desktop}px)`}
          />
          <source
            srcSet={heroTablet}
            media={`(min-width: ${breakPoints.tablet}px)`}
          />
          <img src={heroMobile} alt="Create and Share" />
        </picture>
      </header>
      <Section {...sectionData[0]} reverse={true} />
      <Section {...sectionData[1]} />
      <section className="stories">
        {stories.map((story, index) => (
          <Card key={index} {...story} />
        ))}
      </section>
      <section className="selling-points">
        {painPoints.map((point, index) => (
          <SellingPoint key={index} {...point} />
        ))}
      </section>
    </SCHome>
  );
}
