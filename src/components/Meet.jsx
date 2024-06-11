import React from 'react'
import BlueShirt from '../assets/images/webp/blueshirt.webp'
import Group72 from '../assets/images/webp/Group72.webp'

const Meet = () => {
    return (
        <section className=' '>


            <div className="mycontainer">
                <div className="row align-items-center">
                    <div className="col-md-5 z-1 col-12" data-aos="fade-up">
                        <div className="blueshirt position-relative mx-auto">
                            <img src={BlueShirt} alt="blue" className='w-100' />
                            <div className=" position-absolute group72 z-n1 ">
                                <img src={Group72} alt="group" className='w-100' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 pt-4 pt-md-0 pb-sm-0 pb-4 z-1" data-aos="fade-up">
                        <h2 className='font-titlingGothic mb-0 fw-bold fs-48 lh-57 '>Meet The Team</h2>
                        <h5 className=' font-acumin fw-bold fs-18 lh-21 color-blue pt-10 pb-3 mb-0'>Oxfordshire's Dry Ice Car Cleaning Specialists</h5>
                        <h6 className='font-acumin fw-normal fs-16 lh-24 color-blue opacity-70 mb-0 max-w-md-613'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Meet