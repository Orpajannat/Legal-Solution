import Image from 'next/image'
import React from 'react'

export default function HeroSection () {
  return (
    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-center mx-5 md:mx-10 lg:mx-50 border-3 border-taupe-700 rounded-lg shadow-xl shadow-black/60'>
        <Image src="/images/casesbanner.png" alt="caseBanner" width={500} height={1000} className='bg-taupe-600 border-0 md:border-0 lg:border-3 border-r-0 md:border-r-0 lg:border-r-6 border-taupe-700 p-10'/>
        <div className="flex flex-col justify-center gap-5 md:gap-5 lg:gap-0 xl:gap-5 text-taupe-700 p-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold whitespace-pre-wrap overflow-hidden">Proven Outcomes,<br/> Uncompromising Advocacy.</h1>
            <p className="text-xs md:text-sm lg:text-base font-semibold whitespace-pre-wrap overflow-hidden">Explore how our tailored legal strategies have protected assets,<br/> secured rights, and resolved complex disputes for our clients.</p>
            <p className="text-xs md:text-sm lg:text-base whitespace-pre-wrap overflow-hidden">
                Counsels Law Partners (CLP) brings together a dedicated<br/> team of Barristers, Advocates, and Consultants who provide specialist legal advice and advocacy<br/> across Bangladesh. Our practice spans a wide range of legal disciplines, including<br/> corporate and commercial law, banking and finance, civil and criminal litigation, intellectual property,<br/> family matters, employment, taxation, immigration, and dispute resolution.
            </p>
            <button className='border-2 bg-white hover:bg-taupe-700 hover:text-white w-fit px-1 md:px-2 lg:px-4 py-1 md:py-1 lg:py-2 rounded-lg'>
                Show More
            </button>
        </div>
    </div>
  )
}
