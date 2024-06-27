import React, { useState } from 'react'
import Card1 from '../assets/images/webp/card1.webp'
import Card2 from '../assets/images/webp/card2.webp'
import Card3 from '../assets/images/webp/card3.webp'
import Yes from '../assets/images/svg/Yes.svg'
import Emailicon from '../assets/images/webp/emailicon.webp'
const News = () => {
    const [ showicon , setShowicon] = useState(false)
   
    return (
        <section>
            <div className="mycontainer pt-50" id='blog'>
                <h2 className='color-blue mb-0 fs-48 lh-57 font-titlingGothic  text-center'>Latest News & Insights</h2>
                <h6 className='text-center color-blue opacity-70  pt-3 fw-normal fs-16 lh-24 pt-3 mb-0'>Uncover the latest insights and innovation in car care.</h6>

                <div className="row pt-sm-50 pt-4pp pb-40">
                    <div className="col-md-4 col-sm-6 col-12 " data-aos="fade-up">
                        <div className="mycard">
                            <img src={Card1} alt="card" className='w-100' />

                            <h5 className='mb-0  font-acumin  fw-semibold  opacity-80 fs-16 lh-24  pt-20 pl-10'>January 1st, 2024</h5>
                            <h6 className='mb-0 font-acumin  fw-bold fs-16 lh-24 pt-10 pl-10 pe-3'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-3 pt-sm-0" data-aos="fade-up">
                        <div className="mycard">
                            <img src={Card2} alt="card" className='w-100' />
                            <h5 className='mb-0  font-acumin  fw-semibold  opacity-80 fs-16 lh-24  pt-20 pl-10'>January 1st, 2024</h5>
                            <h6 className='mb-0 font-acumin  fw-bold fs-16 lh-24 pt-10 pl-10 pe-3'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</h6>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-3 pt-md-0 mx-auto" data-aos="fade-up">
                        <div className="mycard">
                            <img src={Card3} alt="card" className='w-100' />
                            <h5 className='mb-0  font-acumin  fw-semibold  opacity-80 fs-16 lh-24  pt-20 pl-10'>January 1st, 2024</h5>
                            <h6 className='mb-0 font-acumin  fw-bold fs-16 lh-24 pt-10 pl-10 pe-3'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className='orange-btn text-white fw-bold lh-19 fs-16   font-acumin '>More Blogs</button>
                </div>
                <div className="email-contant bg-blue mx-auto   d-flex flex-column align-items-center position-relative  mt-80" id='contact' >
                    <div className=" position-absolute email-icon">
                        <img src={Emailicon} alt="icon" />
                    </div>
                    <h2 className='font-titlingGothic mb-0 fw-bold fs-48 lh-57  text-center text-white'>Join Our Mailing List</h2>
                    <h6 className='mb-0  font-acumin fw-normal fs-16 lh-24 text-center text-white pt-2 pb-23'>Get news, videos and deals straight to your inbox.</h6>
                    <div className="email-box  d-sm-flex d-block w-100">
                        <input type="email" placeholder='Enter your email address ' className='   font-acumin fw-normal fs-16 lh-22 color-blue w-100 border-0 outline-none email-text' />
                        <button className='Subscribe-btn font-acumin fw-bold fs-16 lh-19 text-white   mt-sm-0 mt-2'>Subscribe</button>
                    </div>
                    <div className="pt-20 d-flex gap-2 align-items-sm-center align-items-start">                        
                        <div className="check-box d-flex cursor-pointer  " onClick={()=> setShowicon(!showicon)} >
                            <img src={Yes} alt="yes" className={`${showicon ? "show" : "hide"} w-100 `}/>
                        </div>
                        <h6  onClick={()=> setShowicon(!showicon)} className='mb-0 font-acumin fw-normal fs-14 lh-14 text-white confirm yexicon cursor-pointer' >I consent to receive emails & confirm I have read the <span className="fw-bold">privacy policy.</span></h6>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2976252930457!2d75.71978737502766!3d29.155900560122717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233d0d797efb7%3A0x90a59576018cca5f!2sRadial%20Code!5e0!3m2!1sen!2sin!4v1717580699211!5m2!1sen!2sin" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
export default News