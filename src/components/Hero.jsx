import React, { useState } from 'react'
import Logo from '../assets/images/svg/logo.svg'
import { Email, Location, Phone, Tick, Time } from '../common/icon'
const Hero = () => {
    const [data, setdata] = useState(false);
    function show() {
        setdata(!data)
        if (data === false) {
            document.body.classList.add("navhide")
        }
        else {
            document.body.classList.remove("navhide")
        }
    }
    return (
        <section className=' min-vh-100 hero-background position-relative overflow-hidden'>
            <div className="mycontainer d-lg-block d-none">
                <div className='d-flex  justify-content-between pt-14  flex-wrap '>
                    <div className="d-flex gap-10">
                        <Location />
                        <h6 className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>Crawley Mill Industrial Estate, Witney, Oxfordshire </h6>
                    </div>
                    <div className="d-flex gap-10">
                        <Email />
                        <a href="mailto:book@dryiceblastingpro.co.uk" className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>book@dryiceblastingpro.co.uk</a>

                    </div>
                    <div className="d-flex gap-10">
                        <Phone />
                        <a href="tel:+01865123456" className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>01865123456</a>

                    </div>
                    <div className="d-flex gap-10">
                        <Time />
                        <h6 className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin '>Mon - Fri: 9am to 5pm </h6>
                    </div>
                </div>
            </div>
            <nav className="d-flex justify-content-between bg-white navbar  mx-xl-auto mx-sm-3 mx-2   mt-sm-14 mt-2">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className={`${data ? "right-0" : ""}  menu  d-flex   align-items-center  gap-245`}     >
                    <ul className='d-flex gap-24 mb-0 p-0'>
                        <li><a href="#home" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>Home</a></li>
                        <li><a href="#about" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>About us</a></li>
                        <li><a href="#services" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>Services</a></li>
                        <li><a href="#pricing" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>Pricing</a></li>
                        <li><a href="#blog" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>Blog</a></li>
                        <li><a href="#contact" className=' fw-bold fs-16 lh-19 color-gray  navlink duration-300 font-acumin underline position-relative'>Contact us</a></li>
                    </ul>
                    <button className='orange-btn text-white fw-bold lh-19 fs-16  font-acumin'>Call Us</button>
                </div>
                <div className="menuicon  z-3   d-lg-none d-block" onClick={show} >
                    <span className='bar'></span>
                    <span className='bar my-2'></span>
                    <span className='bar'></span>
                </div>
            </nav>
            <div className="mycontainer pb-lg-237 pb-sm-80 pb-60 ">
                <div className="d-flex flex-column justify-content-center  align-items-center pt-87" id='home'>
                    <h1 className='mb-0 text-white fw-bold fs-96 lh-115  text-center font-titlingGothic max-w-730'>Automotive Dry Ice Cleaning</h1>
                    <h6 className='mb-0 text-white fw-normal fs-20 lh-30 text-center pt-3 pb-40 font-acumin'>Discover the ultimate clean for your machine. No chemicals, no abrasives and no drama.</h6>
                    <button className='orange-btn text-white fw-bold lh-19 fs-16  mb-39 font-acumin'>Get Instant Quote</button>
                    <div className="blur-box d-flex gap-sm-28 gap-3 w-100 justify-content-center flex-wrap">
                        <div className="d-flex gap-12 align-items-center">
                            <Tick />
                            <h6 className='mb-0 text-white font-acumin'>Non-Abrasive</h6>
                        </div>
                        <div className="d-flex gap-12 align-items-center">
                            <Tick />
                            <h6 className='mb-0 text-white font-acumin'>No Chemicals</h6>
                        </div>
                        <div className="d-flex gap-12 align-items-center">
                            <Tick />
                            <h6 className='mb-0 text-white font-acumin'>No Mess</h6>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Hero