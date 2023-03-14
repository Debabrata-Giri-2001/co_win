import React from 'react'
import medicalAbha from '../../assets/images/medicalAbha.jpg'
import svg1 from '../../assets/SVG_file/medical-receipt-2-svgrepo-com.svg'
import svg2 from '../../assets/SVG_file/id-card-svgrepo-com.svg'
import svg3 from '../../assets/SVG_file/happy-face-svgrepo-com.svg'
import svg4 from '../../assets/SVG_file/sign-out-alt-3-svgrepo-com.svg'
export default function BannerHead() {
    return (
        <div>
            <div>
                <img className='' src={medicalAbha} alt="" />
                <h1 className=' absolute text-2xl md:text-5xl font-extrabold font-Inter top-[10%] md:top-[20%] left-1 bg-clip-text text-transparent bg-gradient-to-r from-[#142850] to-[#0C7B93]'>Ayushman Bharat Digital Mission</h1>
            </div>
            <div className='p-3'>
                <h1 className='text-cyan-800 dark:text-slate-100 text-4xl md:text-5xl'>Creating India's Digital Health Ecosystem</h1>
            </div>
            <div>
                <p className='text-center text-3xl md:text-5xl font-extrabold text-cyan-800 dark:text-slate-100'>Benefits of ABHA number</p>
                <div className='flex flex-col md:flex-row w-[100%] p-[2rem] items-center'>
                    <div>
                        <div className='mt-2 p-2 w-[100%] md:w-[50%] border-2 border-slate-800 dark:border-slate-100 rounded-md ml-auto mr-auto'>
                            <img className='w-[40%]' src={svg1} alt="svg_happy" />
                            <p className='text-cyan-800 dark:text-slate-100 text-2xl font-bold'>Unique & Trustable Identity</p>
                            <p className='text-cyan-800 dark:text-slate-100 text-xl font-medium'>Establish unique identity across different healthcare providers within the healthcare ecosystem</p>

                        </div>
                        <div className='mt-2 p-2 w-[100%] md:w-[50%] border-2 border-slate-800 dark:border-slate-100 rounded-md ml-auto mr-auto'>
                            <img className='w-[40%]' src={svg2} alt="svg_happy" />
                            <p className='text-cyan-800 dark:text-slate-100 text-2xl font-bold'>Unified Benefits</p>
                            <p className='text-cyan-800 dark:text-slate-100 text-xl font-medium'>Link all healthcare benefits ranging from public health programmes to insurance schemes to your unique ABHA number</p>

                        </div>
                    </div>

                    <div>
                        <div className='mt-2 p-2 w-[100%] md:w-[50%] border-2 border-slate-800 dark:border-slate-100 rounded-md ml-auto mr-auto'>
                            <img className='w-[40%]' src={svg3} alt="svg_happy" />
                            <p className='text-cyan-800 dark:text-slate-100 text-2xl font-bold'>Hassle-free Access</p>
                            <p className='text-cyan-800 dark:text-slate-100 text-xl font-medium'>Avoid long lines for registration in healthcare facilities across the country</p>
                        </div>
                        <div className='mt-2 p-2 w-[100%] md:w-[50%] border-2 border-slate-800 dark:border-slate-100 rounded-md ml-auto mr-auto'>
                            <img className='w-[40%]' src={svg4} alt="svg_happy" />
                            <p className='text-cyan-800 dark:text-slate-100 text-2xl font-bold'>Easy PHR Sign Up</p>
                            <p className='text-cyan-800 dark:text-slate-100 text-xl font-medium'>Seamless sign up for PHR (Personal Health Records) applications such as ABDM ABHA application for Health data sharing</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
