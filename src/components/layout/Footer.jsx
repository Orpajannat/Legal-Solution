import Image from 'next/image'
import React from 'react'

export default function Footer () {
  return (
    <div className='bg-black py-20 px-10'>
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col">
          <Image src="/images/logo.png" alt="logo" width={150} height={75}/>
          <div className="text-sm text-taupe-300 pt-10">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Usefull Link</h3>
          <div className="flex flex-col">
            <a href="#" className="text-sm text-taupe-300 hover:underline pb-2">Home</a>
            <a href="#" className="text-sm text-taupe-300 hover:underline pb-2">About us</a>
            <a href="#" className="text-sm text-taupe-300 hover:underline pb-2">Cases</a>
            <a href="#" className="text-sm text-taupe-300 hover:underline pb-2">Blog</a>
            <a href="#" className="text-sm text-taupe-300 hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Contact Now</h3>
          <div className="flex flex-col text-taupe-300">
            <p>555 4th 5t NW, Washington<br/>DC 20530, United States</p>
            <p className="hover:underline pt-2">+88 01750 000 000</p>
            <p className="hover:underline pb-2">+88 01750 000 000</p>
            <p className="hover:underline pt-2">info@gmail.com</p>
            <p className="hover:underline">info@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className='font-bold text-xl text-white pb-10'>Subscribe</h3>
          <div className="flex flex-col text-taupe-300">
            <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
            <div className='flex flex-row pt-5'>
              <input type="text" placeholder='username@site.com' className='bg-white p-3 outline-none rounded-l-lg'/>
              <button className='bg-taupe-400 p-3 rounded-r-lg text-white font-semibold'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
