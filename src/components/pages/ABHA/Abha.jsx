import React from 'react'
import According from './According'
import BannerHead from './BannerHead'

export default function Home() {
  return (
    <div className='bg-slate-100 dark:bg-[#0B162C]'>
      <BannerHead />
      <According />
    </div>
  )
}
