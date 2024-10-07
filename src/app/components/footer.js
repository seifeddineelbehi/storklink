"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import * as Unicons from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-[color:var(--darkest-grey-color)] relative text-gray-200 dark:text-gray-200">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <Image
                      src="/images/logo-mini-light.png"
                      className="block mx-auto"
                      alt=""
                      width={74}
                      height={74}
                    />
                    <p className="max-w-xl mx-auto text-slate-400 mt-8">
                    Your partner in navigating global career opportunities
                    </p>
                  </div>

                  <ul className="list-none footer-list text-center mt-8">
                    <li className="inline px-2">
                      {" "}
                      <Link
                        href="/employers"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        Employers
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/talent"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Talents
                      </Link>
                    </li>
                
                  </ul>
                  <ul className="list-none footer-list text-center mt-8">
                    <li className="inline px-2">
                      {" "}
                      <Link
                        href="/terms"
                        target="_blank"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/accessibility"
                        target="_blank"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Accessibility  
                      </Link>
                    </li>
                    <li className="inline px-2 mt-[10px]">
                      {" "}
                      <Link
                        href="/privacy"
                        target="_blank"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2"
                      >
                        Privacy Policy 
                      </Link>
                    </li>
                
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container text-center">
            <div className="grid md:grid-cols-11 items-center">
             

              <div className="md:col-span-6 md:mt-0 mt-6">
                <ul className="list-none md:text-end text-center">
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href="http://linkedin.com/company/shreethemes"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color-hover)] dark:hover:bg-violet-600"
                    >
                      <Unicons.UilLinkedin width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href="https://www.facebook.com/shreethemes"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color-hover)] dark:hover:bg-violet-600"
                    >
                      <Unicons.UilFacebookF width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href="https://www.instagram.com/shreethemes/"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color-hover)] dark:hover:bg-violet-600"
                    >
                      <Unicons.UilInstagram width={16} />
                    </Link>
                  </li>
                  <li className="inline ms-1">
                    {" "}
                    <Link
                      href="https://twitter.com/shreethemes"
                      target="_blank"
                      className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-800 rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color-hover)] dark:hover:bg-violet-600"
                    >
                      <Unicons.UilTwitter width={16} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
