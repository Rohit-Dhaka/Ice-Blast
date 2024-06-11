import React from 'react'
import Carcling from '../assets/images/webp/Carcling.webp'
import { Yesicon } from '../common/icon'

const Future = () => {
    return (
        <section className='future-background'>
            <div className="mycontainer">
                <div className="row pt-sm-83 pt-60 flex-wrap-reverse" id='about'>
                    <div className="col-lg-6 col-12 pt-4 pt-lg-0" data-aos="fade-right">
                        <h2 className='mb-0 fw-bold lh-57 fs-48 color-blue max-w-351 font-titlingGothic'>The Future of Car Cleaning</h2>
                        <h6 className='mb-0 pt-13  font-acumin  fw-normal fs-16 lh-24  opacity-70'>No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</h6>
                        <div className="d-flex gap-3 pt-24" >
                            <Yesicon />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0 font-acumin fw-bold fs-16 lh-24 blue-200 '>Gentle Yet Powerful</h5>
                                <h6 className='font-acumin mb-0 fw-normal fs-16 lh-24  opacity-70 pt-6 blue-200'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</h6>
                            </div>

                        </div>
                        <div className="d-flex gap-3 pt-3">
                            <Yesicon />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0 font-acumin fw-bold fs-16 lh-24 blue-200 '>Precision Cleaning</h5>
                                <h6 className='font-acumin mb-0 fw-normal fs-16 lh-24  opacity-70 pt-6 blue-200'>See how accurately we target the grunge zones, ensuring every inch of your car's undercarriage and engine is meticulously cleaned.</h6>
                            </div>
                        </div>
                        <div className="d-flex gap-3 pt-3">
                            <Yesicon />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0 font-acumin fw-bold fs-16 lh-24 blue-200 '>Safe for AlI Vehicles</h5>
                                <h6 className='font-acumin mb-0 fw-normal fs-16 lh-24  opacity-70 pt-6 blue-200'>Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.</h6>
                            </div>
                        </div>
                        <div className="d-flex gap-3 pt-3">
                            <Yesicon />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0 font-acumin fw-bold fs-16 lh-24 blue-200 '>Eco-Friendly Approach</h5>
                                <h6 className='font-acumin mb-0 fw-normal fs-16 lh-24  opacity-70 pt-6 blue-200'>Notice the absence of water or chemical runoff, showcasing our commitment to an environmentally responsible cleaning process.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12" data-aos="fade-left">
                        <div className="carcling mx-auto"><img src={Carcling} alt="carcling" className='w-100' /></div>
                    </div>
                </div>
                <div className="pt-sm-80 pt-5 pb-sm-0 pb-60 d-flex flex-column   align-items-center">
                    <h5 className='mb-0 color-blue fw-bold fs-16 lh-24  text-center pb-20'>Like What You See? Get an Instant Quote</h5>
                    <button className='orange-btn text-white fw-bold lh-19 fs-16   font-acumin'>Get Instant Quote</button>
                </div>
            </div>
        </section>
    )
}

export default Future