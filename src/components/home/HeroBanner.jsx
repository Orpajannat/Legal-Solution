"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';
import { getImageUrl } from "@/lib/image";

export default function HeroBanner () {
    const { data: settings, isLoading } = useGetSettingsQuery();

    const heroBanner = settings ? {
        ...settings,
        hero_background_image: getImageUrl(settings.hero_background_image)
    } : null;

    console.log(heroBanner)
    // const [heroBanner, setHeroBanner] = useState([]);
    //   const [loading, setLoading] = useState(true);
    
    //   useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
    //       .then(res => res.json())
    //       .then(json => {
    //         const data = {
    //             ...json.data,
    //             hero_background_image: `${process.env.NEXT_PUBLIC_BASE_URL}/${json.data.hero_background_image.replace('public/', '')}`,
    //         };
    //         setHeroBanner(data);
    //         setLoading(false);
    //       });
    //   }, []);
    
    if (isLoading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
  return (
    <div className="py-3 bg-white">
        <div className="relative w-full h-150">
            <Image src={heroBanner.hero_background_image} alt="herobanner" fill className="object-cover rounded-lg"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-7 md:px-0 px-4">
                <h3 className="text-white sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                    {heroBanner.hero_title}
                </h3>
                <h1 className="text-white sm:text-xs md:text-base lg:text-lg">
                    {heroBanner.hero_description}
                </h1>
                <div className="flex gap-5">
                    <input type="text" placeholder={heroBanner.hero_search_placeholder} className="bg-white text-black sm:w-20 md:w-90 lg:w-150 md:px-4 px-2 md:py-5 py-1 md:text-base text-xs md:rounded-lg rounded outline-none"/>
                    <button className="bg-taupe-600 sm:px-3 md:px-8 lg:px-12 md:rounded-lg rounded text-white md:text-base text-xs font-semibold">
                        Search
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
