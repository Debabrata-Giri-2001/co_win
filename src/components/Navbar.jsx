import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import covid_19 from './assets/images/covid_19.png'
import moon_svg from './assets/SVG_file/moon_svg.svg'
import menu from './assets/SVG_file/menu.svg'
import cross_svg from './assets/SVG_file/cross_svg.svg'
import Darkmode from '../components/pages/DarkMode/Darkmode'
import sun_svg from '../components/assets/SVG_file/sun_svg.svg'

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [colorTheme, setTheme] = Darkmode();


    return (

        <div className='flex flex-row justify-around backdrop-blur-sm md:items-center bg-cyan-600 bg-opacity-[80%] fixed w-[100%] z-50'>

            {/* Image_logo */}
            <div>
                <NavLink to='/'><img className='w-[50%] md:w-[20%]' src={covid_19} alt="logo" /></NavLink>
            </div>

            {/* Md Vire Nav */}
            <div
                className='w-[10rem] md:hidden p-2'
                onClick={() => setShowNav(!showNav)}
            >
                <img src={menu} alt="menu_icon" />
            </div>

            {/* Navbar head */}
            <div className={!showNav ? 'translate-y-[-100%] md:translate-y-[0] w-[100%] md:w-[auto] p-1 absolute transition duration-300 ease-in-out transform  ' : 'p-1 w-[100%] absolute md:translate-y-[0%] md:w-[auto] transition duration-300 ease-in-out transform bg-cyan-900 md:bg-transparent	 md:opacity-[100%]'}>
                <div
                    onClick={() => setShowNav(!showNav)}
                    className='w-[3rem] ml-[80%] bg-slate-100 rounded-md md:hidden'
                >
                    <img src={cross_svg} alt="cross_svg" />
                </div>
                <ul className='p-1 rounded-md text-slate-100 md:text-slate-200 text-center text-lg font-bold flex flex-col md:flex-row'>

                    <li className=' m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/'
                    >Home</NavLink>
                    </li>

                    <li className=' m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/abha'
                    >ABHA(Health ID)</NavLink>
                    </li>

                    <li className='m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/dashbord'
                    >DASHBOARD</NavLink>
                    </li>

                    <li className='m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/verifycertificate'
                    >VERIFY CERTIFICATE</NavLink>
                    </li>

                    <li className='m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/faq'
                    >FAQ</NavLink>
                    </li>

                    <li className='m-1 rounded-md md:bg-cyan-700 border border-cyan-100 shadow-md p-4'><NavLink
                        onClick={() => setShowNav(!showNav)}
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                        to='/partners'
                    >PARTNERS</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dark Tuggel */}
            <div className='w-[10rem] md:w-[4rem] m-1 border-2 border-slate-200 rounded-md'>
                <span onClick={() => setTheme(colorTheme)}>
                    {
                        colorTheme === 'dark' ? (
                            <img src={moon_svg} alt="moon" />
                        ) : (
                            <img src={sun_svg} alt="" />
                        )
                    }
                </span>
            </div>
        </div>
    )
}
