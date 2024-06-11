import React from 'react'
import Vector10 from '../assets/images/webp/Vector10.webp'
import Rigthice from '../assets/images/webp/image49.webp'
import Leftice from '../assets/images/webp/image48.webp'
import Vector11 from '../assets/images/webp/Vector11.webp'
const Understanding = () => {
    return (
        <section className='bg-orange overflow-hidden position-relative'>
            <img src={Vector10} alt="vector" className='w-100' />


            <div className="right-ice-img position-absolute d-lg-block d-none">
                <img src={Rigthice} alt="rigthice" className='w-100' />
            </div>
            <div className="left-ice-img position-absolute d-lg-block d-none">
                <img src={Leftice} alt="ice" className='w-100' />

            </div>




            <div className="mycontainer pt-sm-0 pt-4">
                <h2 className='mb-0 font-titlingGothic fw-bold fs-48 lh-57  text-center text-white'>Understanding Dry Ice Blasting</h2>
                <div className="row align-items-center flex-wrap-reverse  pt-lg-0 pt-5 ">


                    <div className="col-md-6 pt-lg-137 pt-md-0 pt-4 ">
                        <h5 className=' font-acumin fw-bold fs-24 lh-36 mb-0 text-white '>What is Dry Ice Blasting?</h5>
                        <h6 className='pt-6 mb-0 font-acumin fw-normal fs-18 lh-27 text-white'> Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</h6>
                    </div>
                    <div className="col-md-6 d-lg-none d-block translate-12 ">
                        <img src={Rigthice} alt="rigthice" className='w-100' />
                    </div>
                </div>
                <div className="row align-items-center justify-content-end pb-lg-158 pb-5 pt-lg-0 pt-5 ">

                    <div className="col-md-6 d-lg-none d-block translate-min-12">
                        <img src={Leftice} alt="ice" className='w-100' />
                    </div>
                    <div className="col-md-6 pt-lg-271 pt-md-0 pt-4 ">
                        <h5 className=' font-acumin fw-bold fs-24 lh-36 mb-0 text-white '>How Does Dry Ice Blasting Work?</h5>
                        <h6 className='pt-6 mb-0 font-acumin fw-normal fs-18 lh-27 text-white'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</h6>
                    </div>
                </div>
            </div>
            <img src={Vector11} alt="vector" className='w-100' />

        </section>
    )
}

export default Understanding