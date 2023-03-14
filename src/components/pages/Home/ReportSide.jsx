import React from 'react'
import reports_aefi from '../../assets/SVG_file/reports-aefi.svg'
export default function ReportSide() {
    return (
        <div className='w-[80%] mt-[3rem] ml-auto mr-auto p-[1rem] flex flex-col md:flex-row bg-[#d3d3d3] dark:bg-[#27496D] rounded-md shadow-xl'>
            <div className='place-self-center'>
                <img src={reports_aefi} alt="reports_aefi" />
            </div>
            <div>
                <h1 className='text-cyan-800 dark:text-slate-100 font-extrabold text-4xl'>Report Side Effect</h1>
                <p className='text-slate-500 dark:text-slate-100 font-bold text-sm md:text-xl mt-6'>If you have experienced any side effect after COVID-19 vaccination, it can be reported on Co-WIN using your registered mobile number</p>
                <p className='p-2 text-cyan-900 dark:text-slate-100 font-medium text-sm md:text-xl mt-[20%] ml-[60%] border-2 border-[#00A8CC] max-w-fit'>Report Now</p>
            </div>
        </div>

    )
}
