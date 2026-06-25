"use client"
import React from 'react'
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';
import { getImageUrl } from "@/lib/image";
import Image from 'next/image';

export default function Protect () {
    const { data: settings, isLoading } = useGetSettingsQuery();

    const banner = settings ? {
        ...settings,
        hero_background_image: getImageUrl(settings.hero_background_image)
    } : null;

    if (isLoading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
  return (
    <div className='p-3'>
        <div className="relative w-full h-150">
            <Image src={banner.hero_background_image} alt="banner" fill className="object-cover rounded-lg"/>
            <div className="absolute inset-0 flex flex-col justify-start gap-5 p-30 md:px-30 px-4">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-100">Protect your family or<br/> set up your business</h3>
                <h1 className="text-base md:text-lg lg:text-2xl text-orange-200 pb-10">Get the help you need with DIY tools</h1>
                <p className="text-xs md:text-base text-white">FindLaw, the #1 trusted source for free legal information, brings you<br/> affordable, high-quality forms and services.Secure your future today.</p>
                <div className="flex flex-row items-center gap-10 pt-10">
                    <button className="px-4 py-3 rounded-lg bg-taupe-700 text-white md:text-base text-xs font-bold cursor-pointer">
                       Estate planning
                    </button>
                    <button className="px-4 py-3 rounded-lg bg-taupe-700 text-white md:text-base text-xs font-bold cursor-pointer">
                       Business formation
                    </button>
                </div>
        </div>
        </div>
    </div>
  )
}
