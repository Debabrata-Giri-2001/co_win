import React from 'react'
import StepsCovidItems from './StepsCovidItems'

import image1 from '../../assets/images/todo_file.png'
import image2 from '../../assets/images/Vaccination.png'
import image3 from '../../assets/images/covid_card.png'

export default function CovidSteps() {
    return (
        <>
            <div className='bg-[#fdfdfd] dark:bg-[#0B162C]'>


                <h1 className='p-3 text-2xl md:text-6xl dark:text-slate-100 text-slate-800 font-extrabold text-center'>Get Vaccinated in 3 Easy Steps</h1>


                <div className='flex flex-col md:flex-row'>
                    <StepsCovidItems
                        img={image1}
                        about='Book an Appointment onCo-WIN or Walk into any Vaccination Center'
                        howAbout='How to Book YourAppointment on Co-WIN?'
                        steps='step-1'
                    />
                    <StepsCovidItems
                        img={image2}
                        about='Get Your Vaccination Safely at the Time of Your Appointment'
                        howAbout='Dos And Dont`s For GettingVaccinated'
                        steps='step-2'
                    />
                    <StepsCovidItems
                        img={image3}
                        about='Download Your Vaccination Certificate from Co-WIN and Wait for Dose #2'
                        howAbout='Download Your VaccineCertificate'
                        steps='step-3'
                    />
                </div>
            </div>
        </>
    )
}
