import React from 'react'
import Bluetop from '../assets/images/webp/bluetop.webp'
import Bluebottom from '../assets/images/webp/bluebottom.webp'
import Carwash from '../assets/images/webp/carwash.webp'
import { Playbtn } from '../common/icon'

const Behind = () => {
    return (
        <section className='behind-background'>
            <img src={Bluetop} alt="img" className='w-100' />
            <div className="mycontainer pt-sm-0 pt-4">
                <div className="d-flex flex-column align-items-center pb-sm-50 pb-4">
                    <h2 className='mb-0 font-titlingGothic fw-bold fs-48 lh-57 text-center text-white max-w-680'>Behind the Scenes
                        Dry Ice Blasting a Car</h2>
                        <h6 className=' font-acumin fw-normal fs-16 lh-24 text-center text-white max-w-592 pt-12 mb-0'>From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.</h6>
                </div>
                <div className=" position-relative" data-aos="fade-up">
                    <img src={Carwash} alt="car" className='w-100' />
                    <div className=" position-absolute playbtn cursor-pointer">
                        <Playbtn/>
                    </div>

                </div>
                <div className="pt-40 d-flex flex-column align-items-center">
                    <h5 className='text-white  font-acumin fw-bold fs-16 lh-24  pb-20 text-center'>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</h5>
                    <button className='orange-btn text-white fw-bold lh-19 fs-16  mb-34 font-acumin'>Get Instant Quote</button>
                </div>
            </div>
            <img src={Bluebottom} alt="img" className='w-100' />

        </section>
    )
}

export default Behind