import React from 'react'
import Image from 'next/image'

export default function LegalPracticeArea () {
  return (
    <div className="py-40 px-45">
        <div className="flex flex-col items-center justify-center gap-5">
            <h3 className='text-4xl font-bold'>The Legal Practice Area</h3>
            <p className='text-sm text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <div className="grid grid-cols-3 py-20">
                <div className="flex flex-col items-center gap-5 border-b-2 border-r-2 border-gray-200 p-10">
                    <Image src="/images/business.png" alt="businesslaw" width={70} height={35}/>
                    <h1 className='text-xl font-semibold'>Business Law</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
                <div className="flex flex-col items-center gap-5 border-b-2 border-r-2 border-gray-200 p-10 bg-linear-to-b from-gray-200 to-white">
                    <Image src="/images/criminal.png" alt="criminallaw" width={60} height={30}/>
                    <h1 className='text-xl font-semibold'>Criminal Law</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
                <div className="flex flex-col items-center gap-5 border-b-2 border-gray-200 p-10">
                    <Image src="/images/child.png" alt="childlaw" width={70} height={35}/>
                    <h1 className='text-xl font-semibold'>Child Support</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
                <div className="flex flex-col items-center gap-5 border-r-2 border-gray-200 p-10">
                    <Image src="/images/education.png" alt="educationlaw" width={60} height={30}/>
                    <h1 className='text-xl font-semibold'>Education Law</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
                <div className="flex flex-col items-center gap-5 border-r-2 border-gray-200 p-10">
                    <Image src="/images/divorce.png" alt="divorcelaw" width={80} height={40}/>
                    <h1 className='text-xl font-semibold'>Divorce Law</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
                <div className="flex flex-col items-center gap-5 p-10">
                    <Image src="/images/tax.png" alt="taxlaw" width={60} height={30}/>
                    <h1 className='text-xl font-semibold'>Tax Law</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <Image src="/images/Frame.png" alt="businesslaw" width={40} height={20}/>
                </div>
            </div>
        </div>
    </div>
  )
}
