import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = (isDarkMode) => {
  return (
    <div className='mt-20'>
        <div className='text-center flex align-center justify-center gap-4'>
            {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2 '/> */}
           <a href="mailto:ramwijesooriya@gmail.com">
           <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ?assets.mail_icon : assets.mail_icon_dark} alt='' className='w-6 '/>
               <span> ramwijesooriya@gmail.com</span>
            </div>
           </a>
           <a href="https://wa.me/+94764501405" target="_blank" rel="noopener noreferrer">
  <div className='w-max flex items-center gap-2 mx-auto'>
    <Image src={isDarkMode ? assets.whatsapp : assets.whatsapp} alt='' className='w-6' />
    <span>Chat on WhatsApp</span>
  </div>
</a>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>@C 2025 Asanka Wijesooriya.All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><Image src={isDarkMode ?assets.link : assets.linkedin} className='size-4 ml-5 rounded-2xl'/><a target='_blank' href="https://github.com/ramwijesooriya">Linkedin</a></li>
                <li><Image src={isDarkMode ?assets.gthub : assets.github} className='size-4 ml-4'/> <a target='_blank' href="https://www.linkedin.com/in/asanka-wijesooriya-7a9185269/">Github</a></li>
                <li><Image src={isDarkMode ?assets.x : assets.mail_icon} className='size-4 '/><a target='_blank' href="https://x.com/ramwijesooriya">X</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer