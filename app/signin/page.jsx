import React from 'react'
import AuthLayout from '../components/auth/authLayout'

const page = () => {
  return (
    <AuthLayout>
      <div className="flex item-center justify-center w-full mt-[20px]">
        <div className='border-[1px] border-[#E0E0E0] bg-[#FFFFFF] min-w-[572px] shadow-2xl'>
          <h1 className="mt-10 mb-6 font-sans text-[40px] font-semibold leading-9 tracking-tighter text-center">Sign up
            to Eventify Hello hotdog</h1>
          <p className="font-'Zen Kaku Gothic Antique' text-[13px] text-center text-[#757575] mb-[32px]">Quick & Simple way to join events</p>

          <div className='max-w-[380px] mx-auto mb-5'>
            <input placeholder="Name"
              className="px-2 border w-[100%] bg-white h-[60px]"
              required />
            <input placeholder="Email"
              className="px-2 border w-[100%] bg-white h-[60px]"
              required />
            <input type='password' placeholder="Password"
              className="px-2 border w-[100%] bg-white h-[60px]"
              required />
          </div>

          <div className="flex gap-2 max-w-[380px] mx-auto items-center mb-5">
            <input type="checkbox" id="some_id" className="w-4 h-4 mt-0 bg-white border-2 border-black rounded-sm appearance-none shrink-0 checked:bg-black checked:border-0"
            />
            <label htmlFor="some_id" className='ml-2 text-[#616161] underline text-[13px]'>I agree to the Terms of Service and Privacy Policy.</label>
          </div>
          <button type="submit"
            className="min-w-[380px] mb-6 block mx-auto h-[64px] text-white bg-[#212121] font-semibold font-'Zen Kaku Gothic Antique' text-center text-[16px] mt-4">PROCEED</button>
          <span className='block mx-auto mb-6 text-center'>OR</span>
          <div className="flex items-center justify-center mt-8 mb-[40px]">
            <a href="#" className="mr-8">
              <img src="/google.png" className="w-auto h-[28px]" />
            </a>
            <a href="#" className="mr-8">
              <img src="/apple-logo.png" className="w-auto h-[28px]" />
            </a>
            <a href="#" className="">
              <img src="/facebook.png" className="w-auto h-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </AuthLayout>

  )
}

export default page