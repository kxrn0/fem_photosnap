import { Link } from "wouter";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { useState } from "react";
import IconX from "../../icons/IconX.tsx";
import IconMenu from "../../icons/IconMenu.tsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SCNavbar>
      <Link to="/fem_photosnap/">
        <span>
          <Logo />
        </span>
      </Link>
      <label className="menu-toggle">
        {isOpen ? <IconX /> : <IconMenu />}
        <input type="checkbox" aria-label="toggle navbar" />
      </label>
      <div className="links">
        <div className="local-links">
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
        <a
          className="fs-h4 button-primary black"
          href="https://4chan.org/g"
          target="_blank"
        >
          get an invite
        </a>
      </div>
    </SCNavbar>
  );
}
