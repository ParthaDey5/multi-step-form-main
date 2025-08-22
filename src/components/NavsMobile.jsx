import React from 'react'

function NavsMobile({step}) {
  return (
    
        <div className={`w-screen tablet:hidden`}>
        <div className='flex justify-center gap-[4dvw]'>
        <h2 className={`${step === 1 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>1</h2>
        <h2 className={`${step === 2 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>2</h2>
        <h2 className={`${step === 3 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>3</h2>
        <h2 className={`${step === 4 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>4</h2>
        </div>
        
      </div>
    
  )
}

export default NavsMobile