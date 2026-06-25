import React from 'react'

export default function NotableCaseStudies () {
  return (
    <div className="py-20 text-taupe-700">
        <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-lg md:text-xl lg:text-3xl font-bold">Notable Case Studies</h2>
            <p className="text-xs md:text-sm lg:text-base pb-10">Case Studies</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>Landmark Corporate Merger</h1>
                    <p className='text-xs md:text-sm lg:text-base pb-10'>Advising a tech giant on the complex<br/> $500M acquisition and merger of a<br/> competitor, navigating regulatory<br/> challenges and complex contracts.</p>
                </div>
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>Successful Vessel Arrest</h1>
                    <p>Representing cargo interests in a<br/> high-stakes admiralty case,<br/> securing immediate vessel<br/> arrest and cargo release in<br/> a maritime dispute.</p>
                </div>
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>High Court Writ Victory</h1>
                    <p className='text-xs md:text-sm lg:text-base pb-10'>Pursuing a writ petition before the<br/> High Court, successfully <br/>defending the fundamental<br/> rights of a large group facing<br/> unlawful termination.</p>
                </div>
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>Complex Arbitration Award</h1>
                    <p className='text-xs md:text-sm lg:text-base pb-10'>Strategic representation in a<br/> multi-million dollar international<br/> commercial arbitration,<br/> achieving a favorable award<br/> and enforcement.</p>
                </div>
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>Employee Rights Victory</h1>
                    <p className='text-xs md:text-sm lg:text-base pb-10'>Successfully litigating for<br/> unpaid wages and unfair dismissal<br/> on behalf of a group of<br/> warehouse employees,<br/> under Bangladeshi law.</p>
                </div>
                <div className="border border-transparent shadow-xl shadow-taupe-700 rounded-lg px-5 py-20 flex flex-col items-center justify-start gap-5">
                    <h1 className='text-base md:text-lg lg:text-xl font-bold'>Major Property Title Dispute</h1>
                    <p className='text-xs md:text-sm lg:text-base pb-10'>Resolved a long-standing<br/> property title dispute involving<br/> multi-party ownership, utilizing<br/> precise documentation and<br/> thorough due diligence.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
