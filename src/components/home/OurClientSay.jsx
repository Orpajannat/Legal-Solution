"use client"
import React from 'react';
import { Carousel } from "flowbite-react";


export default function OurClientSay () {
  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className='md:text-4xl text-3xl font-bold py-5'>What Our Client Say</h3>
        <p className='md:text-sm text-xs text-gray-400 pb-20'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <div className="w-full h-150 overflow-hidden">
          <Carousel slideInterval={5000}>
            <div className='relative'>
              <img src="/images/slider-1.jpg" alt="slider 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0">
                <img src="/images/Rectangle-7.png" alt="rec" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <img src="/images/dp.png" alt="rec" className="w-5 md:w-10 lg:w-24 h-5 md:h-10 lg:h-24 sm:ring-1 md:ring-2 lg:ring-5 ring-white rounded-full object-cover"/>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:mt-4 mt-0">Fahim Ahmmed</h2>
                <p className="text-xs md:text-sm lg:text-base md:mt-4 mt-1">Software Engineer</p>
                <p className="text-xs md:text-sm lg:text-base md:m-10 m-2 px-10 md:px-30 lg:px-60">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
              </div>
            </div>
            <div className='relative'>
              <img src="/images/slider-2.jpg" alt="slider 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0">
                <img src="/images/Rectangle-7.png" alt="rec" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <img src="/images/dp2.jpg" alt="rec" className="w-5 md:w-10 lg:w-24 h-5 md:h-10 lg:h-24 sm:ring-1 md:ring-2 lg:ring-5 ring-white rounded-full object-cover"/>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:mt-4 mt-0">Fahim Ahmmed</h2>
                <p className="text-xs md:text-sm lg:text-base md:mt-4 mt-1">Software Engineer</p>
                <p className="text-xs md:text-sm lg:text-base md:m-10 m-2 px-10 md:px-30 lg:px-60">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
              </div>
            </div>
            <div className='relative'>
              <img src="/images/slider-3.jpg" alt="slider 1" className="w-full h-full object-cover" />
              <div className="absolute inset-0">
                <img src="/images/Rectangle-7.png" alt="rec" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <img src="/images/dp3.jpg" alt="rec" className="w-5 md:w-10 lg:w-24 h-5 md:h-10 lg:h-24 sm:ring-1 md:ring-2 lg:ring-5 ring-white rounded-full object-cover"/>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold md:mt-4 mt-0">Fahim Ahmmed</h2>
                <p className="text-xs md:text-sm lg:text-base md:mt-4 mt-1">Software Engineer</p>
                <p className="text-xs md:text-sm lg:text-base md:m-10 m-2 px-10 md:px-30 lg:px-60">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
