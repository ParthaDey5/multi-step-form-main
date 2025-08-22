import React from 'react'

function PickAddOns({ register, watch}) {

  const onlineService = watch("onlineService");
const largerStorage = watch("largerStorage");
const customProfile = watch("customProfile");


  const billingType = watch('billingType');
const monthly = billingType === 'Monthly';
  return (
    <>
    <div className='h-[31dvw]'>
    <div>
            <h1 className='tablet:mt-[2dvw] mt-[5dvw]'>Pick add-ons</h1>
            <p className='tablet:mt-[0.2dvw] mt-[1.4dvw]'>Add-ons help enhance your gaming experience.</p>
            
          </div>
        {/*  */}
      <div className="flex flex-col tablet:gap-[1.5dvw] gap-[3.3dvw] tablet:mt-[2.4dvw] mt-[5dvw] tablet:mb-[2dvw] mb-[4dvw]">
              
                <label className={` ${onlineService? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60" : ""} tablet:w-[33dvw] w-full tablet:h-[5dvw] h-[16dvw] flex items-center border border-neutral-purple200 hover:border-primary-blue950 transition-all ease-linear delay-50 tablet:px-[1.5dvw] px-[3.5dvw]`}>
                <input
  type="checkbox"
  {...register("onlineService")}
  className="tablet:w-[1.4dvw] w-[4dvw] tablet:h-[1.4dvw] h-[4dvw] border border-neutral-grey500 !appearance-none  !accent-primary-blue950 !rounded-none !ring-0"
/>

                <span className='flex flex-col tablet:gap-0 gap-[0.1dvw] my-auto items-start tablet:ml-[2dvw] ml-[4dvw]'>
                  <p className='smallText4 tracking-tight'>Online service</p>
                  <p className='font-normal smallText3'>Access to multiplayer games</p>
                  </span>
                  <span className='text-neutral-grey500 w-fit font-medium ultraSmall'>{monthly? "+$1/mo" : "+$10/yr"}</span>
                  </label>

                  <label className={`${largerStorage? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60" : ""} tablet:w-[33dvw] w-full tablet:h-[5dvw] h-[16dvw] flex items-center justify-between border border-neutral-purple200 hover:border-primary-blue950 transition-all ease-linear delay-50 tablet:px-[1.5dvw] px-[3.5dvw]`}>
                  
              <input type="checkbox" className='ring-0 tablet:w-[1.4dvw] w-[4dvw] tablet:h-[1.4dvw] h-[4dvw] border border-neutral-grey500 rounded' {...register("largerStorage")}/>
                <span className=' my-auto tablet:ml-[2dvw] ml-[4dvw] tablet:gap-0 gap-[0.1dvw] flex flex-col items-start'>
                  <p className='smallText4 tracking-tight'>Larger storage</p>
                  <p className='font-normal smallText3'>Extra 1TB of cloud save</p>
                  </span>
                  <span className='text-neutral-grey500 my-auto font-medium w-fit ultraSmall'>{monthly? "+$2/mo" : "+$20/yr"}</span>
                  
                  </label>

                  <label className={`${customProfile? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60" : ""} tablet:w-[33dvw] w-full tablet:h-[5dvw] h-[16dvw] flex items-center border border-neutral-purple200 hover:border-primary-blue950 transition-all ease-linear delay-50 tablet:px-[1.5dvw] px-[3.5dvw]`}>
              <input type="checkbox" className='ring-0 tablet:w-[1.4dvw] w-[4dvw] tablet:h-[1.4dvw] h-[4dvw] border border-neutral-grey500 rounded' {...register("customProfile")}/>
                <span className='flex flex-col tablet:gap-0 gap-[0.1dvw] my-auto items-start tablet:ml-[2dvw] ml-[4dvw]'>
                  <p className='smallText4 tracking-tight'>Customizable Profile</p>
                  <p className='font-normal smallText3'>Custom theme on your profile</p>
                  </span>
                  <span className='text-neutral-grey500 w-fit font-medium ultraSmall'>{monthly? "+$2/mo" : "+$20/yr"}</span>
                  </label>
                
              
            </div>
            
            
            

            </div>

           
    </>
  )
}

export default PickAddOns