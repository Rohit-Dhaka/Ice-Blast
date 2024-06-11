import React from 'react'
import Blastingcar from '../assets/images/webp/img.webp'
import Effective from '../assets/images/webp/Effective.webp'
import Abrasive from '../assets/images/webp/Abrasive.webp'
import Residue from '../assets/images/webp/Residue.webp'
import Materials from '../assets/images/webp/Materials.webp'

const Blasting = () => {
    return (
        <section>
            <div className="mycontainer" id='services'>
                <h2 className='font-titlingGothic mb-0 fw-bold fs-48 lh-57 color-blue text-center'>Why Choose Dry Ice Blasting for Your Car?</h2>
                <div className="row flex-wrap-reverse pt-5  align-items-center pb-lg-121 pb-sm-80 pb-60" >
                    <div className="col-md-6 col-12 pt-5 pt-md-0">
                        <div className="d-flex  gap-12 align-items-center">
                            <img src={Effective} alt="effective" />
                            <div className="d-flex flex-column ">
                                <h5 className='mb-0  font-acumin fw-bold fs-16 lh-24  color-blue    '>Effective Cleaning</h5>
                                <h6 className='mb-0 color-blue opacity-70 font-acumin fw-normal fs-16 lh-24'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</h6>
                            </div>
                        </div>

                        <div className="d-flex gap-12 pt-28 align-items-center">
                            <img src={Abrasive} alt="abrasive" />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0  font-acumin fw-bold fs-16 lh-24  color-blue    '>Non-Abrasive</h5>
                                <h6 className='mb-0 color-blue opacity-70 font-acumin fw-normal fs-16 lh-24'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</h6>
                            </div>
                        </div>
                        <div className="d-flex gap-12 pt-28 align-items-center">
                            <img src={Residue} alt="residue" />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0  font-acumin fw-bold fs-16 lh-24  color-blue    '>No Residue</h5>
                                <h6 className='mb-0 color-blue opacity-70 font-acumin fw-normal fs-16 lh-24'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</h6>
                            </div>
                        </div>
                        <div className="d-flex gap-12 pt-28 align-items-center">
                            <img src={Materials} alt="materials" />
                            <div className="d-flex flex-column">
                                <h5 className='mb-0  font-acumin fw-bold fs-16 lh-24  color-blue    '>Safe for Various Materials</h5>
                                <h6 className='mb-0 color-blue opacity-70 font-acumin fw-normal fs-16 lh-24'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</h6>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-12">
                        <div className="blastingcar">
                            <img src={Blastingcar} alt="blastingcar" className='w-100' />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blasting