"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from "flowbite-react";
import { useGetTestimonialsQuery } from '@/redux/features/testimonials/testimonialsApi';
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';
import { getImageUrl } from "@/lib/image";

export default function OurClientSay () {
  const {data: rawTestimonials=[], isLoading: testimonialsLoading }= useGetTestimonialsQuery();
  const {data: testimonialIntro, isLoading: settingsLoading }= useGetSettingsQuery();

  const loading = testimonialsLoading || settingsLoading;

  const testimonials = rawTestimonials.map(item => ({
    ...item,
    avatar: getImageUrl(item.avatar),
    background_image: getImageUrl(item.background_image),
  }));
  // const [testimonials, setTestimonials] = useState([]);
  // const [testimonialIntro, setTestimonialIntro] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //       Promise.all([
  //             fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`).then(res => res.json()),
  //             fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`).then(res => res.json()),
  //         ]).then(([testimonialsJson, settingsJson]) => {
  //           const fixed = testimonialsJson.data.map(item => ({
  //           ...item,
  //           avatar: `${process.env.NEXT_PUBLIC_BASE_URL}/${item.avatar.replace('public/', '')}`,
  //           background_image: `${process.env.NEXT_PUBLIC_BASE_URL}/${item.background_image.replace('public/', '')}`,
  //           }));
  //             setTestimonials(fixed);
  //             setTestimonialIntro(settingsJson.data);
  //             setLoading(false);
  //         });
  // }, []);

  if (loading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className='md:text-4xl text-3xl font-bold py-5'>{testimonialIntro.testimonial_title}</h3>
        <p className='md:text-sm text-xs text-gray-400 pb-20'>
            {testimonialIntro.testimonial_description}
        </p>
        <div className="w-full h-150 overflow-hidden">
          <Carousel slideInterval={5000}>
            {testimonials.map((item) => (
              <div key={item.id} className='relative'>
                <img src={item.background_image} alt="slider" className="w-full h-full object-cover" />
                <div className="absolute inset-0">
                  <img src="/images/Rectangle-7.png" alt="rec" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <img src={item.avatar} alt="avatar" className="w-5 md:w-10 lg:w-24 h-5 md:h-10 lg:h-24 sm:ring-1 md:ring-2 lg:ring-5 ring-white rounded-full object-cover"/>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:mt-4 mt-0">{item.client_name}</h2>
                    <p className="text-xs md:text-sm lg:text-base md:mt-4 mt-1">{item.designation}</p>
                    <p className="text-xs md:text-sm lg:text-base md:m-10 m-2 px-10 md:px-30 lg:px-60">{item.message}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
