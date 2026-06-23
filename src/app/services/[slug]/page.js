"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetServiceBySlugQuery } from '@/redux/features/services/servicesApi';
import { getImageUrl } from '@/lib/image';

export default function ServicePage() {
    const { slug } = useParams();
    const { data: rawService, isLoading } = useGetServiceBySlugQuery(slug);

    const service = rawService ? {
        ...rawService,
        icon: getImageUrl(rawService.icon)
    } : null;

    if (isLoading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
    if (!service) return <p className="text-center py-20 text-red-400">Service not found.</p>;

    return (
        <div className="container mx-auto py-20 px-10">
            <img src={service.icon} alt={service.title} width={70} height={35}/>
            <h1 className="text-4xl font-bold py-5">{service.title}</h1>
            <p className="text-gray-500">{service.description}</p>
        </div>
    )
}