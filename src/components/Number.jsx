import React, { useState } from "react";
import PlusIcon from '../assets/images/svg/blackplus.svg'
import MinusIcon from '../assets/images/svg/blackmin.svg'




const Number = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const accordionData = [
        {
            title: 'Engine Bay Perfection from £375',
            content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. Its the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
            backgroundColor: '#6EE7FF12'

        },
        {
            title: 'Underbelly Deep-Clean from £750',
            content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. Its the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
            backgroundColor: '#F3F3F4'
        },
        {
            title: 'Ultimate Undercarriage & Engine Bay Overhaul from £1,125',
            content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. Its the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
            backgroundColor: '#FDF9F2'

        },
        {
            title: 'Need Something Else?',
            content: 'Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. Its the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves.',
            backgroundColor: '#FB842C1A'

        }
    ];
    return (
        <section>

            <div className="mycontainer pb-40" id='pricing'>
                <div className="d-flex flex-column  align-items-center">
                    <h2 className='mb-0 color-blue font-titlingGothic fw-bold fs-48 lh-57 text-center'>Let's Talk Numbers</h2>
                    <h6 className='mb-0 font-acumin fw-normal fs-16 lh-24 text-center pt-14 max-w-759 '>We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</h6>

                </div>
                <div className="pt-50 pb-37">


                    <div className="accordion d-md-flex flex-column  mt-20">
                        {accordionData.map((item, index) => (
                            <div key={index} style={{ backgroundColor: item.backgroundColor }} className={`{activeIndex === index ? 'active' : '' }  mt-20 acc-contant`}>
                                <div className="accordion-title-2  justify-content-between d-md-flex gap-40 " onClick={() => toggleAccordion(index)}>

                                    <div className="d-flex justify-content-between gap-2 align-items-center">
                                        <h2 className='accordion-heading mb-0 font-acumin lh-39 color-blue fw-bold fs-28 '>{item.title}</h2>
                                        <span> <img src={activeIndex === index ? MinusIcon : PlusIcon} alt="Toggle Icon" className="d-md-none" /></span>
                                    </div>
                                    {activeIndex === index && (
                                        <div className="accordion-content">
                                            <p className=' mb-0 color-blue'>{item.content}</p>
                                        </div>
                                    )}

                                    <span> <img src={activeIndex === index ? MinusIcon : PlusIcon} alt="Toggle Icon" className="d-md-block d-none" /></span>
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
                <div className="instant-box d-flex flex-column align-items-center">
                    <h3 className='fw-bold mb-0 fs-32 lh-44 color-blue font-titlingGothic text-center'>Get an Instant Quote Today</h3>
                    <h6 className='mb-0  font-acumin fw-normal fs-16 lh-24 text-center  pt-3 opacity-80 max-w-770'>Regular dry ice cleaning prevents costly rust and wear. Avoid potentially thousands of pounds worth of bodywork repairs when just for a fraction of that you can keep your car in prime condition all year round! What are you waiting for?</h6>
                </div>
            </div>
        </section >
    )
}

export default Number




/* Custom style */
// .accordion-button::after {
//   background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
//   transform: scale(.7) !important;
// }
// .accordion-button:not(.collapsed)::after {
//   background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
// }











