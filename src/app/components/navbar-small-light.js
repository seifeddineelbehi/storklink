"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from "react-scroll";
import * as Unicons from "@iconscout/react-unicons";

export default function NavbarSmallLight() {
  const [isOpen, setMenu] = useState(true);
  const [navbarTop, setNavbarTop] = useState(false);

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
        <div className="container flex flex-wrap items-center ">
          {/* Logo */}
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

          {/* Navigation icons and toggle button */}
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

          {/* Main menu items */}
          <div
            className={` ${
              isOpen === true
                ? "navigation lg_992:order-1 lg_992:flex hidden ms-auto"
                : "navigation lg_992:order-1 lg_992:flex block ms-auto"
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
                  to="home"
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
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link "
                >
                  About Us
                </Link1>
              </li>
              <li className={`nav-item`}>
                <Link1
                  to="features"
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
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact us
                </Link1>
              </li>
            </ul>
          </div>

          {/* Secondary menu items */}
          <div
            className={`${
              isOpen === true
                ? "navigation lg_992:order-1 lg_992:flex hidden ms-auto"
                : "navigation lg_992:order-1 lg_992:flex block ms-auto"
            }`}
            id="menu-collapse"
          >
            <ul
              className="navbar-nav nav-light flex  align-right "
              id="navbar-navlist"
              style={{
                overflow: isOpen === true ? "visible" : "hidden",
              }} 
            >
              <li className={`nav-item`}>
                <Link
                  href="/employers"
                  className="justify-center py-2 px-5 w-[120px]  tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-l-full rounded-r-none  font-semibold inline-flex items-center gap-1"
                >
                  Employers
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  href="/talent"
                  className="justify-center py-2 px-5 w-[120px]  tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-r-full rounded-l-none  font-semibold inline-flex items-center gap-1"
                >
                  Talents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
