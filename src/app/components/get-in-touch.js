"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { Alert } from "@material-tailwind/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useIsVisible } from "./use_is_visible";

export default function GetInTouch() {
  const isVisible = useRef();
  const isVisible1 = useIsVisible(isVisible);
  const form = useRef();
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
      data.formType = "Contact";

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

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="contact"
      >
        <div
          ref={isVisible}
          className={`container ${
            isVisible1
              ? "animate-fade-up animate-once animate-duration-5000 animate-ease-in"
              : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl font-medium">
              Get In Touch !
            </h3>
            <p className="text-slate-400 dark:text-slate-300 max-w-4xl mx-auto">
              We&apos;re here to assist you with all your needs, whether
              you&apos;re looking for the perfect career opportunity or seeking
              top talent for your organization. Reach out to us using the
              contact details below or fill out the form to get in touch.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid lg:grid-cols-12 lg:gap-[30px]">
                    <div className="lg:col-span-6 mb-5">
                      <input
                        required={true}
                        name="name"
                        id="name"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <input
                        required={true}
                        name="email"
                        id="email"
                        type="email"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <input
                        required={true}
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                        placeholder="Phone Number :"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        required={true}
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>

                    <div className="mb-5">
                      <textarea
                        required={true}
                        name="message"
                        id="message"
                        className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 h-28"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={setCaptcha}
                  ></ReCAPTCHA>
                  <br />
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    disabled={isLoading}
                    className="py-2 px-5 inline-flex items-center justify-center font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
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
    </>
  );
}
