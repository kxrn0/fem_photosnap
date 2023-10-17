import { BreakPointType } from "../../types.ts";
import { useMemo } from "react";
import IconArrow from "../../icons/IconArrow.tsx";
import Card from "../../components/Card/Card.tsx";
import SCStories from "./Stories.styled.tsx";
import moonDesktop from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import moonTablet from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import moonMobile from "../../assets/stories/mobile/moon-of-appalacia.jpg";
import mountainsDesktop from "../../assets/stories/desktop/mountains.jpg";
import mountainsMobile from "../../assets/stories/mobile/mountains.jpg";
import cityDesktop from "../../assets/stories/desktop/cityscapes.jpg";
import cityMobile from "../../assets/stories/mobile/cityscapes.jpg";
import voyageDesktop from "../../assets/stories/desktop/18-days-voyage.jpg";
import voyageMobile from "../../assets/stories/mobile/18-days-voyage.jpg";
import archDesktop from "../../assets/stories/desktop/architecturals.jpg";
import archMobile from "../../assets/stories/mobile/architecturals.jpg";
import worldDesktop from "../../assets/stories/desktop/world-tour.jpg";
import worldMobile from "../../assets/stories/mobile/world-tour.jpg";
import unforDesktop from "../../assets/stories/desktop/unforeseen-corners.jpg";
import unforMobile from "../../assets/stories/mobile/unforeseen-corners.jpg";
import kingDesktop from "../../assets/stories/desktop/king-on-africa.jpg";
import kingMobile from "../../assets/stories/mobile/king-on-africa.jpg";
import tripDesktop from "../../assets/stories/desktop/trip-to-nowhere.jpg";
import tripMobile from "../../assets/stories/mobile/trip-to-nowhere.jpg";
import rageDesktop from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import rageMobile from "../../assets/stories/mobile/rage-of-the-sea.jpg";
import runDesktop from "../../assets/stories/desktop/running-free.jpg";
import runMobile from "../../assets/stories/mobile/running-free.jpg";
import wavesDesktop from "../../assets/stories/desktop/behind-the-waves.jpg";
import wavesMobile from "../../assets/stories/mobile/behind-the-waves.jpg";
import calmDesktop from "../../assets/stories/desktop/calm-waters.jpg";
import calmMobile from "../../assets/stories/mobile/calm-waters.jpg";
import milkDesktop from "../../assets/stories/desktop/milky-way.jpg";
import milkMobile from "../../assets/stories/mobile/milky-way.jpg";
import darkDesktop from "../../assets/stories/desktop/dark-forest.jpg";
import darkMobile from "../../assets/stories/mobile/dark-forest.jpg";
import somDesktop from "../../assets/stories/desktop/somwarpet.jpg";
import somMobile from "../../assets/stories/mobile/somwarpet.jpg";
import landDesktop from "../../assets/stories/desktop/land-of-dreams.jpg";
import landMobile from "../../assets/stories/mobile/land-of-dreams.jpg";

type Props = {
  breakPoints: BreakPointType;
};

