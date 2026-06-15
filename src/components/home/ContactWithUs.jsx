import React from 'react'
import Image from 'next/image'

export default function ContactWithUs () {
  return (
    <div className="py-30">
        <div className="flex flex-col items-center justify-center text-center py-10">
            <h3 className='text-5xl font-bold py-5'>Contact With Us</h3>
            <p className='text-sm text-gray-400'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
            </p>
            <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-10 py-20'>
                <div className='grid grid-cols-2 bg-taupe-100'>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-b-2 border-r-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">Address</h1>
                        <p>A108 Adam Street,<br/> New York, NY 535022</p>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-b-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">Call Us</h1>
                        <div className="flex flex-col">
                            <p>+88 01750 00 00 00</p>
                            <p>+88 01750 00 00 00</p>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-r-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">Email Us</h1>
                        <div className="flex flex-col">
                            <p>info@gmail.com</p>
                            <p>info@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">Working Hours</h1>
                        <div className="flex flex-col">
                            <p>Mon-Fri: 9AM to 5PM</p>
                            <p>Sunday: 9AM to 1 PM</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className="bg-taupe-100 rounded-lg min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Your Name' className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Your Email' className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Subject' className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <textarea placeholder='Your Message' className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'></textarea>
                    </div>
                    <button className="bg-taupe-500 hover:bg-taupe-600 rounded-lg min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4 text-white font-bold">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
