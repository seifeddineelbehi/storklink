'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {

    return (
        <>
            <footer className="footer bg-[color:var(--dark-grey-color55565B)] relative text-gray-200 dark:text-gray-200">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid grid-cols-1"> 
                                    <div className="text-center">
                                        <Image src="/images/logo-mini.png" className="block mx-auto" alt="" width={82} height={82} />
                                        <p className="max-w-2xl font-semibold mx-auto text-[color:var(--light-grey-color)] mt-8">Launch your campaign and benefit from
                                            our expertise on designing and managing conversion centered Tailwind CSS html page.
                                        </p>
                                    </div>

                                    <ul className="list-none footer-list text-center mt-8">
                                
                                        <li className="inline px-2 mt-[10px]"> <Link href="/employers"
                                            className="text-[color:var(--main-color)] hover:text-[color:var(--main-color-hover)] duration-500 ease-in-out ms-2 text-xl">Employers</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/talent"
                                            className="text-[color:var(--main-color)] hover:text-[color:var(--main-color-hover)] duration-500 ease-in-out ms-2 text-xl">Talents
                                            </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container socials text-center">
                        <div className="grid md:grid-cols-12 items-center">
                        

                            <div className="md:col-span-12 md:mt-0 mt-8">
                                <ul className="list-none md:text-center text-center">
                                    <li className="inline ms-1"> <Link href="http://linkedin.com/company/shreethemes" target="_blank"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out  border-[color:var(--main-color-hover)] rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color)] dark:hover:bg-violet-600"><Unicons.UilLinkedin width={20} className="text-[color:var(--light-grey-color)] "/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://www.facebook.com/shreethemes" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out  border-[color:var(--main-color-hover)] rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color)] dark:hover:bg-violet-600"><Unicons.UilFacebookF width={20} className="text-[color:var(--light-grey-color)]"/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://www.instagram.com/shreethemes/" target="_blank" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out  border-[color:var(--main-color-hover)] rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color)] dark:hover:bg-violet-600"><Unicons.UilInstagram  width={20} className="text-[color:var(--light-grey-color)]"/></Link></li>
                                    <li className="inline ms-1"> <Link href="https://twitter.com/shreethemes" target="_blank"  className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out  border-[color:var(--main-color-hover)] rounded-md hover:border-[color:var(--main-color-hover)] dark:hover:border-violet-600 hover:bg-[color:var(--main-color)] dark:hover:bg-violet-600"><Unicons.UilTwitter  width={20} className="text-[color:var(--light-grey-color)]"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