export default function Stories({ breakPoints }: Props) {
  const data = useMemo(
    () => [
      {
        date: "April 16th 2020",
        title: "The Mountains",
        author: "John Appleseed",
        story: "https://youtu.be/2SUwOgmvzK4?si=lnKUxM5HkATL1-nf",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: mountainsDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: mountainsDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: mountainsMobile },
        },
      },
      {
        date: "April 14th 2020",
        title: "Sunset Cityscapes",
        author: "Benjamin Cruz",
        story: "https://youtu.be/rUmV-MorIKc?si=IrE_HHCpVTiZKE6a",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: cityDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: cityDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: cityMobile },
        },
      },
      {
        date: "April 11th 2020",
        title: "18 Days Voyage",
        author: "Alexei Borodin",
        story: "https://youtu.be/utCjuKDXQsE?si=lrqJJaKMSXtBj6Qj",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: voyageDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: voyageDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: voyageMobile },
        },
      },
      {
        date: "April 9th 2020",
        title: "Architecturals",
        author: "Samantha Brooke",
        story: "https://youtu.be/3Qpf9pAkUeI?si=xAuj6IwpayhoXZ1T",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: archDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: archDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: archMobile },
        },
      },
      {
        date: "April 7th 2020",
        title: "World Tour 2019",
        author: "Timothy Wagner",
        story: "https://youtu.be/4hZ_wTx_kWg?si=6Z0qohwgn--8D2Vo",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: worldDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: worldDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: worldMobile },
        },
      },
      {
        date: "April 3rd 2020",
        title: "Unforeseen Corners",
        author: "William Malcolm",
        story: "https://youtu.be/j706aSetFbI?si=CWo5tRlRHkAp91Y1",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: unforDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: unforDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: unforMobile },
        },
      },
      {
        date: "March 29th 2020",
        title: "King on Africa: Part II",
        author: "Tim Hillenburg",
        story: "https://youtu.be/gs-MtItyOFc?si=x8Du9qLShW5vj4mR",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: kingDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: kingDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: kingMobile },
        },
      },
      {
        date: "March 21st 2020",
        title: "The Trip to Nowhere",
        author: "Felicia Rourke",
        story: "https://youtu.be/sVx1mJDeUjY?si=v0PWTH0sJOuHm2Qz",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: tripDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: tripDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: tripMobile },
        },
      },
      {
        date: "March 19th 2020",
        title: "Rage of The Sea",
        author: "Mohammed Abdul",
        story: "https://youtu.be/t5NoCmnfg7o?si=gDZD-vMHj-iPL1Xr",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: rageDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: rageDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: rageMobile },
        },
      },
      {
        date: "March 16th 2020",
        title: "Running Free",
        author: "Michelle",
        story: "https://www.youtube.com/watch?v=j4Jyev7iTlE",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: runDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: runDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: runMobile },
        },
      },
      {
        date: "March 11th 2020",
        title: "Behind the Waves",
        author: "Lamarr Wilson",
        story: "https://www.youtube.com/watch?v=Z9VVLJQTAI4",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: wavesDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: wavesDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: wavesMobile },
        },
      },
      {
        date: "March 9th 2020",
        title: "Calm Waters",
        author: "by Samantha Brooke",
        story: "https://youtu.be/zKWlEej2j5Q?si=MXCico5PRCU6Cd0C",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: calmDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: calmDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: calmMobile },
        },
      },
      {
        date: "March 5th 2020",
        title: "The Milky Way",
        author: "Benjamin Cruz",
        story: "https://youtu.be/KGAAhzreGWw?si=wf4Ab07cX7S33JIb",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: milkDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: milkDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: milkMobile },
        },
      },
      {
        date: "March 4th 2020",
        title: "Night at The Dark Forest",
        author: "Mohammed Abdul",
        story: "https://youtu.be/wK7-4080KMk?si=qNZLk2HJF6g7xSWS",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: darkDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: darkDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: darkMobile },
        },
      },
      {
        date: "March 1st 2020",
        title: "Somwarpet’s Beauty",
        author: "Michelle",
        story: "https://www.youtube.com/watch?v=Xrf0zdpCDv0",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: somDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: somDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: somMobile },
        },
      },
      {
        date: "February 25th 2020",
        title: "Land of Dreams",
        author: "William Malcolm",
        story: "https://www.youtube.com/watch?v=VK9h7234eOY",
        image: {
          desktop: {
            breakPoint: breakPoints.tablet,
            src: landDesktop,
          },
          tablet: { breakPoint: breakPoints.tablet, src: landDesktop },
          mobile: { breakPoint: breakPoints.mobile, src: landMobile },
        },
      },
    ],

    []
  );

  return (
    <SCStories>
      <header className="hero">
        <picture>
          <source
            srcSet={moonDesktop}
            media={`(min-width: ${breakPoints.desktop}px)`}
          />
          <source
            srcSet={moonTablet}
            media={`(min-width: ${breakPoints.tablet}px)`}
          />
          <img src={moonMobile} alt={"HAZY FULL MOON OF APPALACHIA"} />
        </picture>
        <div className="content">
          <h4 className="fs-h4">LAST MONTH’S FEATURED STORY</h4>
          <h1 className="fs-h1 scaled">HAZY FULL MOON OF APPALACHIA</h1>
          <p className="fs-body-2">
            <span className="date">March 2nd 2020</span>
            <span className="author">by John Appleseed</span>
          </p>
          <p className="fs-body-1">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <a
            href="https://www.youtube.com/watch?v=jqnZGcmPLvA"
            className="button-secondary white fs-h4"
            target="_blank"
          >
            <span>read the story</span>
            <IconArrow />
          </a>
        </div>
      </header>
      <section className="stories">
        {data.map((story, index) => (
          <Card key={index} {...story} />
        ))}
      </section>
    </SCStories>
  );
}
