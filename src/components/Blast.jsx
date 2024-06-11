import React from 'react'
import Bottomvector from '../assets/images/webp/Vector10.webp'
import Topvector from '../assets/images/webp/Vector11.webp'

const Blast = () => {
  return (
    <section>
        <img src={Topvector} alt="vector" className='w-100' />
        <div className="mycontainer pt-sm-0 pt-60 pb-sm-0 pb-80">
            <div className="d-flex flex-column align-items-center mt-105 mb-70">
                <h2 className='color-blue mb-0 fs-48 lh-57 font-titlingGothic  text-center'>Blast The Grime and Bring Back The Prime</h2>
                <h6 className='text-center color-blue opacity-70  pt-3 fw-normal fs-16 lh-24  max-w-966 mb-0'>Rest easy knowing that our approach is tailored to protect and enhance your vehicle. We don’t clean; we care. Every treatment is a promise that your vehicle will not only look its best but also receive the care it needs for a longer, healthier life on the road.</h6>
                <h5 className=' font-acumin fw-bold fs-16 lh-19 color-blue pt-3  text-center pb-40 mb-0'>Ready For a Transformation? Get an Instant Quote</h5>
                <button className='orange-btn text-white fw-bold lh-19 fs-16   font-acumin z-1'>Get Instant Quote</button>
            </div>
        </div>
        <img src={Bottomvector} alt="vector" className='w-100' />

    </section>
  )
}

export default Blast