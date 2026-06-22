"use client"
import React, { useState, useEffect} from 'react'
import Image from "next/image"
import { Menu } from 'lucide-react'
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';

export default function Header () {
    const[menuOpen, setMenuOpen]= useState(false)

    const {data: header, isLoading} = useGetSettingsQuery();

    // const[header, setHeader] = useState(null);
    // const [loading, setLoading] = useState(true);
    
    // useEffect(() => {
    //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
    //     .then(res => res.json())
    //     .then(json => {
    //       setHeader(json.data);
    //       setLoading(false);
    //     });
    // }, []);

    if (isLoading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
  return (
    <div className="px-6 relative">
        <div className="flex items-center justify-between">
            <div className="block md:hidden bg-gray-300 rounded-lg p-2">
              <Menu size={14} onClick={() => setMenuOpen(!menuOpen)}/>
              {menuOpen && (
                <div className="absolute left-6 top-10 z-20 flex flex-col bg-gray-300/60 shadow-lg rounded-lg mt-2 p-2">
                  <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Home</a>
                  <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Services</a>
                  <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Cases</a>
                  <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Blog</a>
                  <a href="#" className="px-3 py-2 rounded hover:bg-gray-200 text-sm">Contact Us</a>
                </div>
               )}
            </div>
            <Image src="/images/logo2.png" alt='logo' width={150} height={100}/>
            <div className="hidden md:flex items-center justify-center md:gap-1 lg:gap-7 text-gray-600">
                <a href="#" className="px-1 lg:px-3 py-1 lg:py-2 rounded hover:bg-gray-200 text-sm">Home</a>
                <a href="#" className="px-1 lg:px-3 py-1 lg:py-2 rounded hover:bg-gray-200 text-sm">Services</a>
                <a href="#" className="px-1 lg:px-3 py-1 lg:py-2 rounded hover:bg-gray-200 text-sm">Cases</a>
                <a href="#" className="px-1 lg:px-3 py-1 lg:py-2 rounded hover:bg-gray-200 text-sm">Blog</a>
                <a href="#" className="px-1 lg:px-3 py-1 lg:py-2 rounded hover:bg-gray-200 text-sm">Contact Us</a>
            </div>
            <button className="md:px-7 px-2 md:py-5 py-1 md:text-base text-xs bg-taupe-500 text-zinc-50 font-bold rounded-lg">
                {header?.consultation_button_text}
            </button>
        </div>
    </div>
  )
}
