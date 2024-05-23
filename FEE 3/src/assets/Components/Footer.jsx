import React from 'react';
import fb from "../Assets/Facebook.png";
import ins from "../Assets/Instagram.png";
import tw from "../Assets/Twitter.png";
import wsp from"../Assets/WhatsApp.png";

const Footer = () => {

  const obj = [
    {
      headd: "About",
      t1: "History",
      t2: "Our Team",
      t3: "Brand Guidlines",
      t4: "Terms & Conditions",
      t5: "Privacy Policy",
    },
    {
      headd: "Services",
      t1: "How To Order",
      t2: "Our Product",
      t3: "Order Status",
      t4: "Promo",
      t5: "Payment Method",
    },
    {
      headd: "Other",
      t1: "Contact Us",
      t2: "Help",
      t3: "Privacy",
      
    },
  ];

  return (
    <div className='bg-cover bg-center h-auto w-full flex flex-col justify-center items-center bg-black py-36'>
      <div className='flex flex-col lg:flex-row text-white space-y-10 lg:space-y-0 lg:space-x-20 xl:space-x-60 px-4 lg:px-0'>
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h1 className='text-xl lg:text-2xl mb-4 font-bold'>TITLE HERE</h1>
          <p className='w-full lg:w-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quisquam voluptatum dolor voluptatem modi explicabo nam quidem? Fugiat, molestiae deleniti quas dignissimos tempora rerum soluta.
          </p>
          
          <div className='flex flex-wrap justify-center lg:justify-start mt-4'>
            <img src={ins} alt='Instagram' className='w-1/2 lg:w-1/4 p-2' />  
            <img src={fb} alt='Facebook' className='w-1/2 lg:w-1/4 p-2' />
            <img src={tw} alt='Twitter' className='w-1/2 lg:w-1/4 p-2' />
            <img src={wsp} alt='Twitter' className='w-1/2 lg:w-1/4 p-2' />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-16'>
          <div className='text-center lg:text-left'>
            <h1 className='text-2xl font-bold mb-4'>{obj[0].headd}</h1>
            <p>{obj[0].t1}</p>
            <p>{obj[0].t2}</p>
            <p>{obj[0].t3}</p>
            <p>{obj[0].t4}</p>
            <p>{obj[0].t5}</p>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-2xl font-bold mb-4'>{obj[1].headd}</h1>
            <p>{obj[1].t1}</p>
            <p>{obj[1].t2}</p>
            <p>{obj[1].t3}</p>
            <p>{obj[1].t4}</p>
            <p>{obj[1].t5}</p>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-2xl font-bold mb-4'>{obj[2].headd}</h1>
            <p>{obj[2].t1}</p>
            <p>{obj[2].t2}</p>
            <p>{obj[2].t3}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
