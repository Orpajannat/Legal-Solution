import React from 'react'

export default function Chamber () {
  return (
    <div className="py-20">
        <div className='flex flex-col items-center justify-center gap-10'>
            <h1 className='text-lg md:text-xl lg:text-3xl font-bold text-taupe-800'>Chambers Address</h1>
            <div className='border-2 px-25 md:px-40 lg:px-50'></div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='flex flex-col items-center justify-start border-2 border-taupe-500 rounded-lg px-5 py-10 shadow-xl shadow-taupe-600'>
                    <h1 className="text-sm md:text-base lg:text-xl font-bold pb-10">Chambers</h1>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Momtaz Vision, (Suite – B4, Level 2),<br/> House-11/A, Road-99, Gulshan-2<br/> Dhaka-1212, Bangladesh</p>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Telephone: +880241080491-93</p>
                    <p className="text-xs md:text-sm text-gray-500 text-center">info@legalcounselbd.com</p>
                </div>
                <div className='flex flex-col items-center justify-start border-2 border-taupe-500 rounded-lg px-5 py-10 shadow-xl shadow-taupe-600'>
                    <h1 className="text-sm md:text-base lg:text-xl font-bold pb-10">Chattogram Office</h1>
                    <p className="text-xs md:text-sm text-gray-500 text-center">World Trade Centre (Suite – 4, Level 3),<br/> 102-103, Agrabad C/A<br/> Chittagong 4100, Bangladesh</p>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Telephone: +88 09678 677 688</p>
                    <p className="text-xs md:text-sm text-gray-500 text-center">info@legalcounselbd.com</p>
                </div>
                <div className='flex flex-col items-center justify-start border-2 border-taupe-500 rounded-lg px-5 py-10 shadow-xl shadow-taupe-600'>
                    <h1 className="text-sm md:text-base lg:text-xl font-bold pb-10 text-center">Consultation Hours</h1>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Sunday – Thursday (10:00 AM – 7:00 PM)</p>
                    <p className="text-xs md:text-sm text-gray-500 text-center">Saturday (10:00 AM – 2:00 PM)</p>
                </div>
            </div>
        </div>
    </div>
  )
}
