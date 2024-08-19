import React from 'react'
// import { MdStar } from 'react-icons/md'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full'>
        <div className='max_padd_container relative top-32 xs:top-52'>
            <h1 className='h1 capitalize max-w-[37rem]'>Branding Displays</h1>
            <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>We are leading Signage Manufacturer with depth hands on experience in the field of visual communication. We are only in to industrial and corporate account as a benchmark of our segment. Where quality and life comes, we are there to cater. Looking forward to hear from you. dp@brandingdisplays.com</p>
            <div className='flexStart !items-center gap-x-4 my-10'>
                <div className='!regular-16 sm:regular-20'>Since <span className='bold-16 sm:bold-20'>2014</span></div>
            </div>
        </div>
    </section>
  )
}

export default Hero