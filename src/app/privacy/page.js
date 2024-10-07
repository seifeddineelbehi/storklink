"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import emailJs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";
const Navbar = dynamic(() => import("../components/navbar-talent"));
const Switcher = dynamic(() => import("../components/Switcher"));
const Footer = dynamic(() => import("../components/footer"));
const ContactData = dynamic(() => import("../components/contact-data"));
const TalentServices = dynamic(() => import("../components/talent-services"));

export default function Talent() {
  return (
    <>
      <section className="relative lg:py-24 py-16 flex justify-center items-center">
        <div className="pb-8 max-w-3xl">
          <h1 className="text-center text-[color:var(--darkest-grey-color)] mb-4 md:text-6xl text-5xl font-bold font-lexend">
            Privacy Policy
          </h1>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            At StorkLink, we prioritize the privacy of all individuals whose
            data we collect. We are committed to safeguarding your personal
            information and ensuring it is handled in accordance with applicable
            laws in every jurisdiction where we operate
          </p>
          <br />
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-bold font-lexend">
            What Personal Data Do We Collect?
          </h3>
          <br />
          <h5 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-3xl text-2xl font-bold font-lexend">
            1. Candidates:
          </h5>

          <ul className="list-disc mt-6">
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Identification Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may collect your name, contact details (including home
                address and phone numbers), citizenship, date of birth, gender
                (if applicable), and languages spoken.{" "}
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Recruitment Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                This includes your CV/resume, work history, skills, educational
                background, and any additional relevant information provided
                during the application process, such as photographs or interview
                notes.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Compensation and Benefits Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may process details regarding your current compensation,
                bonuses, and benefits.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Government-Issued Identifiers:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may need to collect identification numbers as legally
                required.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Visitor Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may collect data regarding your access to our facilities for
                security purposes.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Information You Share:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                Any additional personal data you choose to provide us.
              </span>
            </li>
          </ul>
          <br />
          <br />
          <h5 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-3xl text-2xl font-bold font-lexend">
            2. Clients and Business Contacts:
          </h5>

          <ul className="list-disc mt-6">
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Identification Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We collect names and contact details (email, phone) of
                individuals working for companies we are engaging with.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Professional Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                Job titles, department, location, and other work-related details
                may be processed.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Photographs and Videos:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may capture images or video footage during our events or
                meetings.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Visitor Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                When entering our premises, we may collect personal information
                for security, including health-related information as necessary.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Sanctions Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We may verify if you are subject to trade sanctions as required
                by law.
              </span>
            </li>
          </ul>
          <br />
          <br />
          <h5 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-3xl text-2xl font-bold font-lexend">
            3. Website Visitors::
          </h5>

          <ul className="list-disc mt-6">
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Device Information:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We collect data related to your device, such as IP address,
                browser type, operating system, and navigation patterns on our
                website.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Cookies and Tracking:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                We utilize cookies to enhance user experience and analyze
                website traffic.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-bold font-lexend">
                Form Submissions:{" "}
              </span>
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                If you choose to download resources or subscribe to our
                communications, we may collect information such as your name and
                email address.
              </span>
            </li>
          </ul>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-bold font-lexend">
            Why Do We Need Your Personal Data?
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            We utilize your personal information for various purposes,
            including:
          </p>
          <ul className="list-disc mt-6">
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                To facilitate recruitment processes.{" "}
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                To maintain and enhance our business relationships.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                To ensure compliance with legal and regulatory obligations.
              </span>
            </li>
            <br />
            <li className="text-[color:var(--darkest-grey-color)] mx-5">
              <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-normal font-inter mx-auto">
                To provide you with tailored services and improve your
                experience with StorkLink.
              </span>
            </li>
          </ul>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-bold font-lexend">
            How Long Do We Keep Your Personal Data?
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            We retain your personal data only as long as necessary to fulfill
            the purposes outlined in this privacy policy, comply with legal
            obligations, resolve disputes, and enforce our agreements.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-bold font-lexend">
            Your Rights
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            You have certain rights regarding your personal data, including the
            right to access, correct, or delete your information, as well as the
            right to withdraw consent at any time where applicable. If you have
            any questions or wish to exercise your rights, please contact us.
          </p>
        </div>
      </section>
    </>
  );
}
