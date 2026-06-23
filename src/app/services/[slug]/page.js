"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function ServicePage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/${slug}`)
      .then(res => res.json())
      .then(json => {
        const data = {
          ...json.data,
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}/${json.data.icon.replace('public/', '')}`,
        };
        setService(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center py-20 text-gray-400">Loading...</p>;

  return (
    <div className="container mx-auto py-20 px-10">
      <img src={service.icon} alt={service.title} width={70} height={35}/>
      <h1 className="text-4xl font-bold py-5">{service.title}</h1>
      <p className="text-gray-500">{service.description}</p>
    </div>
  )
}