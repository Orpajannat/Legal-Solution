import HeroSection from '@/components/cases/HeroSection'
import HowCanWeHelpYou from '@/components/cases/HowCanWeHelpYou'
import LegalCounsel from '@/components/cases/LegalCounsel'
import NotableCaseStudies from '@/components/cases/NotableCaseStudies'
import React from 'react'

export default function cases(){
  return (
    <div className='py-6'>
        <HeroSection/>
        <NotableCaseStudies/>
        <LegalCounsel/>
        <HowCanWeHelpYou/>
    </div>
  )
}
