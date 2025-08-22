import React, { useState } from 'react'
import ThankYou from '/assets/images/icon-thank-you.svg?react';

function Confirmation() {
  const [iconThankYou, setIconThankYou]= useState (false)
  
    const loadIMG= ()=> {
      setIconThankYou(true)
    }
  
  
  return (
        
    <div className='w-full tablet:aspect-square aspect-[1/1.2] flex flex-col items-center justify-center'>
        <div className='tablet:w-4/5 w-full flex flex-col items-center justify-center'>

        <ThankYou className='tablet:mb-[1.5dvw] mb-[4dvw] tablet:w-fit w-[16dvw]' />
      
        
     

     <h1 className='tablet:mb-[0.5dvw] mb-[1.5dvw]'>Thank you!</h1>

  <p className='tablet:w-[33dvw] w-[78dvw] text-center'><p className='tablet:hidden block mx-auto w-[78dvw]'>Thanks for confirming your subscription! </p><p className='tablet:hidden block mx-auto w-[70dvw]'>We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
  <p className='tablet:block hidden mx-auto'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
  </p>
  
        
  </div>
  </div>

  )
}

export default Confirmation
