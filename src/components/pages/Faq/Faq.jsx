import React from 'react'
import FAQ from '../../assets/images/FAQ.jpg'
export default function Faq() {
  return (
    <div className='bg-slate-100 dark:bg-[#0B162C] text-cyan-900 dark:text-slate-100'>
      <img src={FAQ} alt="faq" />
      <p className='p-5 text-3xl md:text-5xl'>Frequently Asked Questions on Co-WIN</p>
    </div>
  )
}
