import IconFacebook from "../../icons/IconFacebook.tsx";
import IconInstagram from "../../icons/IconInstagram.tsx";
import IconPinterest from "../../icons/IconPinterest.tsx";
import IconTwitter from "../../icons/IconTwitter.tsx";
import IconYoutube from "../../icons/IconYoutube.tsx";
import IconArrow from "../../icons/IconArrow.tsx";
import Logo from "../../icons/Logo.tsx";
import { Link } from "wouter";
import SCFooter from "./Footer.styled.tsx";

export default function Footer() {
  return (
    <SCFooter>
      <div className="links">
        <Link to="/fem_photosnap/" aria-label="home">
          <span className="logo">
            <Logo />
          </span>
        </Link>
        <div className="socials">
          <a href="https://4chan.org/g/catalog" target="_blank">
            <IconFacebook />
          </a>
          <a href="https://4chan.org/g/catalog" target="_blank">
            <IconYoutube />
          </a>
          <a href="https://4chan.org/g/catalog" target="_blank">
            <IconTwitter />
          </a>
          <a href="https://4chan.org/g/catalog" target="_blank">
            <IconPinterest />
          </a>
          <a href="https://4chan.org/g/catalog" target="_blank">
            <IconInstagram />
          </a>
        </div>
        <div className="local-links">
          <Link className="fs-h4" to="/fem_photosnap/">
            home
          </Link>
          <Link className="fs-h4" to="/fem_photosnap/stories">
            stories
          </Link>
          <Link className="fs-h4" to="/fem_photosnap/features">
            features
          </Link>
          <Link className="fs-h4" to="/fem_photosnap/pricing">
            pricing
          </Link>
        </div>
      </div>
      <div className="legal">
        <a
          href="https://4chan.org/g/catalog"
          target="_blank"
          className="button-secondary white fs-h4"
        >
          <span>get an invite</span>
          <IconArrow />
        </a>
        <p className="fs-body-1">Copyright 2019. All Rights Reserved</p>
      </div>
    </SCFooter>
  );
}
