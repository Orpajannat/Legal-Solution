"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import { useGetFaqsQuery } from '@/redux/features/faq/faqApi';
import { useGetSettingsQuery } from '@/redux/features/settings/settingsApi';


export default function FrequentlyAskedQuestion() {
  const [openIndex, setOpenIndex] = useState(0);

  const { data: faqs = [], isLoading: faqsLoading, isError: faqsError } = useGetFaqsQuery();
  const { data: faqIntro, isLoading: settingsLoading, isError: settingsError } = useGetSettingsQuery();

  const loading = faqsLoading || settingsLoading;

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  if (loading) return <p className="text-center py-20 text-gray-400">Loading...</p>;
  if (faqsError || settingsError) return <p className="text-center py-20 text-red-400">Failed to load FAQs.</p>;

  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className='text-5xl font-bold py-5'>{faqIntro?.faq_title}</h3>
        <p className='text-sm text-gray-400 pb-20'>
          {faqIntro?.faq_description}
        </p>
        <div className='flex flex-col md:flex-col lg:flex-row items-center gap-10 container mx-auto'>

          <div className="flex items-center justify-center py-12 gap-10">
            <div className="w-full max-w-3xl">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <div className={`bg-gray-200 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}>
                      <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-4 text-left cursor-pointer">
                        <span className="text-lg font-bold text-zinc-800 pr-4">{faq.question}</span>
                        <span className="shrink-0">
                          {openIndex === index ? (
                            <div className='size-4 flex items-center justify-center cursor-pointer'>
                              <svg className='block group-open:hidden' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                            </div>
                          ) : (
                            <div className='size-4 flex items-center justify-center cursor-pointer'>
                              <svg className='block group-open:hidden' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </div>
                          )}
                        </span>
                      </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="bg-gray-200 px-4 py-2 rounded-b-lg">
                        <p className="text-sm font-light text-zinc-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image src="/images/faq.png" alt="faq" width={600} height={300} className='h-fit w-fit' />
        </div>
      </div>
    </div>
  )
}
