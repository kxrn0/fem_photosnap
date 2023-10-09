import IconArrow from "../../icons/IconArrow.tsx";
import SCHome from "./Home.styled.tsx";

export default function Home() {
  return (
    <SCHome>
      <a
        className="button-secondary white fs-h4"
        href="https://4chan.org"
        target="_blank"
      >
        <span>read the stories</span>
        <IconArrow />
      </a>
    </SCHome>
  );
}
