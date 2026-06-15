import React from 'react'
import Image from 'next/image'

export default function HeroBanner () {
  return (
    <div className="py-3 bg-white">
        <div className="relative w-full h-150">
            <Image src="/images/banner.png" alt="herobanner" fill className="object-cover rounded-lg"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-7 md:px-0 px-4">
                <h3 className="text-white sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                    We Provide Effective <br/>Legal Solutions
                </h3>
                <h1 className="text-white sm:text-xs md:text-base lg:text-lg">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In <br/>deleniti eaque aut repudiandae et a id nisi.
                </h1>
                <div className="flex gap-5">
                    <input type="text" placeholder="Search your services" className="bg-white text-black sm:w-20 md:w-90 lg:w-150 md:px-4 px-2 md:py-5 py-1 md:text-base text-xs md:rounded-lg rounded outline-none"/>
                    <button className="bg-taupe-600 sm:px-3 md:px-8 lg:px-12 md:rounded-lg rounded text-white md:text-base text-xs font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
