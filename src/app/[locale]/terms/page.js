"use client";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import emailJs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";
const Navbar = dynamic(() => import("../../components/navbar-talent"));
const Switcher = dynamic(() => import("../../components/Switcher"));
const Footer = dynamic(() => import("../../components/footer"));
const ContactData = dynamic(() => import("../../components/contact-data"));
const TalentServices = dynamic(() => import("../../components/talent-services"));
 
export default function Terms() { 
  return (
    <>
      <section
        className="relative lg:py-24 py-16 flex justify-center items-center"
        id="terms"
      >
        <div className="pb-8 max-w-3xl">
          <h1 className="text-center text-[color:var(--darkest-grey-color)] mb-4 md:text-6xl text-5xl font-bold font-lexend">
            terms & conditions
          </h1>
          <br />
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            1. Website Operator
          </h3>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            This website is owned, controlled, and operated by StorkLink.
            References to “we,” “us,” and “our” refer to StorkLink, and &quot;you&quot;
            refers to the person, company, or organization browsing or using the
            website. Information or materials submitted to this website are
            hosted and stored on servers in compliance with relevant data
            protection regulations.
          </p>
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            2. Applicability
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            2.1 These terms and conditions apply to all interactions between
            StorkLink and anyone who uses or accesses our website, including any
            materials, information, or services provided through it (hereinafter
            referred to as the &quot;Website&quot;).
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            2.2 By using or accessing the Website, you agree to comply with
            these terms and conditions. If you do not agree, you must
            discontinue the use of the Website.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            2.3 StorkLink reserves the right to modify or discontinue any part
            of the Website at any time, as well as to update these terms and
            conditions. Continued use of the Website after any changes are made
            constitutes your acceptance of the updated terms.
          </p>
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            3. Use of Website
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            3.1 This website and its content, including text, images, and
            trademarks, are protected by intellectual property rights owned by
            StorkLink or third parties. You may not copy, reproduce, or
            distribute any part of the Website without prior permission.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            3.2 StorkLink grants you a limited, non-transferable right to use
            the Website for personal, non-commercial purposes. If you are an
            employer, you may use the Website for recruitment purposes related
            to potential candidates. You may not sublicense or transfer this
            right.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            3.3 Unauthorized use of the Website, such as copying content,
            spamming, or using automated systems, is prohibited and may result
            in legal action.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            3.4 You agree to comply with all applicable laws and regulations
            when using the Website and follow any instructions provided by
            StorkLink.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            3.5 You are responsible for maintaining the confidentiality of your
            account information, including your password, and for any activity
            under your account.
          </p>
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            4. Your Materials
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            4.1 You confirm that any material you submit or upload to the
            Website (&quot;Your Material&quot;) is legal, and respectful, complies with
            all applicable laws and regulations, does not infringe on any third
            party&apos;s intellectual property rights, is not confidential or
            proprietary, is not offensive, defamatory, or inappropriate, is free
            from harmful software like viruses, and is accurate and reliable.
            StorkLink reserves the right to remove Your Material if it violates
            any of these terms.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            4.2 By submitting Your Material, you grant StorkLink a worldwide,
            non-exclusive, and perpetual license to use, modify, display, or
            distribute Your Material. StorkLink will always handle your personal
            information according to its privacy policy.
          </p>

          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            5. Liability
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            5.1 No representation, warranty, or condition, express or implied,
            statutory or otherwise, as to satisfactory quality, performance,
            fitness for purpose, or otherwise is given by StorkLink in respect
            of the Website, including the Website being compatible with all
            hardware and software used by visitors, operating in accordance with
            your expectations, being error-free, being accurate, or being
            available. All such representations, warranties, and conditions are
            excluded except to the extent their exclusion is prohibited by law.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            5.2 StorkLink’s liability to you and your sole remedy vis-à-vis
            StorkLink under or in connection with the Website (whether based on
            negligence, breach of contract, breach of statutory duty,
            restitution, tort, or otherwise) shall be to take such actions
            reasonably required at StorkLink’s discretion to remove or delete
            data entered in error or the subject of dispute, or correct data
            entered in error.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            5.3 These terms and conditions do not exclude liability (if any) to
            you for personal injury or death resulting from negligence or fraud
            of StorkLink or for any matter which would be illegal for StorkLink
            to exclude or attempt to exclude its liability.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            5.4 Except as set out in clause 6.3, StorkLink will not be liable to
            you whatsoever (whether based on negligence, breach of contract,
            breach of statutory duty, restitution, tort, or otherwise) for any
            injury, death, cost, damage, or direct, indirect, or consequential
            loss (including pure economic loss, loss of profits, loss of
            business, depletion of goodwill, and similar loss), whether
            foreseeable or not, howsoever caused, arising out of or in
            connection with the use or reliance on this Website, including as a
            result of any computer virus. It is your responsibility to run an
            antivirus program when using this Website.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            5.5 You agree to indemnify StorkLink and hold it harmless from and
            against any costs, expenses, liabilities, injuries, damages, claims,
            demands, proceedings, or legal costs that StorkLink may suffer or
            incur in consequence of using your material or being in breach of
            these terms and conditions.
          </p>
          <br />
          <br />
          <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-4xl text-3xl font-medium font-lexend">
            6. Jurisdiction and General Provisions
          </h3>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            7.1 The formation, existence, construction, performance, and
            validity of these terms and conditions, as well as any disputes
            arising from your legal relationship with StorkLink related to this
            Website or these terms and conditions, shall be governed by the laws
            of [Your Jurisdiction]. The competent courts in [Your Jurisdiction]
            shall have exclusive jurisdiction to resolve any such disputes.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            7.2 These terms and conditions (including the privacy statement
            referenced in Section 8) represent the entire agreement between you
            and StorkLink regarding the use of the Website.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            7.3 If any provision of these terms and conditions is deemed
            illegal, invalid, or unenforceable in any jurisdiction, it will not
            affect the legality, validity, or enforceability of any other
            provisions in that jurisdiction or the legality, validity, or
            enforceability of the provisions in any other jurisdiction.
          </p> 
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            7.4 A waiver by StorkLink of any provision of these terms and
            conditions or any breach thereof does not constitute a continuing
            waiver and does not prevent StorkLink from enforcing any of the
            remaining provisions or acting on any future breach.
          </p>
          <br />
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl">
            7.5 No third party shall have any rights to enforce or benefit from
            these terms and conditions. However, every Group Company shall be
            entitled to enforce and benefit from these terms and conditions as
            if it were a party to them. Additionally, every employee of
            StorkLink or any Group Company, as well as suppliers,
            subcontractors, or any parties for which StorkLink is responsible,
            shall be entitled to benefit from these terms and conditions as if
            they were parties to them.
          </p>
        </div>
      </section>
    </>
  );
}
