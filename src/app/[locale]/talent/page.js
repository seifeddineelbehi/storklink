"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from "@material-tailwind/react";
import { useIsVisible } from "../../components/use_is_visible";
const Navbar = dynamic(() => import("../../components/navbar-talent"));
const Switcher = dynamic(() => import("../../components/Switcher"));
const Footer = dynamic(() => import("../../components/footer"));
const ContactData = dynamic(() => import("../../components/contact-data"));
const TalentServices = dynamic(() =>
  import("../../components/talent-services")
);

export default function Talent() {
  const form = useRef();
  const isVisible = useRef();
  const isVisible1 = useIsVisible(isVisible);
  const isHeaderVisible2 = useRef();
  const isVisible2 = useIsVisible(isHeaderVisible2);
  const [emailStatus, setEmailStatus] = useState("");
  const [captcha, setCaptcha] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

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
      data.formType = "Talent";

      // Handle file upload
      if (selectedFile) {
        // Check file size (5MB max)
        if (selectedFile.size > 5 * 1024 * 1024) {
          alert("File size must be less than 5MB");
          setIsLoading(false);
          return;
        }

        // Convert file to base64
        const base64File = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });

        data.cvFile = {
          name: selectedFile.name,
          type: selectedFile.type,
          data: base64File,
        };
      }

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
        setSelectedFile(null);
        setSelectedFileName("No file chosen");
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

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  return (
    <>
      <Navbar />

      <section
        className="py-36 lg:py-56 w-full table relative"
        id="home-talent"
      >
        <img
          src="/images/for talents.jpg"
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
              Rise with Purpose and Precision
            </h3>
            <p className="text-slate-200 text-2xl max-w-6xl mx-auto font-inter">
              At StorkLink, we connect talented professionals with leading
              employers in Germany, aligning your talents and goals with the
              right opportunities. Our personalized support and market expertise
              guide you through your journey, ensuring a smooth transition into
              roles where you can thrive and advance your career.
            </p>
          </div>
        </div>
      </section>
      <TalentServices />

      <section
        ref={isVisible}
        className={`relative lg:py-24 py-16 ${
          isVisible1
            ? "animate-fade-up animate-once animate-duration-5000 animate-ease-in"
            : "opacity-0"
        }`}
        id="get-in-touch-talent"
      >
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
            Get in Touch with StorkLink
          </h3>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
            Ready to advance your career in Germany? Contact us to discover how
            StorkLink can connect you with top employers and help you achieve
            your professional goals.
          </p>
          <br />
          <br />
        </div>
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-12 md:col-span-12">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <form ref={form} onSubmit={sendEmail}>
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <br />
                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Personal Information:
                    </h3>
                    <br />

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="name"
                          className="form-label font-medium"
                        >
                          Full Name <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="name"
                          id="name"
                          type="text"
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
                          Your Email <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="email"
                          id="email"
                          type="email"
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
                          name="phone"
                          id="phone"
                          type="tel"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="location"
                          className="form-label font-medium"
                        >
                          Current Location (City, Country){" "}
                          <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="location"
                          id="location"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="linkedin"
                          className="form-label font-medium"
                        >
                          LinkedIn Profile:
                        </label>
                        <input
                          name="linkedin"
                          id="linkedin"
                          type="url"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>
                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Professional Background:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="current-position"
                          className="form-label font-medium"
                        >
                          Current Position:
                        </label>
                        <input
                          name="current-position"
                          id="current-position"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="industry-field"
                          className="form-label font-medium"
                        >
                          Industry/Field <span style={{ color: "red" }}>*</span>
                          :
                        </label>
                        <input
                          required={true}
                          name="industry-field"
                          id="industry-field"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="experience-years"
                          className="form-label font-medium"
                        >
                          Years of Experience{" "}
                          <span style={{ color: "red" }}>*</span>:
                        </label>
                        <input
                          required={true}
                          name="experience-years"
                          id="experience-years"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="e.g., 5 years"
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="skills-certifications"
                          className="form-label font-medium"
                        >
                          Key Skills & Certifications:
                        </label>
                        <textarea
                          name="skills-certifications"
                          id="skills-certifications"
                          rows="3"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="List your key skills and relevant certifications"
                        ></textarea>
                      </div>
                    </div>
                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Job Preferences:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="desired-role"
                          className="form-label font-medium"
                        >
                          Desired Role in Germany:
                        </label>
                        <input
                          name="desired-role"
                          id="desired-role"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="pref-location"
                          className="form-label font-medium"
                        >
                          Preferred Location(s) in Germany:
                        </label>
                        <input
                          name="pref-location"
                          id="pref-location"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="e.g., Berlin, Munich, Hamburg"
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
                          htmlFor="availability"
                          className="form-label font-medium"
                        >
                          Availability to Start:
                        </label>
                        <input
                          name="availability"
                          id="availability"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="e.g., Immediate, 2 weeks notice, 1 month"
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="relocation"
                          className="form-label font-medium"
                        >
                          Are you open to relocation?:
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="relocation-yes"
                              name="relocation"
                              value="Yes"
                              className="bg-green-500 rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="relocation-yes"
                              className="ml-2 dark:text-slate-200"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="relocation-no"
                              name="relocation"
                              value="No"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="relocation-no"
                              className="ml-2 dark:text-slate-200"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Language Proficiency:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="proficiency"
                          className="form-label font-medium"
                        >
                          Proficiency in German:
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency-beginner"
                              name="proficiency"
                              value="Beginner"
                              className="bg-green-500 rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="proficiency-beginner"
                              className="ml-2 dark:text-slate-200"
                            >
                              Beginner
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency-intermediate"
                              name="proficiency"
                              value="Intermediate"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="proficiency-intermediate"
                              className="ml-2 dark:text-slate-200"
                            >
                              Intermediate
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency-advanced"
                              name="proficiency"
                              value="Advanced"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="proficiency-advanced"
                              className="ml-2 dark:text-slate-200"
                            >
                              Advanced
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency-fluent"
                              name="proficiency"
                              value="Fluent"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="proficiency-fluent"
                              className="ml-2 dark:text-slate-200"
                            >
                              Fluent
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="lang-spoken"
                          className="form-label font-medium"
                        >
                          Other Languages Spoken:
                        </label>
                        <input
                          name="lang-spoken"
                          id="lang-spoken"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="e.g., English (Fluent), French (Intermediate)"
                        />
                      </div>
                    </div>

                    <br />

                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">
                      Additional Information:
                    </h3>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="additional-info"
                          className="form-label font-medium"
                        >
                          Why are you interested in working in Germany?:
                        </label>
                        <textarea
                          name="additional-info"
                          id="additional-info"
                          rows="4"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder="Share your motivations and goals..."
                        ></textarea>
                      </div>
                    </div>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="cv-upload"
                          className="form-label font-medium"
                        >
                          Upload your CV (PDF, DOC, DOCX - max 5MB):
                        </label>
                        <div className="flex flex-row items-center mt-2">
                          <input
                            type="file"
                            id="cv-upload"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            hidden
                          />
                          <label
                            htmlFor="cv-upload"
                            className="block text-sm mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] cursor-pointer"
                          >
                            Choose file
                          </label>
                          <label className="text-sm text-slate-500 dark:text-slate-400">
                            {selectedFileName}
                          </label>
                        </div>
                        {selectedFile && (
                          <p className="text-xs text-slate-500 mt-2">
                            File size:{" "}
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        )}
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
                      className="w-full py-2 px-5 inline-flex items-center justify-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="flex w-full flex-col gap-2 h-[50px] justify-center mt-4"
              >
                Email Sent Successfully
              </Alert>
            )}
            {emailStatus === "error" && (
              <Alert color="red" className="mt-4">
                Failed to Send Email
              </Alert>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
