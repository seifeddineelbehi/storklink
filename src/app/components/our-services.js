"use client";
import React from "react";
import Link from "next/link";
import { Circle, Hexagon } from "react-feather";
import {
  services,
  employersServices,
  talentServices,
  mainEmployersServices,
  mainTalentServices,
} from "../Data/data";
import Image from 'next/image';
export default function OurServices({ title, desc }) {
  return (
    <section
      className="relative md:py-24 py-16 bg-[color:var(--light-grey-color)]"
      id="features"
    >
      <div className="container lg mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h4 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
            Services For Employers
          </h4>
          <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
            At StorkLink, Our approach is centered around expert human
            engagement, ensuring a personalized and attentive services.{" "}
          </p>
        </div>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {mainEmployersServices.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center"
              >
                <div className="relative overflow-hidden text-transparent -m-3">
                  <Hexagon className="h-28 w-28 fill-[color:var(--light-grey-color)] mx-auto rotate-[30deg]"></Hexagon>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-[color:var(--dark-grey-color)] rounded-xl text-3xl flex align-middle justify-center items-center">
                  <Image src={item.Icon} className="" alt="" width={70} height={70}  />
                  </div>

                </div>
                
                <div className="mt-6">
                  <h5 className="text-[color:var(--darkest-grey-color)] font-medium text-lg  font-lexend">
                    {item.title}
                  </h5>
                  <p className="text-[color:var(--dark-grey-color)] mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <div className="mb-4 text-center" >
          <Link
            href="/employers"
            className="py-2 px-5 font-medium inline-block  text-base w-[180px] tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color)] text-[color:var(--dark-grey-color)] rounded-md "
          >
            Read More
          </Link>
        </div>
        <br />
    
    
        <hr className="w-48 h-1 mx-auto my-4 bg-[color:var(--main-color)] border-0 rounded md:my-10" />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 pb-8 text-center">
          <h4 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
            Services For Talents
          </h4>
          <p className="text-slate-500 md:text-xl text-xl max-w-3xl mx-auto">
            Ready to advance your career in Germany?
            <br /> Contact us to discover how StorkLink can connect you with top
            employers and help you achieve your professional goals.
          </p>
        </div>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {mainTalentServices.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                key={index}
                className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center"
              >
                <div className="relative overflow-hidden text-transparent -m-3">
                  <Hexagon className="h-28 w-28 fill-[color:var(--light-grey-color)] mx-auto rotate-[30deg]"></Hexagon>
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-[color:var(--main-color)] rounded-xl text-3xl flex align-middle justify-center items-center">
                  <Image src={item.Icon} className="" alt="" width={70} height={70}  />
                  </div>

                </div>
                <div className="mt-6">
                  <h5 className="text-[color:var(--darkest-grey-color)] font- text-lg  hover:text-yellow-400 font-lexend">
                    {item.title}
                  </h5>
                  <p className="text-[color:var(--dark-grey-color)] mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <div className="mb-4 text-center" >
          <Link
            href="/talent"
            className="py-2 px-5  inline-block font-medium text-base w-[180px] tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[color:var(--main-color)] hover:bg-[color:var(--main-color-hover)] border-[color:var(--main-color)] hover:border-[color:var(--main-color)] text-[color:var(--dark-grey-color)] rounded-md "
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
