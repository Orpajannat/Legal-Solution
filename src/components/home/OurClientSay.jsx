"use client"
import React from 'react';
import { Carousel } from "flowbite-react";


export default function OurClientSay () {
  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center">
        <h3 className='text-5xl font-bold py-5'>What Our Client Say</h3>
        <p className='text-sm text-gray-400 pb-20'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <div className="w-full h-150 overflow-hidden">
          <Carousel slideInterval={5000}>
            <img src="/images/slider-1.jpg" alt="slider 1" className="w-full h-full object-cover" />
            <img src="/images/slider-2.jpg" alt="slider 2" className="w-full h-full object-cover" />
            <img src="/images/slider-3.jpg" alt="slider 3" className="w-full h-full object-cover" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
