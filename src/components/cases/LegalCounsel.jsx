import React from 'react'
import { Dot } from 'lucide-react'

export default function LegalCounsel () {
  return (
    <div className='flex flex-col px-5 md:px-10 lg:px-50 py-20 items-center gap-10 whitespace-pre-wrap'>
        <div className='flex flex-col justify-center gap-5'>
            <h1 className='text-lg md:text-xl lg:text-3xl font-bold text-center'>Legal Counsel</h1>
            <p className='text-xs md:text-sm lg:text-base'><b>LEGAL COUNSEL</b> is one of the leading firms of Bangladesh having its main office located at the heart of the Dhaka City and another branch at the port city of Chattogram. Our firm is distinguished by its competence, wide range of experiences, creativity and the success that we have enjoyed in our chosen areas of practice.
            We have a reputation for providing exceptional legal services & are renowned for our commitment to excellence and for our ability to find innovative solutions to complex and unique  legal problems. Our efforts have been recognized and highly valued by our wide ranging and ever increasing client base. At Legal Counsel, we focus on:
            </p>
            <div className='flex flex-row items-baseline-last text-xs md:text-sm lg:text-base'>
                <Dot size={50} className='hidden md:hidden lg:hidden xl:block'/>
                <p>Nurturing the special nature of the firm: a collegiate working style with an ambition to be the best at looking after clients, bringing creative, quality and business-aware approach to our work, however complex it might be.</p>
            </div>
            <div className='flex flex-row items-center text-xs md:text-sm lg:text-base'>
                <Dot size={36} className='hidden md:hidden lg:hidden xl:block'/>
                <p>Fostering and developing: our working relationships with leading law firms across the world.</p>
            </div>
            <div className='flex flex-row items-center text-xs md:text-sm lg:text-base'>
                <Dot size={36} className='hidden md:hidden lg:hidden xl:block'/>
                <p>Maintaining a sense of perspective: our clients are best served if an element of warmth and high degree of professionalism is in the mix.</p>
            </div>
            <p className='text-xs md:text-sm lg:text-base'>Whilst the broader economic environment is improving after a long down-turn in the wake of the global financial crisis, uncertainties remain and regulatory challenges are ever-present. Against this backdrop, we continue to focus on providing positive and constructive service to our clients and to draw strength from our multi-specialism and our creative and upbeat approach to dealing with novel situation.</p>
        </div>
        <button className='bg-taupe-600 hover:bg-taupe-800 text-white text-xs md:text-sm lg:text-base rounded-lg px-2 md:px-2 lg:px-4 py-2 w-fit shadow-xl shadow-black/80'>
            Read More
        </button>
    </div>
  )
}
