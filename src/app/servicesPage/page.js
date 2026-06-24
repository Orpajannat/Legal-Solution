"use client"
import BusinessServices from '@/components/servicesPage/BusinessServices'
import NeedHelp from '@/components/servicesPage/NeedHelp'
import Planning from '@/components/servicesPage/Planning'
import Protect from '@/components/servicesPage/Protect'
import React from 'react'

export default function servicesPage () {
  return (
    <div className="py-6">
        <Protect/>
        <Planning/>
        <BusinessServices/>
        <NeedHelp/>
    </div>
  )
}
