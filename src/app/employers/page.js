"use client";
import React, { useState,useRef } from "react";
import dynamic from "next/dynamic";
import { Alert } from "@material-tailwind/react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import emailJs from '@emailjs/browser'
const Navbar = dynamic(() => import("../components/navbar-employers"));
const Switcher = dynamic(() => import("../components/Switcher"));
const Footer = dynamic(() => import("../components/footer"));
const ContactData = dynamic(() => import("../components/contact-data"));
const EmployersServices = dynamic(()=>import('../components/employers-services'));

export default function Employers() {
  const form = useRef();
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
      );}
  };
  const [selectedFile, setSelectedFile] = useState("No file chosen");
  return (
    <>
      <Navbar />
    
        <section className="py-36 lg:py-56 w-full table relative" id="home-employers">
        <img
          src="/images/For employers.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white font-lexend">
            Lead with Precision and Insight
            </h3>
            <p className="text-slate-200 text-2xl max-w-6xl mx-auto font-inter">
            At StorkLink, we connect you with top-tier professionals tailored to your needs. Our services combine human expertise and market insights, ensuring you find the best candidates for crucial roles and support your organization’s success.
            </p>
          </div>
        </div>
      </section>
      <EmployersServices/>

      <section className="relative lg:py-24 py-16 " id="get-in-touch-employers">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
          Partner with StorkLink
          </h3>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
          Combine our human expertise with market insights to find exceptional talent. Contact us to elevate your staffing solutions and drive success.

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
                    method="post"
                    name="myForm"
                    id="myForm"
                    onsubmit="return validateForm()"
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
                          Company Name <span style={{ color: 'red' }}>*</span>:
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
                          htmlFor="location"
                          className="form-label font-medium"
                        >
                          Industry/Field <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="industry"
                          id="industry"
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
                          Contact Person <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="contact"
                          id="contact"
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
                          Job Title <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
                          name="job-title"
                          id="job-title"
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
                          Email Address <span style={{ color: 'red' }}>*</span>:
                        </label>
                        <input  required={true}
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
                          Company Website:
                        </label>
                        <input 
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
                          htmlFor="job-title"
                          className="form-label font-medium"
                        >
                          Job Title:
                        </label>
                        <input  
                          name="job-title"
                          id="job-title"
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
                          htmlFor="experience-years"
                          className="form-label font-medium"
                        >
                          Key Responsibilities:
                        </label>
                        <input  
                          name="key-resp"
                          id="key-resp"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="skills-certifications"
                          className="form-label font-medium"
                        >
                          Required Skills and Qualifications:
                        </label>
                        <input 
                          name="skills-qualifications"
                          id="skills-qualifications"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
                      </div>
                      <br />
                      <div className="mb-5">
                        <label
                          htmlFor="skills-certifications"
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
                          htmlFor="desired-role"
                          className="form-label font-medium"
                        >
                          Desired Location(s) in Germany:
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
                          Special Requirements or Preferences:
                        </label>
                        <input 
                          name="special-req"
                          id="special-req"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"
                          placeholder=""
                        />
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
