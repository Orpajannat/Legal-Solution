import React from 'react'
import Image from 'next/image'

export default function Planning () {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-30 px-3 md:px-3 lg:px-0">
        <h2 className="text-xl md:text-2xl lg:text-4xl text-taupe-600 text-center">Estate planning forms and business solutions made easy</h2>
        <p className="md:text-sm text-xs text-taupe-600 text-center">Planning your future or starting your business doesn’t have to be expensive or time consuming.</p>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10 p-10">
            <Image src="/images/Peace_of_mind.jpg" alt="peace" width={600} height={200} className='object-cover rounded-lg'/>
            <div className="flex flex-col justify-center gap-5">
               <p className="text-base font-bold text-cyan-700">PERSONAL FORMS</p>
               <h1 className="text-2xl font-bold text-taupe-600">Secure peace of mind with estate planning</h1>
               <p className="text-taupe-600">
                   Get access to America’s #1 DIY estate planning software through FindLaw’s<br/> partnership with Quicken Willmaker & Trust by Nolo. Easy, accurate, and affordable<br/> estate planning forms created and vetted by lawyers that you can create from the<br/> comfort of your own home.
                </p>
                <button className="md:px-4 px-2 md:py-3 py-2 rounded-lg bg-taupe-700 text-white font-bold cursor-pointer w-fit">
                   Protect my family
                </button>
            </div>
        </div>
    </div>
  )
}
