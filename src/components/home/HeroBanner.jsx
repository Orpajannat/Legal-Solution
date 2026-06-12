import React from 'react'
import Image from 'next/image'

export default function HeroBanner () {
  return (
    <div className="py-3 bg-white">
        <div className="relative w-full h-[600px]">
            <Image src="/images/banner.png" alt="herobanner" fill className="object-cover rounded-lg"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-7">
                <h3 className="text-white text-6xl font-bold">
                    We Provide Effective <br/>Legal Solutions
                </h3>
                <h1 className="text-white">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In <br/>deleniti eaque aut repudiandae et a id nisi.
                </h1>
                <div className="flex gap-5">
                    <input type="text" placeholder="Search your services" className="bg-white text-black w-[600px] px-4 py-5 rounded-lg outline-none"/>
                    <button className="bg-taupe-600 px-12 rounded-lg text-white font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
