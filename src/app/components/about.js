"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useIsVisible } from "./use_is_visible";
import * as Unicons from "@iconscout/react-unicons";
import dynamic from "next/dynamic";
export default function About({ title, desc }) {
  const storyBigScreenRef = useRef();
  const isVisible1 = useIsVisible(storyBigScreenRef);
  const missionBigScreenRef = useRef();
  const isVisible2 = useIsVisible(missionBigScreenRef);
  const visionBigScreenRef = useRef();
  const isVisible3 = useIsVisible(visionBigScreenRef);
  const approachBigScreenRef = useRef();
  const isVisible4 = useIsVisible(approachBigScreenRef);
  const storySmallScreenRef = useRef();
  const isVisible5 = useIsVisible(storySmallScreenRef);
  const missionSmallScreenRef = useRef();
  const isVisible6 = useIsVisible(missionSmallScreenRef);
  const visionSmallScreenRef = useRef();
  const isVisible7 = useIsVisible(visionSmallScreenRef);
  const approachSmallScreenRef = useRef();
  const isVisible8 = useIsVisible(approachSmallScreenRef);


   

  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      window.addEventListener("resize", handleResize);
      handleResize();
    } 
  }, []);
 
  function handleResize() {
    console.log("aaaaaaaaaaaaaaaaa")
    setIsSmallScreen(window.innerWidth <= 992); // Adjust based on your breakpoints
  }
  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-white dark:bg-slate-200"
        id="about"
      >
        {!isSmallScreen ? (
          <div className="container mx-auto">
            {title || desc ? (
              <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
                  {title}
                </h3>
                <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
                  {desc}
                </p>
              </div>
            ) : (
              ""
            )}
            <br />
            <br />

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div
                ref={storyBigScreenRef}
                className={`lg:col-span-5 ${
                  isVisible1
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0 "
                }`}
              >
                <div className="relative">
                  <img
                    src="/images/our story.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div ref={storyBigScreenRef} className={`lg:col-span-7 ${
                  isVisible1
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our story
                  </h3>
                  <h4 className="mb-4 md:text-1xl text-[color:var(--darkest-grey-color)] text-m font-medium font-lexend">
                    Every Great Journey Begins with a Vision.
                  </h4>
                  <p className="text-[color:var(--dark-grey-color)]  dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink’s journey is rooted in a deeply personal and
                    transformative experience. Our founder, having navigated the
                    complexities of relocating to Germany, faced numerous
                    challenges along the way. Alongside her co-founder, who
                    brought extensive knowledge of the local job market and
                    hiring dynamics, they frequently advised others encountering
                    similar obstacles.
                  </p>
                  <br />
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    Motivated by their shared commitment to support and guide
                    individuals, they envisioned StorkLink as a solution to
                    bridge ambition and opportunity. Their combined expertise
                    and dedication led to the creation of a company focused on
                    simplifying the process for candidates while delivering
                    valuable talent to employers in Germany.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div ref={missionBigScreenRef} className={`lg:col-span-7 ${
                  isVisible2
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our Mission
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink is dedicated to promoting equity, diversity, and
                    inclusion by connecting talent with opportunities in
                    Germany. We prioritize the unique needs of our candidates
                    and clients, offering tailored, compassionate solutions. Our
                    mission is to create meaningful connections that benefit
                    both individuals and organizations, reflecting the diversity
                    of the communities we serve.
                  </p>
                </div>
              </div>
              <div ref={missionBigScreenRef}
                className={`lg:col-span-5 ${
                  isVisible2
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our mission.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div ref={visionBigScreenRef}
                className={`lg:col-span-5 ${
                  isVisible3
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our vision.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div className={`lg:col-span-7 ${ 
                  isVisible3
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 text-[color:var(--darkest-grey-color)] md:text-2xl text-xl font-medium font-lexend">
                    Our Vision
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink strives to be the premier connector of exceptional
                    talent with opportunities in Germany, driven by expertise
                    and fairness. We specialize in aligning candidates with the
                    right roles, meeting both current and future market demands.
                  </p>
                  <br />
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    Equity is at the core of our mission. Our inclusive approach
                    values diverse candidates, ensuring fair opportunities for
                    all. By fostering a collaborative environment rooted in
                    equity, diversity, and inclusion, we create impactful
                    pathways that drive innovation and contribute to a dynamic
                    global workforce.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div ref={approachBigScreenRef} className={`lg:col-span-7 ${
                  isVisible4
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our Approach and Values
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-600 max-w-2xl font-inter mx-auto">
                    At StorkLink, we connect exceptional talent with leading
                    businesses through precision, empathy, and integrity. Our
                    core values guide everything we do:
                  </p>
                  <br />
                  <ul className="list-disc mt-6">
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)]  font-medium font-lexend">
                        Specialized Expertise:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We leverage our deep understanding of diverse markets to
                        provide tailored support, effectively matching talent
                        with the right roles.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Personalized Service:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We build meaningful relationships, offering empathetic
                        solutions that meet the needs of both clients and
                        candidates.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Future-Oriented Insights:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We stay ahead of market trends, providing valuable
                        insights to help businesses and talent remain relevant
                        in a changing landscape.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)]dark:text-slate-700 font-medium font-lexend">
                        Commitment to Excellence:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We strive for high-quality, efficient services,
                        exceeding expectations and contributing to the success
                        of our clients and candidates.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Fairness:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We prioritize equity and inclusion, ensuring
                        opportunities are accessible to all.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Ethical Practices:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We uphold strong ethical standards, promoting equal
                        opportunity and fostering a respectful environment for
                        everyone.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div ref={approachBigScreenRef}
                className={`lg:col-span-5 ${
                  isVisible4
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our values.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto">
            {title || desc ? (
              <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">
                  {title}
                </h3>
                <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">
                  {desc}
                </p>
              </div>
            ) : (
              ""
            )}
            <br />
            <br /> 

            <div ref={storyBigScreenRef} className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center bg-white">
              <div 
                className={`lg:col-span-5 ${
                  isVisible1
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our story.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div 
                 className={`lg:col-span-7 ${
                  isVisible1
                  ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                  : "opacity-0"
              }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our story
                  </h3>
                  <h4 className="mb-4 md:text-1xl text-[color:var(--darkest-grey-color)] text-m font-medium font-lexend">
                    Every Great Journey Begins with a Vision.
                  </h4>
                  <p className="text-[color:var(--dark-grey-color)]  dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink’s journey is rooted in a deeply personal and
                    transformative experience. Our founder, having navigated the
                    complexities of relocating to Germany, faced numerous
                    challenges along the way. Alongside her co-founder, who
                    brought extensive knowledge of the local job market and
                    hiring dynamics, they frequently advised others encountering
                    similar obstacles.
                  </p>
                  <br />
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    Motivated by their shared commitment to support and guide
                    individuals, they envisioned StorkLink as a solution to
                    bridge ambition and opportunity. Their combined expertise
                    and dedication led to the creation of a company focused on
                    simplifying the process for candidates while delivering
                    valuable talent to employers in Germany.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div ref={missionBigScreenRef} className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div 
                className={`lg:col-span-5 ${ 
                  isVisible2
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our mission.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div
                 className={`lg:col-span-7 ${
                  isVisible2
                  ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                  : "opacity-0"
              }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our Mission
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink is dedicated to promoting equity, diversity, and
                    inclusion by connecting talent with opportunities in
                    Germany. We prioritize the unique needs of our candidates
                    and clients, offering tailored, compassionate solutions. Our
                    mission is to create meaningful connections that benefit
                    both individuals and organizations, reflecting the diversity
                    of the communities we serve.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div ref={visionBigScreenRef} className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div
                className={`lg:col-span-5 ${
                  isVisible3
                    ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our vision.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div>
              </div>
              <div
                 className={`lg:col-span-7 ${
                isVisible3
                  ? "animate-fade-left animate-once animate-duration-1000 animate-ease-out"
                  : "opacity-0"
              }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 text-[color:var(--darkest-grey-color)] md:text-2xl text-xl font-medium font-lexend">
                    Our Vision
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    StorkLink strives to be the premier connector of exceptional
                    talent with opportunities in Germany, driven by expertise
                    and fairness. We specialize in aligning candidates with the
                    right roles, meeting both current and future market demands.
                  </p>
                  <br />
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-300 max-w-2xl font-inter mx-auto">
                    Equity is at the core of our mission. Our inclusive approach
                    values diverse candidates, ensuring fair opportunities for
                    all. By fostering a collaborative environment rooted in
                    equity, diversity, and inclusion, we create impactful
                    pathways that drive innovation and contribute to a dynamic
                    global workforce.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div ref={approachBigScreenRef} className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
              <div
                className={`lg:col-span-5 ${
                  isVisible4
                    ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                    : "opacity-0"
                }`}>
                <div className="relative">
                  <img
                    src="/images/our values.jpg"
                    className="rounded-lg shadow-lg relative"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ height: "auto", width: "100%" }}
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
                </div> 
              </div>    
              <div 
              className={`lg:col-span-7 ${
                isVisible4
                  ? "animate-fade-right animate-once animate-duration-1000 animate-ease-out"
                  : "opacity-0"
              }`}>
                <div className="lg:ms-7">
                  <h3 className="mb-4 md:text-2xl text-[color:var(--darkest-grey-color)] text-xl font-medium font-lexend">
                    Our Approach and Values
                  </h3>
                  <p className="text-[color:var(--dark-grey-color)] dark:text-slate-600 max-w-2xl font-inter mx-auto">
                    At StorkLink, we connect exceptional talent with leading
                    businesses through precision, empathy, and integrity. Our
                    core values guide everything we do:
                  </p>
                  <br />
                  <ul className="list-disc mt-6">
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)]  font-medium font-lexend">
                        Specialized Expertise:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We leverage our deep understanding of diverse markets to
                        provide tailored support, effectively matching talent
                        with the right roles.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Personalized Service:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We build meaningful relationships, offering empathetic
                        solutions that meet the needs of both clients and
                        candidates.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Future-Oriented Insights:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We stay ahead of market trends, providing valuable
                        insights to help businesses and talent remain relevant
                        in a changing landscape.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)]dark:text-slate-700 font-medium font-lexend">
                        Commitment to Excellence:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We strive for high-quality, efficient services,
                        exceeding expectations and contributing to the success
                        of our clients and candidates.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Fairness:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We prioritize equity and inclusion, ensuring
                        opportunities are accessible to all.
                      </span>
                    </li>
                    <li className="text-[color:var(--darkest-grey-color)] mx-5">
                      <span className="text-[color:var(--darkest-grey-color)] dark:text-slate-700 font-medium font-lexend">
                        Ethical Practices:{" "}
                      </span>
                      <span className="text-[color:var(--dark-grey-color)] dark:text-slate-500 max-w-2xl font-inter mx-auto">
                        We uphold strong ethical standards, promoting equal
                        opportunity and fostering a respectful environment for
                        everyone.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
