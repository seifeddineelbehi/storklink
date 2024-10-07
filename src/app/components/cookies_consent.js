import React, { useState, useEffect } from "react";
import {hasCookie, setCookie} from "cookies-next";
import Link from "next/link";

export default function CookiesConsent() {
    const [showConsent, setShowConsent] =useState(true);
    useEffect(() =>
        {
            setShowConsent(hasCookie("localConsent"));
        }, []);
    
    const acceptCookie =() =>
    {
        setShowConsent(true);
        setCookie("localConsent","true",{})
    };

    if(showConsent) {
        return null;
    }

  return <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-[color:var(--darkest-grey-color)] text-white">
        <span className="text-dark text-base mr-16">
            this website uses cookies to improve the user experience. By using our website you consent to all the Terms of Usage in accordance with our <Link href="/privacy" className='font-bold text-white'>Privacy Policy</Link>
        </span>
        <button className="bg-[color:var(--main-color)] py-2 px-10 rounded text-white" onClick={()=> acceptCookie()}>
            Accept
        </button>
    </div>
    </div>;
}
 