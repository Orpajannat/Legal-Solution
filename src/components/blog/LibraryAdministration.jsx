import React from 'react'

export default function LibraryAdministration () {
  return (
    <div className='flex flex-col md:flex-col lg:flex-row shadow-2xl shadow-taupe-700 px-5 md:px-10 lg:px-0'>
        <div className='flex flex-col p-10 gap-5'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-taupe-800 whitespace-pre-wrap'>Library And Research Material</h1>
            <p className='text-gray-500 text-xs md:text-sm lg:text-base pb-1 whitespace-pre-wrap0'>
                The library of our Chambers can be termed as one of the most comprehensive and in-depth legal information resource centers. The quantity, quality, depth, breadth, and diversity of its readily accessible domestic and foreign casebooks, textbooks, law journals, practitioners’ books, manuals, reference books, comparative, and international legal information etc. distinguishes us from others.
            </p>
            <p className='text-gray-500 text-xs md:text-sm lg:text-base whitespace-pre-wrap'>
                We have access to many prominent national and international legal online resources. We have good collection of case references from India, Pakistan and other commonwealth countries like the UK, Australia, and the USA. We have also subscribed to international law periodicals to keep ourselves updated with the laws and legal practices across the globe.
            </p>
        </div>
        <div className='bg-taupe-200 flex flex-col p-10 gap-5 whitespace-pre-wrap'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-taupe-800 whitespace-pre-wrap'>Administrative Support Staff</h1>
            <p className='text-gray-500 text-xs md:text-sm lg:text-base pb-10 whitespace-pre-wrap'>
                Time is a very important factor in this modern world. To save the time of communication, we have all modern facilities of communication present in our chambers. We are also located at the very heart of the city, which may be little far from few places but not very far from anywhere. Despite having all modern methods of communication, we still feel the necessity that some of the documents to the client and from the client are still communicated in hard copies. 
            </p>
            <p className='text-gray-500 text-xs md:text-sm lg:text-base whitespace-pre-wrap'>
                To meet this need, we have as many as 5 administration support staff, whose only duty is to carry, deliver and collect documents etc. from and to the clients. Most of them are well conversant in English and have necessary levels of education. We have accounts manager and administrative officer to ensure smooth financial and administrative activities of the chambers releasing the lawyers from such activities.
            </p>
        </div>
    </div>
  )
}
