'use client'
import React from 'react';
import Link from 'next/link';
import { Circle, Hexagon } from 'react-feather';
import { services, employersServices, talentServices } from '../Data/data';

export default function EmployersServices({title, desc}) {
    return (
        <section className="relative md:py-24 py-16 bg-[color:var(--light-grey-color)]" id="services-employers">
            <div className="container lg mx-auto">
                
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h4 className="text-[color:var(--darkest-grey-color)] mb-4 md:text-5xl text-4xl font-medium font-lexend">Services For Employers</h4>
                        <p className="text-[color:var(--dark-grey-color)] md:text-xl text-xl max-w-3xl mx-auto">At StorkLink, Our approach 
                            is centered around expert human engagement, ensuring a personalized 
                            and attentive services. </p>
                    </div>  
                    <br/>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {employersServices.map((item, index) => {
                        const Icon = item.Icon
                        return(
                            <div key={index} className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <Hexagon className="h-28 w-28 fill-[color:var(--darkest-grey-color)] mx-auto rotate-[30deg]"
                                    ></Hexagon>
                                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-[color:var(--main-color)] rounded-xl text-3xl flex align-middle justify-center items-center">
                                        <Icon width={30} height={30}/>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h5  className="text-[color:var(--darkest-grey-color)] font-medium text-lg  font-lexend" >
                                        {item.title}
                                    </h5>
                                    <p className="text-[color:var(--dark-grey-color)] mt-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            
            </div>
        </section>
    )
};