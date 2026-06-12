import React from 'react'
import Image from "next/image"

export default function Header () {
  return (
    <div className="px-6">
        <div className="flex items-center justify-between">
            <Image src="/images/logo2.png" alt='logo' width={150} height={100}/>
            <div className="flex ites-center justify-center gap-7 text-gray-600">
                <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Home</a>
                <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Services</a>
                <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Cases</a>
                <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Blog</a>
                <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Contact Us</a>
            </div>
            <button className="px-7 py-5 bg-taupe-500 text-zinc-50 font-bold rounded-lg">
                Free Consultation
            </button>
        </div>
    </div>
  )
}
