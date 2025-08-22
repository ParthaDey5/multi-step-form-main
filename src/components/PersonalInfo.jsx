import React from 'react'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import NavsMobile from './NavsMobile'

function PersonalInfo({ errors, register, step }) {
  return (
    <>
  
     <div className='h-[31dvw]'>
      
        <div>
          <h1 className='tablet:mt-[2dvw] mt-[5dvw]'>Personal info</h1>
          <p className='tablet:mt-[0.2dvw] mt-[1.4dvw]'>Please provide your name, email address, and phone number.</p>
        </div>

        {/* Name Field */}
        <div className="flex flex-col tablet:mt-[2dvw] mt-[4dvw] tablet:mb-[1.2dvw] mb-[4dvw]">
          <span>
            <label>Name</label>
            {errors.name && <h5>{errors.name.message}</h5>}
          </span>
          <input
            type="text"
            placeholder="e.g. Partha Dey"
            className={`border ${errors.name ? 'border-primary-red500 focus:border-primary-red500 focus:ring-0 focus:ring-primary-red500' : 'border-neutral-purple200'}`}
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Enter at least 3 characters',
              },
            })}
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col tablet:mb-[1.2dvw] mb-[4dvw]">
          <span>
            <label>Email Address</label>
            {errors.email && <h5>{errors.email.message}</h5>}
          </span>
          <input
            type="email"
            placeholder="e.g. name@example.com"
            className={`border ${errors.email ? 'border-primary-red500 focus:border-primary-red500 focus:ring-0 focus:ring-primary-red500' : 'border-neutral-purple200'}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
          />
        </div>

        {/* Phone Field (no react-phone-input) */}
        <div className="flex flex-col tablet:mb-[1.2dvw] mb-[8dvw]">
          <span>
            <label>Phone Number</label>
            {errors.phone && <h5>{errors.phone.message}</h5>}
          </span>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. +91 98765 43210"
            className={`border ${errors.phone ? 'border-primary-red500 focus:border-primary-red500 focus:ring-0 focus:ring-primary-red500' : 'border-neutral-purple200'}`}
            {...register('phone', {
              required: 'Phone number is required',
              validate: (value) => {
                const raw = (value || '').trim()
                const parsed = raw.startsWith('+')
                  ? parsePhoneNumberFromString(raw)
                  : parsePhoneNumberFromString(raw, 'IN') // default to India if no +
                return (parsed && parsed.isValid()) || 'Enter a valid phone number'
              },
            })}
          />
        </div>
      </div>

      
    </>
  )
}

export default PersonalInfo
