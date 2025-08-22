import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import ToggleBtn from "./ToggleBtn";
import ArcadeIcon from '/assets/images/icon-arcade.svg?react';
import AdvancedIcon from '/assets/images/icon-advanced.svg?react';
import ProIcon from '/assets/images/icon-pro.svg?react';


function SelectYourPlan({
  
  setValue,
  getValues,
  watch
}) {
  const billingType = watch("billingType");
  const monthly = billingType === "Monthly";
  const selectedPlan = watch("plan");
 
  
const [imgload, setImgload]= useState(false)
const imgState= ()=> {
  setImgload(true)
  
}
  return (
    

      <>
       
      <div className="h-[31dvw]">
        <div>
          <h1 className="tablet:mt-[2dvw] mt-[5dvw]">Select your plan</h1>
          <p className="tablet:mt-[0.2dvw] mt-[0.8dvw] tablet:leading-normal leading-[5.5dvw]">
            You have the option of monthly or yearly billing.
            </p>
        </div>
        
        <div className="flex tablet:flex-row flex-col tablet:gap-[1.5dvw] gap-[3dvw] tablet:mt-[2.4dvw] mt-[5dvw] tablet:mb-[2dvw] mb-[5dvw]">
          <div
            className={`border border-neutral-purple200 hover:border-primary-blue950 transition-all ease-linear delay-50 cursor-pointer tablet:w-[9.5dvw] w-full flex tablet:flex-col justify-center tablet:pt-[1.5dvw] py-[3dvw] tablet:pb-[1dvw] tablet:px-[1.1dvw] px-[3.5dvw] tablet:rounded-[0.7dvw] rounded-[2.5dvw] ${
              selectedPlan === "Arcade"
                ? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60"
                : ""
            }`}
            onClick={() => setValue('plan', 'Arcade')}
          >
            <div className="flex items-start">
              <ArcadeIcon
                className="tablet:w-[3dvw] w-[11dvw]"
              />
            </div>
            <div className="w-full tablet:pl-0 pl-[4dvw] flex flex-col gap-[0.1dvw]">
              <span className="smallText tablet:mt-[2dvw] font-bold text-shadow-sm">Arcade</span>
              <span className="smallText2 tablet:font-normal font-medium text-shadow-2xs">{monthly ? "$9/mo" : "$90/yr"}</span>
              <span
                className={`ultaSmall ${
                  monthly
                    ? "opacity-0 scale-0 pointer-events-none absolute"
                    : "opacity-100 scale-100"
                }`}
              >
                2 months free
              </span>
            </div>
          </div>

          <div
            className={`border border-neutral-purple200 hover:border-primary-blue950 cursor-pointer tablet:w-[9.5dvw] w-full flex tablet:flex-col justify-center tablet:pt-[1.5dvw] tablet:pb-[1dvw] py-[3dvw] tablet:px-[1.1dvw] px-[3.5dvw] tablet:rounded-[0.7dvw] rounded-[2.5dvw] transition-all ease-linear delay-50 ${
              selectedPlan === "Advanced"
                ? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60"
                : ""
            }`}
            onClick={() => setValue("plan", "Advanced")}
          >
            <div className="flex items-start">
              <AdvancedIcon
                className="tablet:w-[3dvw] w-[11dvw]"
              />
            </div>
            <div className="w-full tablet:pl-0 pl-[4dvw] flex flex-col gap-[0.1dvw]">
              <span className="smallText tablet:mt-[2dvw] font-bold text-shadow-sm">Advanced</span>
              <span className="smallText2 tablet:font-normal font-medium text-shadow-2xs">
                {monthly ? "$12/mo" : "$120/yr"}
              </span>
              <span
                className={`ultaSmall ${
                  monthly
                    ? "opacity-0 scale-0 pointer-events-none absolute"
                    : "opacity-100 scale-100"
                }`}
              >
                2 months free
              </span>
            </div>
          </div>

          <div
            className={`border border-neutral-purple200 hover:border-primary-blue950 cursor-pointer tablet:w-[9.5dvw] w-full flex tablet:flex-col justify-center tablet:pt-[1.5dvw] py-[3dvw] tablet:pb-[1dvw] tablet:px-[1.1dvw] px-[3.5dvw] tablet:rounded-[0.7dvw] rounded-[2.5dvw]  ${
              selectedPlan === "Pro"
                ? "bg-neutral-blue50 tablet:border-primary-blue950 border-primary-blue950/60"
                : ""
            }`}
            onClick={() => {
              setValue("plan", "Pro");
            }}
          >
            <div className="flex items-start">
              <ProIcon
                className="tablet:w-[3dvw] w-[11dvw]"
              />
            </div>
            <div className="w-full tablet:pl-0 pl-[4dvw] flex flex-col gap-[0.1dvw]">
              <span className="smallText tablet:mt-[2dvw]">Pro</span>
              <span className="smallText2 tablet:font-normal font-medium text-shadow-2xs">
                {monthly ? "$15/mo" : "$150/yr"}
              </span>
              <span
                className={`ultaSmall ${
                  monthly
                    ? "opacity-0 scale-0 pointer-events-none absolute"
                    : "opacity-100 scale-100"
                }`}
              >
                2 months free
              </span>
            </div>
          </div>
        </div>

        <div className="tablet:w-[80%] w-full tablet:h-[3dvw] h-[12dvw] tablet:rounded-[0.4dvw] rounded-[2dvw] flex items-center justify-center bg-neutral-blue50 transform translate-x-[0.5dvw]">
          <ToggleBtn
            monthly={watch("billingType") === "Monthly"}
            setMonthly={(val) => {
              setValue("billingType", val ? "Monthly" : "Yearly");
            }}
          />
        </div>
      </div>

      

    </>
  
  );
}

export default SelectYourPlan;
