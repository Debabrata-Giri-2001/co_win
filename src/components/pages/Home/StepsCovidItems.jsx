import React from 'react'
import imageSteps from '../../assets/images/covid_card.png'

export default function StepsCovidItems({
    img = imageSteps,
    about = "Book an Appointment onCo-WIN or Walk into any Vaccination Center",
    howAbout = "How to Book YourAppointment on Co-WIN?",
    steps = "Steps"
}) {
    return (
        <div className='m-4 max-w-[85%] md:max-w-[20%] ml-auto mr-auto bg-slate-200 dark:bg-[#142850] border-[4px] border-cyan-800 dark:border-cyan-200 rounded-md transition duration-500 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 '>
            <img className='max-w-[100%]' src={img} alt="step_image" />
            <p className='p-4 font-bold text-slate-800 dark:text-slate-100 text-lg'>{about}</p>
            <p className='p-3 font-semibold text-slate-800 dark:text-slate-100 text-lg'>{howAbout}</p>
            <p className='m-4 ml-auto text-slate-900 dark:text-slate-300 bg-[#b7effc] dark:bg-[#0C7B93] border-[3px] border-[#042058] dark:border-[#142850] rounded-lg p-2 mt-2 max-w-fit font-extrabold cursor-pointer'>{steps}</p>
        </div>

    )
}
