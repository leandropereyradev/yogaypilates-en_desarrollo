/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import useScreenWidth from "../hook/useScreenWidth";

export default function NavBar({ menues, image }) {
  const { width } = useScreenWidth();

  const hamburgerLine = `h-1 w-7 my-1 rounded-full bg-slate-700 transition ease transform duration-300`;

  const [open, setOpen] = useState(false);

  return (
    <nav className="nav__container">
      <div className="nav__container--menu">
        <div>
          <Link href="/">
            <a>
              <img src={image} alt="logo" className="w-8 ml-2 md:ml-0" />
            </a>
          </Link>
        </div>
        <div>
          <ul
            className={`nav__menu ${width < 700 && "nav__menu--responsive"} ${width >= 700 && "nav__menu--large"} ${
              open && "nav__menu--opened"
            }`}
          >
            {menues &&
              menues.map(([title, ref], index) => (
                <Link key={index} href={ref}>
                  <a>{title}</a>
                </Link>
              ))}
          </ul>
        </div>
        {width < 700 && (
          <div className="relative">
            <button className="nav__hamburger" onClick={() => setOpen(!open)}>
              <div className={`${hamburgerLine} ${open && "rotate-45 translate-y-3"}`} />
              <div className={`${hamburgerLine} ${open && "opacity-0"}`} />
              <div className={`${hamburgerLine} ${open && "-rotate-45 -translate-y-3"}`} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// `
