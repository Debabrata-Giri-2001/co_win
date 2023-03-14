import React from 'react'
import covid_bg_dark from '../../assets/images/covid_bg_dark.jpg'
import covid_cert_svg from '../../assets/SVG_file/covid-cert_svg.svg'
import ChildrenVaccination from './ChildrenVaccination'
import CovidSteps from './CovidSteps'
import ReportSide from './ReportSide'
import VaccinationCenter from './VaccinationCenter'
export default function Home() {
  return (
    <div className='bg-[#fdfdfd] dark:bg-[#0B162C]'>

      {/* Header Image And Titile */}
      <div>
        <img src={covid_bg_dark} alt="covid_bg_dark" />
        <h1 className=' absolute text-md md:text-5xl font-extrabold font-Inter text-white top-[10%] md:top-[20%] left-1/2'>Historic & Unparalleled Achievement !India’s Glorious Journey of..</h1>
        <div className='flex flex-row items-center max-w-fit border-2 md:border-[0.7rem] border-cyan-200 rounded-lg absolute top-[25%] md:top-[70%] left-1/2'>
          <img className='w-[3rem] md:w-[5rem]' src={covid_cert_svg} alt="covid_cert" />
          <h1 className='font-extrabold text-xs md:text-5xl text-white'>200 CROER VACCINATIONS</h1>
        </div>
      </div>

      {/* covid Step are.. */}

      <CovidSteps />

      <VaccinationCenter />
      {/* Report Side Effect */}
      <ReportSide />

      <ChildrenVaccination />

    </div>
  )
}
