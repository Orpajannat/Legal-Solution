"use client"
import React, { useState } from 'react'
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { useGetSettingsQuery, useFreeConsultationMutation } from '@/redux/features/settings/settingsApi';

export default function Header () {
    const [menuOpen, setMenuOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const {data: header, isLoading} = useGetSettingsQuery();
    const [freeConsultation, { isLoading: sending }] = useFreeConsultationMutation();

    const [Data, setData] = useState({ name: '', email: '', phone: '', service_interest: '', message: ''});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    if (isLoading) return <p className="text-center py-20 text-gray-400">Loading...</p>;

    const validate = () => {
        const newErrors = {};

        if (!Data.name.trim()) newErrors.name = 'Name is required';
        if (!Data.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Data.email)) newErrors.email = 'Enter a valid email';
        if (!Data.phone.trim()) newErrors.phone = 'Phone is required';
        if (!Data.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        const res = await freeConsultation(Data);
        setStatus(res.data?.success ? 'Message submitted successfully.' : 'Something went wrong.');
    };

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
                <button onClick={() => setModalOpen(true)} className="md:px-7 px-2 md:py-5 py-1 md:text-base text-xs bg-taupe-500 text-zinc-50 font-bold rounded-lg">
                    {header?.consultation_button_text}
                </button>
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                        <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4">
                            <X size={20}/>
                        </button>
                        <h2 className="text-2xl font-bold mb-6">Free Consultation</h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <input type='text' placeholder='Your Name'
                                    value={Data.name}
                                    onChange={(e) => setData({...Data, name: e.target.value})}
                                    className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm'/>
                                {errors.name && <p className="text-red-400 text-xs mt-1 text-left">{errors.name}</p>}
                            </div>
                            <div>
                                <input type='text' placeholder='Your Email'
                                    value={Data.email}
                                    onChange={(e) => setData({...Data, email: e.target.value})}
                                    className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm'/>
                                {errors.email && <p className="text-red-400 text-xs mt-1 text-left">{errors.email}</p>}
                            </div>
                            <div>
                                <input type='text' placeholder='Your Phone'
                                    value={Data.phone}
                                    onChange={(e) => setData({...Data, phone: e.target.value})}
                                    className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm'/>
                                {errors.phone && <p className="text-red-400 text-xs mt-1 text-left">{errors.phone}</p>}
                            </div>
                            <div>
                                <input type='text' placeholder='Service Interest'
                                    value={Data.service_interest}
                                    onChange={(e) => setData({...Data, service_interest: e.target.value})}
                                    className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm'/>
                                {errors.message && <p className="text-red-400 text-xs mt-1 text-left">{errors.service_interest}</p>}
                            </div>
                            <div>
                                <textarea placeholder='Your Message'
                                    value={Data.message}
                                    onChange={(e) => setData({...Data, message: e.target.value})}
                                    className='w-full border border-gray-300 rounded-lg p-3 outline-none text-sm'/>
                                {errors.message && <p className="text-red-400 text-xs mt-1 text-left">{errors.message}</p>}
                            </div>
                            {status && <p className="text-sm text-center">{status}</p>}
                            <button onClick={handleSubmit} disabled={sending} className="bg-taupe-500 text-white font-bold py-3 rounded-lg">
                                {sending ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}