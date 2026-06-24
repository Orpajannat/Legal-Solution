import Image from 'next/image'
import React from 'react'

export default function BusinessServices () {
  return (
    <div className="flex flex-row items-center justify-around p-10">
        <div className="flex flex-col justify-center gap-5">
            <h1 className="font-bold text-blue-700">BUSINESS SERVICES</h1>
            <h2 className="text-3xl font-bold text-taupe-700">Create a trusted foundation to ensure future<br/> success</h2>
            <p className="text-base text-taupe-700 py-5">
                FindLaw has partnered with LegalZoom to offer business solutions for busy<br/> entrepreneurs. Get step-by-step help with business formation, registered agent<br/> services, and ongoing compliance.
            </p>
            <div className="flex flex-row gap-5">
                <button className="font-bold text-blue-700 px-4 py-3 border rounded-lg hover:bg-blue-700 hover:text-white">
                    LLC
                </button>
                <button className="font-bold text-blue-700 px-4 py-3 border rounded-lg hover:bg-blue-700 hover:text-white">
                    Corporation
                </button>
                <button className="font-bold text-blue-700 px-4 py-3 border rounded-lg hover:bg-blue-700 hover:text-white">
                    Nonprofit
                </button>
                <button className="font-bold text-blue-700 px-4 py-3 border rounded-lg hover:bg-blue-700 hover:text-white">
                    DBA
                </button>
            </div>
            <button className="font-bold text-white px-4 py-3 bg-taupe-700 rounded-lg w-fit">
                Start my business
            </button>
        </div>
        <Image src="/images/business_owner.png" alt="businessman" width={350} height={700}/>
    </div>
  )
}
