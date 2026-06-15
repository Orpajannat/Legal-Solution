import Image from 'next/image'
import React from 'react'

export default function Footer () {
  return (
    <div className='bg-black py-30'>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] gap-10 px-10">
        <div className="flex flex-col">
          <Image src="/images/logo.png" alt="logo" width={150} height={75}/>
          <div className="md:text-sm text-xs text-taupe-300 pt-10">
            <p>There are many variations of passages<br/> of Lorem Ipsum available, but the majority<br/> have suffered alteration in some form,<br/> by injected humour.</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Usefull Link</h3>
          <div className="flex flex-col">
            <a href="#" className="md:text-sm text-xs text-taupe-300 hover:underline pb-2">Home</a>
            <a href="#" className="md:text-sm text-xs text-taupe-300 hover:underline pb-2">About us</a>
            <a href="#" className="md:text-sm text-xs text-taupe-300 hover:underline pb-2">Cases</a>
            <a href="#" className="md:text-sm text-xs text-taupe-300 hover:underline pb-2">Blog</a>
            <a href="#" className="md:text-sm text-xs text-taupe-300 hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Contact Now</h3>
          <div className="flex flex-col text-taupe-300">
            <p className="md:text-sm text-xs">555 4th 5t NW, Washington<br/>DC 20530, United States</p>
            <p className="md:text-sm text-xs hover:underline pt-2">+88 01750 000 000</p>
            <p className="md:text-sm text-xs hover:underline pb-2">+88 01750 000 000</p>
            <p className="md:text-sm text-xs hover:underline pt-2">info@gmail.com</p>
            <p className="md:text-sm text-xs hover:underline">info@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Subscribe</h3>
          <div className="flex flex-col text-taupe-300 md:text-sm text-xs">
            <p>Subscribe for our latest & Articles. We<br/> Won’t Give You Spam Mails</p>
            <div className='flex flex-row pt-5'>
              <input type="text" placeholder='username@site.com' className='bg-white md:p-3 p-2 outline-none rounded-l-lg md:text-sm text-xs'/>
              <button className='bg-taupe-400 md:p-3 p-2 rounded-r-lg text-white font-semibold md:text-sm text-xs'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
