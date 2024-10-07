'use client'
import React, { useRef,useState } from 'react'
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';
import emailJs from '@emailjs/browser'
import { Alert } from "@material-tailwind/react";
import ReCAPTCHA from "react-google-recaptcha";

export default function GetInTouch() {
    const form = useRef();
    const [emailStatus, setEmailStatus] = useState('');
    const [captcha, setCaptcha] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    if(captcha){
    emailJs
      .sendForm('service_0c1tir6', 'template_d0r0x8c', form.current, {
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
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium">Get In Touch !</h3>
                        <p className="text-slate-400 dark:text-slate-300 max-w-4xl  mx-auto">We’re here to assist you with all your needs, whether you’re looking for the perfect career opportunity or seeking top talent for your organization. Reach out to us using the contact details below or fill out the form to get in touch.
</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="grid lg:grid-cols-12 lg:gap-[30px]">
                                        <div className="lg:col-span-6 mb-5">

                                            <input required={true} name="user_name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Name :" />
                                        </div> 

                                        <div className="lg:col-span-6 mb-5">
                                            <input required={true} name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Email :" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                            <input required={true} type="number" name="phoneNumber" id="phoneNumber" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Phone Number :" />
                                        </div>
                                        <div className="mb-5">
                                            <input required={true} name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Subject :" />
                                        </div>

                                        <div className="mb-5">
                                            <textarea required={true} name="comments" id="comments"
                                                className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 h-28"
                                                placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <br />
                                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={setCaptcha}></ReCAPTCHA>
                                    <br />
                                    <button type="submit" id="submit" name="send"
                                        className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color-hover)] text-[color:var(--dark-grey-color)]rounded-md">Send
                                        Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                            <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilHome className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Address</h5>
                                         <p className="text-slate-400">Rümelinstr. 28 70191 Stuttgart
                                         </p>
                                    </div>
                                </div>
                                <br/>
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Phone</h5>
                                         <p className="text-slate-400">+49 178 759 5846623</p>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6"> 
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                         <p className="text-slate-400">Info@StorkLink.de</p>
                                    </div>
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
        </>
    )
}
