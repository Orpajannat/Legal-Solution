"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image'

const faqData = [
   {
      question: "1. Are application fee waivers available?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   },
   {
      question: "2. Are application fee waivers available?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   },
   {
      question: "2. Are application fee waivers available?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   },
   {
      question: "2. Are application fee waivers available?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
   }
];

export default function FrequentlyAskedQuestion () {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);
  
  return (
    <div className="py-30">
      <div className="flex flex-col items-center justify-center">
        <h3 className='text-5xl font-bold py-5'>Frequently Asked Any Questions</h3>
        <p className='text-sm text-gray-400 pb-20'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <div className='flex flex-row'>
          <div className="max-w-3xl mx-auto">
            <div className="bg-taupe-100 gap-5">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;

                  return (
                    <div key={index} className="py-6">
                          <h3 id={`faq-heading-${index}`}>
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={`faq-panel-${index}`}
                              onClick={() => setOpenIndex(isOpen ? null : index)}
                              className="toggle-button cursor-pointer w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500 rounded dark:text-slate-50"
                            >
                              <span className="mr-4 text-left">{item.question}</span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 className="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                                 aria-hidden="true"
                              >ss
                                 <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                                 <path
                                    className={`transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                                    d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                                 />
                              </svg>
                            </button>
                          </h3>

                          <div
                           id={`faq-panel-${index}`}
                           role="region"
                           aria-labelledby={`faq-heading-${index}`}
                           aria-hidden={!isOpen}
                           ref={(el) => (contentRefs.current[index] = el)}
                           style={{
                              maxHeight: isOpen ? `${contentRefs?.current[index]?.scrollHeight}px` : '0px',
                           }}
                           className={`content overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? 'invisible' : ''}`}
                          >
                            <div className="mt-4">
                              <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                                 {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
            </div>
          </div>
          <Image src="/images/faq.png" alt="faq" width={350} height={300}/>
        </div>
      </div>
    </div>
  )
}
