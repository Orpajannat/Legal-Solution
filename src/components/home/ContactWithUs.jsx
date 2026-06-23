"use client"
import React, { useState} from 'react'
import Image from 'next/image'
import { useGetContactQuery } from '@/redux/features/contact/contactApi';
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';

export default function ContactWithUs () {
    // const [contact, setContact] = useState(null);
    // const[contactIntro, setContactIntro] = useState(null);
    // const [loading, setLoading] = useState(true);
    const {data: contact, isLoading: contactLoading }= useGetContactQuery();
    const {data: contactIntro, isLoading: settingsLoading }= useGetSettingsQuery();

    const loading = contactLoading || settingsLoading;

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

//     useEffect(() => {
//         Promise.all([
//             fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`).then(res => res.json()),
//             fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`).then(res => res.json()),
//         ]).then(([contactJson, settingsJson]) => {
//             setContact(contactJson.data);
//             setContactIntro(settingsJson.data);
//             setLoading(false);
//   });
// }, []);

    if (loading) return <p className="text-center py-20 text-gray-400">Loading...</p>;


    const handleSubmit = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        });
        const json = await res.json();
        setStatus(json.success ? 'Message submitted successfully.' : 'Something went wrong.');
    };
    
  return (
    <div className="py-30">
        <div className="flex flex-col items-center justify-center text-center py-10">
            <h3 className='text-5xl font-bold py-5'>{contactIntro.contact_title}</h3>
            <p className='text-sm text-gray-400'>
                {contactIntro.contact_description}
            </p>
            <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-10 py-20'>
                <div className='grid grid-cols-2 bg-taupe-100'>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-b-2 border-r-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">{contact.address_title}</h1>
                        <p>{contact.address}</p>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-b-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">{contact.phone_title}</h1>
                        <div className="flex flex-col">
                            <p>{contact.phone_primary}</p>
                            <p>{contact.phone_secondary}</p>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center border-r-2 border-gray-300 gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">{contact.email_title}</h1>
                        <div className="flex flex-col">
                            <p>{contact.email_primary}</p>
                            <p>{contact.email_secondary}</p>
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-2 lg:px-25 py-10 items-center justify-center gap-1 md:gap-1 lg:gap-3">
                        <Image src="/images/address.png" alt="address" width={30} height={15}/>
                        <h1 className="text-xl font-bold">{contact.hours_title}</h1>
                        <div className="flex flex-col">
                            <p>{contact.working_hours}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className="bg-taupe-100 rounded-lg min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Your Name' 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Your Email'
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <input type='text' placeholder='Subject'
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'/>
                    </div>
                    <div className="bg-taupe-100 rounded-lg  min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4">
                        <textarea placeholder='Your Message'
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className='pl-4 w-full border-none outline-none shadow-none bg-transparent text-gray-500'></textarea>
                    </div>

                    <p>{status}</p>
                    <button onClick={handleSubmit} className="bg-taupe-500 hover:bg-taupe-600 rounded-lg min-w-2 md:min-w-2 lg:min-w-3xl py-1 md:py-1 lg:py-4 text-white font-bold">
                        {contactIntro.contact_button_text}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
