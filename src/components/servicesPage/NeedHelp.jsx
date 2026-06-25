import React from 'react'

export default function NeedHelp () {
  return (
    <div className="px-10 md:px-10 lg:px-40 py-20">
        <div className='border border-gray-400 rounded shadow-2xl'>
            <div className="flex flex-col gap-5 p-10">
               <h3 className="text-xl md:text-2xl lg:text-3xl text-taupe-500">Need Help?</h3>
                <p className="text-sm md:text-base lg:text-lg font-bold text-taupe-700 whitespace-pre-wrap">Contact a qualified attorney to get help with your legal issue.</p>
                <div className='flex flex-col'>
                    <p className="text-xs md:text-sm lg:text-base font-bold text-taupe-700 whitespace-pre-wrap">I need help near (City, ZIP Code or County)</p>
                    <div className="flex flex-col md:flex-col lg:flex-row gap-5">
                       <div className="md:py-3 py-2 border w-full rounded">
                       </div>
                       <button className="px-2 md:px-3 lg:px-4 py-1 md:py-2 lg::py-3 md:text-base text-sm bg-taupe-700 text-white font-bold whitespace-nowrap rounded">
                        Find your lawyer
                       </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
