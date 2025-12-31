"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { Alert } from "@material-tailwind/react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useIsVisible } from "../../components/use_is_visible";
const Navbar = dynamic(() => import("../../components/navbar-employers"));
const Switcher = dynamic(() => import("../../components/Switcher"));
const Footer = dynamic(() => import("../../components/footer"));
const ContactData = dynamic(() => import("../../components/contact-data"));
const EmployersServices = dynamic(() =>
  import("../../components/employers-services")
);

export default function Employers() {
  const form = useRef();
  const isVisible = useRef();
  const isVisible1 = useIsVisible(isVisible);
  const isHeaderVisible2 = useRef();
  const isVisible2 = useIsVisible(isHeaderVisible2);
  const [emailStatus, setEmailStatus] = useState("");
  const [captcha, setCaptcha] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!captcha) {
      alert("Please complete the CAPTCHA");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData(form.current);
      const data = Object.fromEntries(formData);
      data.formType = "Employer";

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setEmailStatus("success");
        form.current.reset();
        setCaptcha(null);
        setTimeout(() => setEmailStatus(""), 3000);
      } else {
        setEmailStatus("error");
        setTimeout(() => setEmailStatus(""), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setEmailStatus("error");
      setTimeout(() => setEmailStatus(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const [selectedFile, setSelectedFile] = useState("No file chosen");

  return (
    <>
      <Navbar />

      <section
        className="py-36 lg:py-56 w-full table relative"
        id="home-employers"
      >
        <img
          src="/images/For employers.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
        <div
          ref={isHeaderVisible2}
          className={`container ${
            isVisible2
              ? "animate-fade animate-once animate-duration-1000 animate-ease-in"
              : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white font-lexend">
              Lead with Precision and Insight
            </h3>
            <p className="text-slate-200 text-2xl max-w-6xl mx-auto font-inter">
              At StorkLink, we connect you with top-tier professionals tailored
              to your needs. Our services combine human expertise and market
              insights, ensuring you find the best candidates for crucial roles
              and support your organization's success.
            </p>
          </div>
        </div>
      </section>
      <EmployersServices />

      <section
        ref={isVisible}
        className={`relative lg:py-24 py-16 ${
          isVisible1
            ? "animate-fade-up animate-once animate-duration-5000 animate-ease-in"
            : "opacity-0"
        }`}
        id="get-in-touch-employers"
      >
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
            Partner with StorkLink
          </h3>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
            Combine our human expertise with market insights to find exceptional
            talent. Contact us to elevate your staffing solutions and drive
            success.
          </p>
          <br />
          <br />
        </div>
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-12 md:col-span-12">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <form
                    ref={form}
                    method="post"
                    name="myForm"
                    id="myForm"
                    onSubmit={sendEmail}
                  >
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <br />
                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Company Information:
                    </h3>
                    <br />

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="name"
                          className="form-label font-medium"
                        >
                          Company Name <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="name"
                          id="name"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="industry"
                          className="form-label font-medium"
                        >
                          Industry/Field <span style={{ color: "red" }}>*</span>
                          :
                        </label>
                        <input
                          required={true}
                          name="industry"
                          id="industry"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="contact"
                          className="form-label font-medium"
                        >
                          Contact Person <span style={{ color: "red" }}>*</span>
                          :
                        </label>
                        <input
                          required={true}
                          name="contact"
                          id="contact"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="job-title-contact"
                          className="form-label font-medium"
                        >
                          Job Title <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="job-title-contact"
                          id="job-title-contact"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="form-label font-medium"
                        >
                          Email Address <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          type="email"
                          name="email"
                          id="email"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="phone"
                          className="form-label font-medium"
                        >
                          Phone Number <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="website"
                          className="form-label font-medium"
                        >
                          Company Website:
                        </label>
                        <input
                          type="url"
                          name="website"
                          id="website"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Position Details:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="position-job-title"
                          className="form-label font-medium"
                        >
                          Job Title:
                        </label>
                        <input
                          name="position-job-title"
                          id="position-job-title"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="department"
                          className="form-label font-medium"
                        >
                          Department:
                        </label>
                        <input
                          name="department"
                          id="department"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="empl-type"
                          className="form-label font-medium"
                        >
                          Employment Type:
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="full-time"
                              name="empl-type"
                              value="Full-time"
                              className="bg-green-500 rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="full-time"
                              className="ml-2 dark:text-slate-200"
                            >
                              Full-time
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="part-time"
                              name="empl-type"
                              value="Part-time"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="part-time"
                              className="ml-2 dark:text-slate-200"
                            >
                              Part-time
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="contract"
                              name="empl-type"
                              value="Contract"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="contract"
                              className="ml-2 dark:text-slate-200"
                            >
                              Contract
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />

                      <div className="mb-5">
                        <label
                          htmlFor="key-resp"
                          className="form-label font-medium"
                        >
                          Key Responsibilities:
                        </label>
                        <textarea
                          name="key-resp"
                          id="key-resp"
                          rows="3"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        ></textarea>
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="skills-qualifications"
                          className="form-label font-medium"
                        >
                          Required Skills and Qualifications:
                        </label>
                        <textarea
                          name="skills-qualifications"
                          id="skills-qualifications"
                          rows="3"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        ></textarea>
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="pref-exp-lvl"
                          className="form-label font-medium"
                        >
                          Preferred Experience Level:
                        </label>
                        <input
                          name="pref-exp-lvl"
                          id="pref-exp-lvl"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Candidate Preferences:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="desired-location"
                          className="form-label font-medium"
                        >
                          Desired Location(s) in Germany:
                        </label>
                        <input
                          name="desired-location"
                          id="desired-location"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>

                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="special-req"
                          className="form-label font-medium"
                        >
                          Special Requirements or Preferences:
                        </label>
                        <textarea
                          name="special-req"
                          id="special-req"
                          rows="3"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        ></textarea>
                      </div>
                    </div>

                    <br />
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={setCaptcha}
                    ></ReCAPTCHA>
                    <br />
                    <br />
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      disabled={isLoading}
                      className="w-full py-2 px-5 inline-flex items-center justify-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)]
            hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            {emailStatus === "success" && (
              <Alert
                color="green"
                className="flex w-full flex-col gap-2 h-[50px] justify-center"
              >
                Email Sent Successfully
              </Alert>
            )}
            {emailStatus === "error" && (
              <Alert color="red">Failed to Send Email</Alert>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
