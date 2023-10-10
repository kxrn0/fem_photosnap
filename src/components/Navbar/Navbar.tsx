import { Link } from "wouter";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { ChangeEvent, useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const toggleClass = isMounted ? (isOpen ? "shown" : "hidden") : "";

  function handle_toggle(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const checked = target.checked;

    setIsOpen(checked);
    setIsMounted(true);
  }

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <SCNavbar>
      <div className="content">
        <Link to="/fem_photosnap/" aria-label="home">
          <span>
            <Logo />
          </span>
        </Link>
        <label className={`menu-toggle ${isOpen && "open"}`}>
          <input
            type="checkbox"
            aria-label="toggle navbar"
            checked={isOpen}
            onChange={handle_toggle}
          />
        </label>
        <div className={`links ${toggleClass}`}>
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
            href="https://4chan.org/g/catalog"
            target="_blank"
          >
            get an invite
          </a>
        </div>
      </div>
      <div
        className={`overlay ${isOpen ? "shown" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </SCNavbar>
  );
}
