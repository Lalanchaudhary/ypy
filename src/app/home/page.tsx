import Background from '@/components/Background'
import BatchTime from '@/components/home/BatchTime'
import Glimpsess from '@/components/home/Glimpsess'
import HeroSection from '@/components/home/HeroSection'
import Performance from '@/components/home/Performance'
import { StudentReview } from '@/components/home/StudentReview'
import TestResult from '@/components/home/TestResult'
import WhyChooseUs from '@/components/home/WhuChooseUs'
import React from 'react'

const Homepage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background/>
      <HeroSection/>
      <Performance/>
      <TestResult/>
      <Glimpsess />
      <WhyChooseUs/>
      <BatchTime />
      <StudentReview/>
    </div>
  )
}

export default Homepage
