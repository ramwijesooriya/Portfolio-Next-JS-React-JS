import React from 'react';
import Certificationsitem from './Certificationsitem';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const data = [
  {
    year: '2024',
    title: 'Fullstackdeveloper "The Complete 2024 Web Development Bootcamp An Undergraduate Degree"',
    duration: 'completed',
    details: `🎓 Excited to share that I've successfully completed 'The Complete 2024 Web Development Bootcamp' course offered by Udemy! 🚀#Fullstackdeveloper #JavaScript, #React, #Node.js #API #Docker #PostgreSQL #NFT more, under the guidance of Dr. Angela Yu.
#Developer #Fullstackdeveloper #Udemy #Certification #ProfessionalDevelopment 🎯`,
    img: 'https://media.licdn.com/dms/image/D5622AQEiLh3rRURq-Q/feedshare-shrink_2048_1536/0/1719812255120?e=1723075200&v=beta&t=NoCbv22KFcpT6Ww4vUvQZ01hl7a5l6InHT-ZX31sIeA'
  },
   
  
  // Additional data can be added here
  // DevOps Beginners to Advanced with Projects

];

const Certifications = () => {
  return (
    <div id="Certifications" className="max-w-[] m-auto md:pl-20 p-4 py-16">
       <h1 className="p-9 text-4xl font-bold text-center text-[#001b5e]">Certifications and Achievement</h1>

     <div>
      {data.map((item, idx) => (
        <Certificationsitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          img={assets.profile_img}
        />
      ))}
      <Image src={assets.fullstack} className='mt-4 max-w-96 h-auto rounded-md shadow-md'/>
     </div>

     <br />

      <div>
       {/* <h1 className="p-9 text-4xl font-bold text-center text-[#001b5e]">Certifications and Achievement</h1> */}
      {data.map((item, idx) => (
        <Certificationsitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          img={assets.profile_img}
        />
      ))}
      <Image src={assets.devops} className='mt-4 max-w-96 h-auto rounded-md shadow-md'/>
     </div>

    </div>
  );
};

export default Certifications;
