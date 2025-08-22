import './App.css'
import { useForm, Controller} from 'react-hook-form';
import {useEffect, useState } from 'react'
import PersonalInfo from './components/PersonalInfo';
import SelectYourPlan from './components/SelectYourPlan';
import PickAddOns from './components/PickAddOns';
import Summary from './components/Summary';
import Confirmation from './components/Confirmation';
import NavsMobile from './components/NavsMobile';


function App() {
 const [submitted, setSubmitted] = useState(false)
 const [phone, setPhone] = useState('')

 const [step, setStep] = useState(1);

 
 const {
  register,
  handleSubmit,
  trigger,
  watch,
  getValues,
  setValue,
  control,
  formState: { errors },
} = useForm({
  defaultValues: {
    phone: '',
    billingType: 'Monthly', // ✅ now tracked
    plan: 'Arcade',               // ✅ now tracked
    total: null 
  },
  criteriaMode: 'all',
  mode: 'onChange',
});

 
 const billingType= watch('billingType')
 const monthly= billingType === 'Monthly'

 

 const nextStep= async ()=> {
    const valid = await trigger(['name', 'email', 'phone'])
    if (valid) {
      const data = getValues(); // 👈 grabs current form values
      // console.log('Step 1 data:', {
      //   name: data.name,
      //   email: data.email,
      //   phone: data.phone,
      // });
      setStep(step + 1)
      setSubmitted(false)
    }
 }

 
  const previousStep= async ()=> {

      setStep(step - 1)
    
 }
 const finalStep= ()=>{
   handleSubmit()
   setSubmitted(true)
 }

 const onSubmit = (data) => {
  setSubmitted(true)
  // console.log('Form submitted:', data);
};


const selectPlan= ()=> {
  setValue('total', null)
  setStep(2)  
}

 

  
  return (
    <div className={`${submitted? "bg-neutral-blue100" : ""} min-h-screen`}>
    <div className={`tablet:!hidden !block w-full aspect-[16/7.35] !bg-[url("/assets/images/bg-sidebar-mobile.svg")] bg-contain bg-no-repeat pt-[8dvw]`}>
        <NavsMobile step={step}/>
        </div>
    <div className={`flex flex-col justify-center ${submitted? " bg-neutral-blue100" : ""} `}>
      
      <div className={`bg-neutral-blue100 max-w-screen tablet:aspect-auto aspect-[2/2.27] tablet:min-h-screen flex tablet:flex-row flex-col tablet:items-center items-center justify-center tablet:py-[7dvw]`}>
                
        <section className={`tablet:!-translate-y-0 tablet:w-4/6 max-w-screen w-[91%] tablet:!aspect-[13/8]  ${step===2 && monthly? "!aspect-[1/1.3] tablet:!-translate-y-0 !translate-y-[-17dvw]" : "!-translate-y-[26.2dvw] tablet:!aspect-[13/8] !aspect-[1/1.1]"} ${ step===2 && !monthly? "tablet:!aspect-[13/8] !aspect-[1/1.4] tablet:!-translate-y-0 !translate-y-[-12.4dvw]" : "!-translate-y-[26.2dvw] !aspect-[1/1.1]"}  bg-neutral-white tablet:rounded-[1dvw] rounded-[2.5dvw] tablet:shadow-[0_1dvw_2dvw_rgba(134,136,152,0.15)] shadow-[0_3dvw_4dvw_rgba(134,136,152,0.15)] p-[1.2dvw] flex justify-between items-center`}>
          <div className="tablet:w-3/8 tablet:flex hidden h-full rounded-[0.5dvw] tablet:bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-contain">
            <div className='w-fit flex tablet:flex-col flex-row gap-[2dvw] pt-[2.5dvw] pl-[2.3dvw]'>
              <div className='flex items-center gap-[1.2dvw]'>
              <h2 className={`${step === 1 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>1</h2>
              
              <div className='flex flex-col'>
              <section className='flex flex-col'><h3>STEP 1</h3>
  <h4>YOUR INFO</h4></section>
              </div>
              </div>
              <div className='flex items-center gap-[1.2dvw]'>
              <h2 className={`${step === 2 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>2</h2>
              <div className='flex flex-col'>
              <section className='flex flex-col'><h3>STEP 2</h3>
  <h4>SELECT PLAN</h4></section>
              </div>
</div>

<div className='flex items-center gap-[1.2dvw]'> 

<h2 className={`${step === 3 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>3</h2>

<div className='flex flex-col'>
<section className='flex flex-col'><h3>STEP 3</h3>
  <h4>ADD-ONS</h4>
</section>
</div>
</div>

<div className='flex items-center gap-[1.2dvw]'>
<h2 className={`${step === 4 ? "bg-primary-blue200 outline-0 text-primary-blue950" : ""}`}>4</h2>
              <section className='flex flex-col'><h3>STEP 4</h3>
  <h4>SUMMARY</h4></section>
              
</div>
              </div>
          </div>

          <div className='tablet:w-[60%] w-[86%] h-full mx-auto'>

          <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && <PersonalInfo errors={errors} register={register} Controller={Controller} control={control} step={step} />}                          
          {step === 2 && <SelectYourPlan  setValue={setValue} getValues={getValues} watch={watch} />}   
          {step === 3 && <PickAddOns previousStep={previousStep} nextStep={nextStep} register={register} watch={watch}/>}   
          {step === 4 && !submitted && <Summary register={register} watch={watch} selectPlan={selectPlan} setValue={setValue}/>}   
          {step === 4 && submitted && <Confirmation/>}   
          

          <div className={`tablet:w-[32dvw] w-full transition-transform tablet:translate-y-[0.5dvw] translate-y-[100dvw] tablet:pb-0 pb-[4dvw] tablet:mt-[1dvw] ${submitted? "hidden" : "visible"}`}>
        <div className="w-full flex justify-between items-center">

        <button
          type="button"
          className={`bg-neutral-white tablet:-translate-x-0 -translate-x-[8dvw] w-fit h-fit tablet:ml-[0.5dvw] ml-0 text-neutral-grey500 font-medium ${step===1? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
          onClick={previousStep}
          >
          Go Back
        </button>

        <button
          type= {step===4 && submitted? "submit" : "button"}
          // type= "button"
          onClick={step==4? finalStep : nextStep}
          className='tablet:translate-x-0 translate-x-[8dvw]'
          >
          {step===4? "Confirm" : "Next Step"}
        </button>
       </div>
      </div>
          </form>
      
          </div>
        </section>
        </div>
        
    </div>
    </div>    
  )
}

export default App
