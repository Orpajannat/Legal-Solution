import React from 'react'

export default function NeedHelp () {
  return (
    <div className="px-40 py-20">
        <div className='border border-gray-400 rounded shadow-2xl'>
            <div className="flex flex-col gap-5 p-10">
               <h3 className="text-3xl text-taupe-500">Need Help?</h3>
                <p className="text-lg font-bold text-taupe-700">Contact a qualified attorney to get help with your legal issue.</p>
                <div className='flex flex-col'>
                    <p className="text-base font-bold text-taupe-700">I need help near (City, ZIP Code or County)</p>
                    <div className="flex flex-row gap-5">
                       <div className="py-3 border w-full rounded">
                       </div>
                       <button className="py-3 px-4 bg-taupe-700 text-white font-bold whitespace-nowrap rounded">
                        Find your lawyer
                       </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
