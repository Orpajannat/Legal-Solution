"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';

export default function Footer () {
  const{data: footer, isLoading: footerLoading}= useGetSettingsQuery();
  const{data: subscribe=[], isLoading: settingsLoading}= useGetSettingsQuery();
  // const[subscribe, setSubscribe]= useState(null)
  // const[footer, setFooter]= useState(null)
  // const [loading, setLoading] = useState(true);
  const loading = footerLoading || settingsLoading;

  const[subscribeData, setSubscribeData]= useState({email:''});
  const [status, setStatus] = useState('');

  // useEffect(()=>{
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`)
  //     .then(res=>res.json())
  //     .then(json=>{
  //       setFooter(json.data);
  //       setSubscribe(json.data);
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) return <p className="text-center py-20 text-gray-400">Loading...</p>;

  const handleSubmit = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscribeData),
        });
        const json = await res.json();
        setStatus(json.success ? 'Subscription saved successfully.' : 'Something went wrong.');
    };
  return (
    <div className='bg-black py-30'>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] gap-10 px-10">
        <div className="flex flex-col">
          <Image src="/images/logo.png" alt="logo" width={150} height={75}/>
          <div className="md:text-sm text-xs text-taupe-300 pt-10">
            <p>{footer.footer_about}</p>
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
          <h3 className='font-bold text-xl text-white pb-10'>{subscribe.subscribe_title}</h3>
          <div className="flex flex-col text-taupe-300 md:text-sm text-xs">
            <p>{subscribe.subscribe_description}</p>
            <div className= "flex flex-col justify-center">
              <div className='flex flex-row pt-5'>
                <input type="text" placeholder='username@site.com'
                  value={subscribeData.email}
                  onChange={(e)=>setSubscribeData({...subscribeData, email: e.target.value})}
                  className='bg-white md:p-3 p-2 outline-none rounded-l-lg md:text-sm text-xs'/>
                  <button onClick={handleSubmit} className='bg-taupe-400 md:p-3 p-2 rounded-r-lg text-white font-semibold md:text-sm text-xs'>{subscribe.subscribe_button_text}</button>
              </div>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
