"use client";
import React, { useState,useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import emailJs from '@emailjs/browser'
import { Alert } from "@material-tailwind/react";
import { useIsVisible } from "../../components/use_is_visible";
const Navbar = dynamic(() => import("../../components/navbar-talent"));
const Switcher = dynamic(() => import("../../components/Switcher"));
const Footer = dynamic(() => import("../../components/footer"));
const ContactData = dynamic(() => import("../../components/contact-data"));
const TalentServices = dynamic(()=>import('../../components/talent-services'));

export default function Talent() {
  const form = useRef();
  const isVisible = useRef();
  const isVisible1 = useIsVisible(isVisible);
  const isHeaderVisible2 = useRef();
  const isVisible2 = useIsVisible(isHeaderVisible2);
  const [emailStatus, setEmailStatus] = useState('');
  const [captcha, setCaptcha] = useState();
  const sendEmail = (e) => {
    e.preventDefault();  
    if(captcha){
      emailJs
      .sendForm('service_0c1tir6', 'template_zsydxlw', form.current, {
        publicKey: 'nJLwlSQHPG_-JEQNX',
      })
      .then( 
        () => {
          console.log('SUCCESS!');
          setEmailStatus('success');
          form.current.reset();
          setTimeout(() => {
            setEmailStatus('');
          }, 2000);
        },
        (error) => {
          setEmailStatus('error');
            setTimeout(() => {
                setEmailStatus('');
              }, 2000);
          console.log('FAILED...', error.text);
        },
      );
    }
    
  };
  const [selectedFile, setSelectedFile] = useState("No file chosen");
  return (
    <>
      <Navbar />
      
        <section className="py-36 lg:py-56 w-full table relative" id="home-talent">
        <img
          src="/images/for talents.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
        <div ref={isHeaderVisible2}  
      className={`container ${ 
        isVisible2
          ? "animate-fade animate-once animate-duration-1000 animate-ease-in"
          : "opacity-0"
      }`}>
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
      <TalentServices/>

      <section
      ref={isVisible}  
      className={`relative lg:py-24 py-16 ${
        isVisible1 
          ? "animate-fade-up animate-once animate-duration-5000 animate-ease-in"
          : "opacity-0"
      }`} id="get-in-touch-talent">
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
                  <form
                    ref={form} onSubmit={sendEmail}
                  >
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
                          Full Name <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="name"
                          id="name"
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
                          Your Email <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="user_email"
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
                          Phone Number <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="phone"
                          id="phone"
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
                          Current Location (City, Country) <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="location"
                          id="location"
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
                          Industry/Field <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="industry-field"
                          id="industry-field"
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
                          Years of Experience <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="experience-years"
                          id="experience-years"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
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
                              value="Full time"
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
                              value="Part time"
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
                          htmlFor="empl-type"
                          className="form-label font-medium"
                        >
                          Are you open to relocation?:
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="relocation"
                              name="relocation"
                              value="Yes"
                              className="bg-green-500 rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="Yes"
                              className="ml-2 dark:text-slate-200"
                            >
                              Yes
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="relocation"
                              name="relocation"
                              value="No"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="No"
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
                          htmlFor="empl-type"
                          className="form-label font-medium"
                        >
                          Proficiency in German:
                        </label>
                        <div className="mt-2">
                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency"
                              name="proficiency"
                              value="Beginner"
                              className="bg-green-500 rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="Beginner"
                              className="ml-2 dark:text-slate-200"
                            >
                              Beginner
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency"
                              name="proficiency"
                              value="Intermediate"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="Intermediate"
                              className="ml-2 dark:text-slate-200"
                            >
                              Intermediate
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency"
                              name="proficiency"
                              value="Advanced"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="Advanced"
                              className="ml-2 dark:text-slate-200"
                            >
                              Advanced
                            </label>
                          </div>

                          <div className="flex items-center mb-2">
                            <input
                              type="radio"
                              id="proficiency"
                              name="proficiency"
                              value="Fluent"
                              className="radio-button rounded-full w-4 h-4"
                            />
                            <label
                              htmlFor="Fluent"
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
                          htmlFor="desired-role"
                          className="form-label font-medium"
                        >
                          Other Languages Spoken:
                        </label>
                        <input 
                          name="lang-spoken"
                          id="lang-spoken"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
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
                          htmlFor="desired-role"
                          className="form-label font-medium"
                        >
                          Why are you interested in working in Germany?:
                        </label>
                        <textarea
                          name="interest"
                          id="interest"
                          className="h-28 form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <br />
                    <div className="grid grid-cols-1">
                      <div className="mb-5"> 
                        <label
                          htmlFor="desired-role"
                          className="form-label font-medium"
                        >
                          Upload your CV (PDF, DOC, max 5MB):
                        </label>
                        <div class="flex flex-row items-center">
                          <input
                            type="file"
                            id="custom-input"
                            onChange={(e) => {
                              if (e.target.files.length > 0) {
                                setSelectedFile(e.target.files[0].name);
                              }
                            }}
                            hidden
                          />
                          <label
                            for="custom-input"
                            class="block text-sm  mr-4 py-2 px-4
            rounded-md border-0 font-semibold bg-[color:var(--main-color)]
            hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] cursor-pointer"
                          >
                            Choose file
                          </label>
                          <label class="text-sm text-slate-500">
                            {selectedFile}
                          </label>
                        </div>
                      </div>
                    </div>
                    <br />
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha}></ReCAPTCHA>
                    <br />
                    <br />
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="w-full py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)]
            hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)] rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div  >
                    {emailStatus === 'success' && <Alert color="green" className="flex w-full flex-col gap-2 h-[50px] justify-center">Email Sent Successfully</Alert>}
                    {emailStatus === 'error' && <Alert color="red">Failed to Send Email</Alert>}

                    </div>
        </div>
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
