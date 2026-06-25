import React from 'react'

export default function HowCanWeHelpYou () {
  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-10 lg:px-50 py-20 gap-10">
        <h2 className='text-lg md:text-xl lg:text-3xl font-bold px-10 md:px-10 lg:px-10 xl:px-0'>How Can We Help You</h2>
        <div className='grid grid-cols-1 gap-5'>
            <div className='flex flex-col items-start justify-center gap-5 border border-transparent bg-taupe-300 hover:bg-taupe-500 px-10 py-5 rounded-lg shadow-xl'>
                <h1 className="text-sm md:text-base lg:text-lg font-bold">Legal Service</h1>
                <p className='text-xs md:text-sm lg:text-base whitespace-pre-wrap'>We are a full-service law firm proficient in providing commendable legal services in a timely and professional manner. Our core practice areas include Labor and Employment Law, Contract Law, Business Law and Commercial Law, Corporate Law and Company Law, Family Law, Foreign Direct Investment, Taxation, Telecommunication and ICT Law, Banking law, Corporate Governance and Compliance, Property Law, Alternative Dispute Resolution (ADR), etc. Our team includes leading practitioners in specialist areas including Tax, Real Estate, Information Technology, Telecom and others. Our extensive and meaningful relationships with other market leading firms provide a client focused international service.</p>
            </div>
            <div className='flex flex-col items-start justify-center gap-5 border border-transparent bg-taupe-300 hover:bg-taupe-500 px-10 py-5 rounded-lg shadow-xl'>
                <h1 className="text-sm md:text-base lg:text-lg font-bold">Approach</h1>
                <p className='text-xs md:text-sm lg:text-base whitespace-pre-wrap'>Our firm is committed to ensuring transparency, professionalism, punctuality and this certainly guides us in being consistent in every area of law. We always maintain such professional etiquette and conduct in our Chambers so as to provide the best legal experience to our respective clients.  We also have various internal policies such as Code of Conduct, Anti-bribery Policy, Child Policy, Environmental Policy, etc. which have been implemented and are strictly adhered to by our team.</p>
            </div>
            <div className='flex flex-col items-start justify-center gap-5 border border-transparent bg-taupe-300 hover:bg-taupe-500 px-10 py-5 rounded-lg shadow-xl'>
                <h1 className="text-sm md:text-base lg:text-lg font-bold whitespace-pre-wrap">Publications & Seminars</h1>
                <p className='text-xs md:text-sm lg:text-base'>Members of team Legal Counsel regularly publish legal articles in reputed national dailies of Bangladesh, such as, The Daily Star, The Daily Observer, Dhaka Tribune, Prothom Alo, etc. Legal Counsel also publishes quarterly News Bulletin thereby enlightening our respective clients with regard to current affairs and various legal issues. With the belief that pro-bono services are an essential element of every lawyer’s professional responsibilities, each team member of Legal Counsel spends 3 hours from their weekly working hours on pro-bono work.</p>
            </div>
        </div>
    </div>
  )
}
