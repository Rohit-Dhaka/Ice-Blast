import React from 'react'
import { Instagram, Tiktok, WhiteEmail, WhiteLocation, WhitePhone, WhiteTime, Youtube } from '../common/icon'
import Logo from '../assets/images/svg/logo.svg'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className='bg-blue'>
            <div className="mycontainer">
                <div className='d-flex  justify-content-between  flex-wrap pt-38 gap-3'>
                    <div className="d-flex gap-10">
                        <WhiteLocation />
                        <h6 className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>Crawley Mill Industrial Estate, Witney, Oxfordshire </h6>
                    </div>
                    <div className="d-flex gap-10">
                        <WhiteEmail />
                        <a href="mailto:book@dryiceblastingpro.co.uk" className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>book@dryiceblastingpro.co.uk</a>
                    </div>
                    <div className="d-flex gap-10">
                        <WhitePhone />
                        <a href="tel:+01865123456" className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin'>01865123456</a>
                    </div>
                    <div className="d-flex gap-10">
                        <WhiteTime />
                        <h6 className=' mb-0 text-white opacity-70  fw-normal fs-16 lh-24 font-acumin '>Mon - Fri: 9am to 5pm </h6>
                    </div>
                </div>
                <div className="row pt-57 pb-5">
                    <div className="col-lg-5 col-12">
                        <img src={Logo} alt="logo" />
                        <h6 className='mb-0  text-white  opacity-70  font-acumin  fw-normal fs-16 lh-25  pt-10 max-w-lg-350'>IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.</h6>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6 pt-4 pt-lg-0">
                        <ul className='m-0 p-0 d-flex flex-column gap-12'>
                            <li className=' font-acumin fw-bold fs-18 lh-27 text-white'>Quick Link</li>
                            <li className='pt-1'><a href="#home" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70'>Home</a></li>
                            <li><a href="#about" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>About Us</a></li>
                            <li><a href="#services" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>Services</a></li>
                            <li><a href="#blog" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>Blog</a></li>
                            <li><a href="#faq" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>FAQ’s</a></li>
                            <li><a href="#contact" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-6 pt-4 pt-lg-0 d-flex justify-content-lg-center">
                        <ul className='m-0 p-0 d-flex flex-column gap-12'>
                            <li className=' font-acumin fw-bold fs-18 lh-27 text-white'>Legal Information</li>
                            <li className='pt-1'><a href="" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70'>Terms of Service</a></li>
                            <li><a href="" className=' font-acumin fw-normal fs-16 lh-25 underline position-relative text-white opacity-70 '>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-12 pt-4 pt-lg-0 d-flex  justify-content-lg-end">
                        <div className="d-flex  flex-column pe-3 ">
                            <h6 className='mb-0 font-acumin fw-bold fs-18 lh-27 text-white'>Follow us</h6>

                            <div className="d-flex flex-sm-column  gap-sm-0 gap-3">
                                <div className="d-flex gap-12 align-items-center pt-3">
                                    <a href="https://www.instagram.com/" target='_blank' className='media-icon'>
                                        <Instagram />
                                    </a>
                                    <a href="https://www.instagram.com/" target='_blank' className='text-white opacity-70  font-acumin fw-normal fs-16 lh-24 d-sm-block d-none'>Instagram</a>
                                </div>
                                <div className="d-flex gap-12 align-items-center pt-18">
                                    <a href="https://www.tiktok.com/about" target='_blank' className='media-icon'>
                                        <Tiktok />
                                    </a>
                                    <a href="https://www.tiktok.com/about" target='_blank' className='text-white opacity-70  font-acumin fw-normal fs-16 lh-24 d-sm-block d-none'>Tiktok</a>
                                </div>
                                <div className="d-flex gap-12 align-items-center pt-18">
                                    <a href="https://www.youtube.com/?themeRefresh=1" target='_blank' className='media-icon'>
                                        <Youtube />
                                    </a>
                                    <a href="https://www.youtube.com/?themeRefresh=1" target='_blank' className='text-white opacity-70  font-acumin fw-normal fs-16 lh-24 d-sm-block d-none'>YouTube</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <h6 className='pb-25 mb-0  font-acumin fw-normal fs-14 lh-16 text-white opacity-70 text-center'>Copyright©{year}(IceBlastPro) All Rights Reserved.</h6>

            </div>
        </footer>
    )
}
export default Footer