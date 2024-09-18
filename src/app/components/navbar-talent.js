"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link as Link1 } from "react-scroll";

import * as Unicons from "@iconscout/react-unicons";

export default function Navbar(props) {
  const [isOpen, setMenu] = useState(true);
  const [navbarTop, setNavbarTop] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
  }, []);

  function windowScroll() {
    setNavbarTop(
      document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50
    );
  }
  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <>
      <nav
        className={`${
          navbarTop === true ? "is-sticky bg-[color:var(--dark-grey-color55565B)]" : ""
        } navbar font-lexend `}
        id="navbar"
      >
        <div className="container flex flex-wrap items-center justify-end">
        <a className="navbar-brand md:me-8 w-[240px]" href="/">
            <span className="inline-block dark:hidden">
              <Image 
                src="/images/Logo-stork.png"
                alt=""
                width={140}
                height={36}
              />
            </span>
            <Image
              src="/images/Logo-stork.png"
              className="hidden dark:inline-block"
              alt=""
              width={113}
              height={28}
            />
          </a>

          <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">
            <button
              data-collapse="menu-collapse"
              type="button"
              onClick={toggleMenu}
              className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
              aria-controls="menu-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu text-[24px]"></i>
            </button>
          </div>
          <div
            className={`${
              isOpen === true
                ? "navigation lg_992:order-1 lg_992:flex hidden ms-auto "
                : "navigation lg_992:order-1 lg_992:flex ms-auto block"
            }`}
            id="menu-collapse"
          >
            <ul
              className="navbar-nav nav-light justify-center align-middle"
              style={{
                overflow: isOpen === true ? "visible" : "hidden",
              }} 
              id="navbar-navlist"
            >
              <li className={`nav-item`}>
                <Link1
                  to="home-talent"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link1>
              </li>

              <li className={`nav-item`}>
                <Link1
                  to="services-talent"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Services
                </Link1>
              </li>

              <li className={`nav-item`}>
                <Link1
                  to="get-in-touch-talent"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Get In Touch
                </Link1>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
