import React from 'react'
import Children_Vaccination from '../../assets/SVG_file/Children_Vaccination.svg'
export default function ChildrenVaccination() {
    return (
        <div className='text-slate-100 mt-[5rem] md:mt-[10rem] w-[80%] ml-auto mr-auto '>
            <img className=' h-[100%] ml-auto mr-auto' src={Children_Vaccination} alt="children_vaccination" />
            <div className=''>
                <h1 className='text-cyan-900 dark:text-[#FFF] font-extrabold text-4xl md:text-5xl'>Children Vaccination</h1>
                <div className='p-2 text-[#00A8CC] font-light md:text-xl'>
                    <li className='mt-3'>Covovax vaccine is now available for Children of the age group 12+ yrs in Private Vaccination Centre. The time span between first and second dose of Covovax is 21 days. Children can be administered with the second dose of Covovax within a month.</li>
                    <li className='mt-3'>Children of the age group 12-14 yrs are now eligible for the Corbevax vaccine in Government Vaccination Centre and in Private Vaccination Centre 12+ yrs. The period between a first and second dose of Corbevax is 28 days.</li>
                    <li className='mt-3'>Covaxin is available for Children of the age group of 15+ yrs in both Government and Private Vaccination Centre. Children must be completed 4 to 6 weeks after administration of the first dose of Covaxin to take the second dose of Covaxin. Both online and walk-in are available.</li>
                </div>
                <div>
                    <p className='bg-[#0C7B93] max-w-fit p-3 rounded-md font-bold ml-[50%] border-2 border-slate-800'>Book Your Slot</p>
                </div>
            </div>
        </div>
    )
}
