import React from 'react'
import FotterView from './FotterView'
export default function FotterSection() {
    return (
        <div className='flex flex-col md:flex-row bg-[#0C7B93] text-slate-50 p-2'>
            <div className='p-[1.5rem]'>
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>VACCINATION SERVICES</h1>
                <FotterView
                    HeadLink='Register Members'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Search Vaccination Centers'
                    Link='https://cowin.gov.in/#Search-Vaccination-Center'
                />
                <FotterView
                    HeadLink='Book Vaccination Slots'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Manage Appointment'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Download Certificate'
                    Link='https://selfregistration.cowin.gov.in/'
                />
            </div>
            <div className='p-[1.5rem]'>
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>PLATFORMS</h1>
                <FotterView
                    HeadLink='Co-WIN International'
                    Link='https://sandbox.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Vaccinator'
                    Link='https://app.cowin.gov.in/login'
                />
                <FotterView
                    HeadLink='Department Login'
                    Link='https://admin.cowin.gov.in/login'
                />
                <FotterView
                    HeadLink='Verify Certificates'
                    Link='https://verify.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Vaccination Statistics'
                    Link='https://dashboard.cowin.gov.in/'
                />

            </div>
            <div className='p-[1.5rem]'>
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>Vaccination Statistics</h1>
                <FotterView
                    HeadLink='How To Get Vaccinated'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Dos and Don`ts'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='Overview'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <FotterView
                    HeadLink='API Guidelines'
                    Link='https://apisetu.gov.in/api/cowin'
                />
                <FotterView
                    HeadLink='Open APIs'
                    Link='https://apisetu.gov.in/api/cowin'
                />
                <FotterView
                    HeadLink='Grievance Guidelines'
                    Link='https://selfregistration.cowin.gov.in/'
                />
            </div>
            <div className='p-[1.5rem]'>
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>SUPPORT</h1>
                <FotterView
                    HeadLink='Frequently Asked Questions'
                    Link='https://www.cowin.gov.in/faq'
                />
                <FotterView
                    HeadLink='Certificate Corrections'
                    Link='https://selfregistration.cowin.gov.in/'
                />
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>CONTACT US</h1>
                <FotterView
                    HeadLink='Helpline: +91-11-23978046 (Toll Free - 1075)'
                    Link='tel:1075'
                />
                <FotterView
                    HeadLink='Technical Helpline: 0120-4783222'
                    Link='tel:0120-4783222'
                />
            </div>
            <hr />
            <div className='p-[1.5rem]'>
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>CHILD</h1>
                <FotterView
                    HeadLink='1098'
                    Link='tel:1098'
                />
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>MENTAL HEALTH</h1>
                <FotterView
                    HeadLink='08046110007'
                    Link='tel:08046110007'
                />
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>SENIOR CITIZENS</h1>
                <FotterView
                    HeadLink='14567'
                    Link='tel:14567'
                />
                <h1 className='text-[#8ce4f7] text-[1.2rem] font-bold underline decoration-4 underline-offset-8'>NCW</h1>
                <FotterView
                    HeadLink='7827170170'
                    Link='tel:7827170170'
                />
            </div>
            <div className='self-center	'>
                <h1 className='text-[#fff] text-[1rem] md:text-[1.3rem] font-semibold '>Copyright © 2021 Co-WIN. All Rights Reserved</h1>
            </div>
        </div>
    )
}
