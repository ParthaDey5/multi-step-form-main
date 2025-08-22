import React, { useRef, useEffect, useState } from "react";
import Confirmation from "./Confirmation";


function Summary({setValue, watch, selectPlan }) {
  
  const onlineService = watch("onlineService");
  const largerStorage = watch("largerStorage");
  const customProfile = watch("customProfile");
  const total = watch("total");

  const plan = watch("plan");
  const billingType = watch("billingType");
  const monthly = billingType === "Monthly";
  const arcade = plan === "Arcade";
  const advanced = plan === "Advanced";
  const pro = plan === "Pro";

  const planCost = useRef('')
  const OSC = useRef('')
  const LSC = useRef('')
  const CPC = useRef('')
  
  
  useEffect(() => {
     const rawPlan = planCost.current.innerHTML;
      const rawOSC = OSC.current.innerHTML;
      const rawLSC = LSC.current.innerHTML;
      const rawCPC = CPC.current.innerHTML;
      const rawPlanCost = parseFloat(rawPlan.replace(/\D/g, ""));
      const rawOSCCost = parseFloat(rawOSC.replace(/\D/g, ""));
      const rawLSCCost = parseFloat(rawLSC.replace(/\D/g, ""));
      const rawCPCCost = parseFloat(rawCPC.replace(/\D/g, ""));
      
      const totalAmount =
  (rawPlanCost || 0) +
  (onlineService? rawOSCCost : 0) +
  (largerStorage? rawLSCCost : 0) +
  (customProfile? rawCPCCost : 0);
  
  setValue('total', totalAmount)
         
  }, [total]);
  
  return (
    <>
      <div className="h-[31dvw]">
        <div>
          <h1 className="tablet:mt-[2dvw] mt-[5dvw]">Finishing up</h1>
          <p className="tablet:mt-[0.2dvw] mt-[1.4dvw]">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        {/*  */}
        <div className="flex flex-col tablet:mt-[2.4dvw] mt-[5dvw] tablet:mb-[2dvw] mb-[4dvw]">
          <div
            className={`bg-neutral-blue50 tablet:w-[33dvw] w-full  py-[1.3dvw] flex justify-between items-center border border-neutral-blue100 rounded-[0.5dvw] transition-all ease-linear delay-50 tablet:px-[1.5dvw] px-[3.5dvw]`}
          >
            <div className="flex flex-col">
              <p className="font-bold text-primary-blue950 tracking-tight whitespace-nowrap">
                {(arcade && monthly ? "Arcade (Monthly)" : "") ||
                  (advanced && monthly ? "Advanced (Monthly)" : "") ||
                  (pro && monthly ? "Pro (Monthly)" : "") ||
                  (arcade && !monthly ? "Arcade (Yearly)" : "") ||
                  (advanced && !monthly ? "Advanced (Yearly)" : "") ||
                  (pro && !monthly ? "Pro (Yearly)" : "")}
              </p>
              <h4
                className="cursor-pointer underline underline-offset-[0.15dvw] text-primary-blue300 tracking-normal ultaSmall text-shadow-2xs"
                onClick={selectPlan}
              >
                Change
              </h4>
            </div>
            <p ref={planCost} className="w-fit font-bold text-primary-blue950 tracking-tight">
            {(arcade && monthly ? "$9/mo" : "") ||
                  (advanced && monthly ? "$12/mo" : "") ||
                  (pro && monthly ? "$15/mo" : "") ||
                  (arcade && !monthly ? "$90/yr" : "") ||
                  (advanced && !monthly ? "$120/yr" : "") ||
                  (pro && !monthly ? "$150/yr" : "")}
            </p>
          </div>

          <div
            className={`bg-neutral-blue50 tablet:w-[33dvw] w-full tablet:py-[1.3dvw] py-[4.3dvw] flex justify-between items-center border border-neutral-blue100 rounded-[0.5dvw] transition-all ease-linear delay-50 tablet:px-[1.5dvw] px-[3.5dvw]`}
          >
            <div className="w-full h-fit flex flex-col tablet:gap-[1.3dvw] gap-[3.3dvw] ultaSmall text-primary-blue300 tracking-normal">
              <div className={`w-full flex items-center justify-between  ${onlineService? "visible" : "hidden"}`}>
               {monthly? <><span className="smallText2 whitespace-nowrap w-fit h-fit my-auto">Online service</span> <span ref={OSC} className="w-fit text-primary-blue950 my-auto smallText2">+$1/mo</span></> : <><span className="whitespace-nowrap w-fit h-fit my-auto smallText2">Online service</span> <span ref={OSC} className="smallText2 w-fit text-primary-blue950 my-auto">+$10/yr</span></> }
              </div>
              <div className={` w-full flex items-center justify-between ${largerStorage? "visible" : "hidden"}`}>
               {monthly? <><span className="whitespace-nowrap w-fit my-auto smallText2">Larger storage</span> <span ref={LSC} className="smallText2 w-fit text-primary-blue950 my-auto">+$2/mo</span></> : <><span className="whitespace-nowrap w-fit h-fit smallText2 my-auto">Larger storage</span> <span ref={LSC} className="w-fit text-primary-blue950 my-auto smallText2">+$20/yr</span></> }
              </div>
              <div className={` w-full flex items-center justify-between ${customProfile? "visible" : "hidden"}`}>
               {monthly? <><span className="whitespace-nowrap w-fit smallText2 my-auto">Customizable profile</span> <span ref={CPC} className="w-fit my-auto text-primary-blue950 smallText2">+$2/mo</span></> : <><span className="whitespace-nowrap w-fit h-fit my-auto smallText2">Customizable profile</span> <span ref={CPC} className="smallText2 w-fit text-primary-blue950 my-auto">+$20/yr</span></> }
              </div> 
              
              
            </div>
          </div>
            <div className="text-primary-blue300 tablet:my-[1.8dvw] my-[5dvw] tablet:w-[33dvw] w-full flex items-center justify-between ultaSmall tablet:px-[1.5dvw] px-[3.5dvw]"><span>{monthly? <>Total (per month)</> : <>Total (per year)</>}</span>
            <span className="w-fit largeText text-primary-blue950">+${watch('total')}/{monthly? "mo" : "yr"}</span>
            </div>

          
        </div>
      </div>

      
    </>
  );
}

export default Summary;
