/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import useScreenWidth from "../hook/useScreenWidth";
import s from "../styles/menu.module.scss";

export default function NavBar({ menues, image }) {

  const [open, setOpen] = useState(false);

  return (
    <nav className={s.nav}>
      <div className={s.nav_container}>
        <div>
          <Link href="/">
            <a>
              <img src={image} alt="logo" />
            </a>
          </Link>
        </div>
        <div>
          <ul className={`${s.responsive} ${open && s.open}`}>
            {menues &&
              menues.map(([title, ref], index) => (
                <li key={index}>
                  <Link href={ref}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className={s.nav_container_hamburger}>
          <button onClick={() => setOpen(!open)}>
            <div className={`${s.hamburgerLine} ${open && s.a}`} />
            <div className={`${s.hamburgerLine} ${open && s.b}`} />
            <div className={`${s.hamburgerLine} ${open && s.c}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}

// `
