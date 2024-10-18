"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import emailJs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";
const Navbar = dynamic(() => import("../../components/navbar-talent"));
const Switcher = dynamic(() => import("../../components/Switcher"));
const Footer = dynamic(() => import("../../components/footer"));
const ContactData = dynamic(() => import("../../components/contact-data"));
const TalentServices = dynamic(() => import("../../components/talent-services"));

export default function Talent() {
  return (
    <>
      <section className="relative lg:py-24 py-16 flex justify-center items-center">
        <div className="pb-8 max-w-3xl">
          <h1 className="text-center text-[color:var(--darkest-grey-color)] mb-4 md:text-6xl text-5xl font-bold font-lexend">
            Accessibility
          </h1>
          <br />
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Accessibility statement.
          </h3>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            This website strives to meet Level AA conformance of the World Wide
            Web Consortium (W3C) Web Content Accessibility Guidelines 2.0.
          </p>
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Navigation
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            We have implemented a skippable area concept on each page to allow
            screen reader users to easily navigate to the main areas of the
            content.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Headings and Navigation Menus
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            HTML heading tags are used to establish document structure, with H1
            tags for main titles and H2 tags for subtitles. Navigation menus are
            marked up as HTML lists, ensuring that the number of links is
            announced at the start and can be easily skipped.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Images
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            All images on this site include descriptive alt attributes to convey
            their purpose and content.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Colors
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            We have chosen font and background color combinations that
            significantly contrast to ensure clarity across different color
            combinations. Users can override the site&apos;s colors by adjusting
            their browser settings.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Font Size
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            The font size on our site is adjustable. Users can change the font
            size through their browser settings according to their preferences.
          </p>

          <br /> 
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Forms and Fields
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            All form fields follow a logical tab sequence for easy navigation.
            Most fields include &apos;label&apos; and &apos;id&apos; attributes to explicitly
            associate them with their labels, facilitating data entry.
            Additionally, mandatory fields are marked with an asterisk *.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            JavaScript
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            The use of JavaScript on our site has been minimized to enhance
            accessibility.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Links
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            All links are designed to make sense when taken out of context, and
            links that open in a new window are clearly indicated in the alt
            tag. Furthermore, text links are underlined to ensure they are
            easily identifiable.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Movement
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            We have minimized the use of animated images on our site to ensure
            accessibility for all users.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            Video
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            Video content on our site includes text transcripts for deaf users.
            Videos without audio content do not require a transcript.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            PDFs{" "}
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            All PDF downloads are made with accessibility in mind. If you
            require an alternative version, please contact us.
          </p>
        </div>
      </section>
    </>
  );
}
