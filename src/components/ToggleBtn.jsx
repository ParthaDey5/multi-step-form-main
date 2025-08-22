import React, { useState } from 'react'


function ToggleBtn({monthly, setMonthly}) {
    
  return (
    <>
    <h5 className={`transform tablet:-translate-x-[1.2dvw] -translate-x-[5dvw] ${monthly? "text-primary-blue950 text-shadow-primary-blue950 text-shadow-xs" : "text-neutral-grey500"} font-normal `}>Monthly</h5>
    <div className='flex items-center cursor-pointer tablet:w-[2.6dvw] w-[10dvw] tablet:h-[1.4dvw] h-[5.5dvw] bg-primary-blue950 rounded-[5dvw]' onClick={() => setMonthly(!monthly)}

>
              <div className={`my-auto ${monthly? "transform tablet:translate-x-[0.3dvw] translate-x-[1.2dvw]" : "transform tablet:translate-x-[1.4dvw] translate-x-[4.8dvw]"}  rounded-full bg-neutral-white tablet:w-[0.8dvw] w-[3.3dvw] tablet:h-[0.8dvw] h-[3.3dvw] transition-all delay-75 ease-linear`}></div>
            </div>
            <h5 className={`transform tablet:translate-x-[1.2dvw] translate-x-[5dvw] ${!monthly? "text-primary-blue950 text-shadow-primary-blue950 text-shadow-xs" : "text-neutral-grey500"} font-normal`}>Yearly</h5>
    </>
  )
}

export default ToggleBtn