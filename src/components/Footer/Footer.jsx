import Logo from '../../assets/Logo.png'
import {FaFacebookF, FaInstagram, FaLinkedin , FaWhatsapp,FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'
import { MdMessage } from 'react-icons/md';
import { } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
            <div className="hidden md:flex footer py-6 bg-blue-50 justify-evenly items-center  gap-1">
                <div className="first-div flex flex-col px-4 gap-y-2">
                    <div className="logo ml-7 gap-2 flex">
                        <img src={Logo} alt="logo-img"   className='w-20 h-20 -ml-7' />
                        <span className='text-blue-950 text-sm mt-5 font-bold '>BJA GLOBAL SERVICES LIMITED</span>
                    </div>
                    <div className="logo-text p ">
                        <p>is a private limited liability company based in Port Harcourt operating ship channeling and catering services to onshore and offshore location.</p>
                    </div>
                </div>
                {/* address section */}
                <div className="second-div flex flex-col justify-center my-8 ">
                <p className='font-semibold text-lg uppercase ml-7 mb-3'>Office Address</p>
                <div className="address flex flex-col gap-5  -tracking-wide">
                <div className="first-address">
                    <p className='flex gap-2'><span className='mt-1'> <FaMapMarkerAlt className="text-black" /></span>No 1 Awe street huruna college road ogba lfako, Lagos State</p>
                </div>
                <div className="second-address">    
                    <p className='flex gap-2'><span className='mt-1'> <FaMapMarkerAlt className="text-black      " /></span>Close 11 court estate eligbu OBIO-AKPO LGA, Port Harcourt River state</p>
                </div>
                </div>
                <p></p>
                </div>
                {/* contact structure */}
                <div className="third-div flex flex-col gap-5">
                    <p className='font-semibold text-lg'>Contact information</p>
                    <div className="first-contact">

                        <p className='flex gap-2'><span className='mt-1'><FaWhatsapp className="text-black" /></span>09073761968 , 08032433093, 08067793091
                        </p>
                    </div>
                    <div className="second-contact">
                        <p className='flex gap-2'><span className='mt-1'><MdMessage className="text--black" /></span>support@bjaglobalservices.com</p>
                    </div>

                    <div className="social-icon flex gap-3">
                                    <div className="icon-f">
                                <FaFacebookF className='w-6 h-6 bg-blue-950 text-lg  text-gray-200 rounded-full p-1' />
                                </div>
                                <div className="icon-f  bg-color-blue p-1 -mt-1">
                                 
                                    <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="14.5" fill="#172554"/>
<g clipPath="url(#clip0_6_315)">
<path d="M18.6007 6.76868H21.054L15.694 12.8953L22 21.2307H17.0627L13.196 16.1747L8.77067 21.2307H6.316L12.0493 14.6773L6 6.76934H11.0627L14.558 11.3907L18.6007 6.76868ZM17.74 19.7627H19.0993L10.324 8.16001H8.86533L17.74 19.7627Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6_315">
<rect width="16" height="16" fill="white" transform="translate(6 6)"/>
</clipPath>
</defs>
                                    </svg>

                                   
                                    </div>
                                <div className="icon-f">
                                    <FaInstagram className='w-6 h-6 bg-blue-950  text-gray-200 rounded-full text-lg p-1'/>
                                    </div>
                                <div className="icon-f">
                                    <FaLinkedin className='w-6 h-6 bg-blue-950  text-gray-200 rounded-full text-lg p-1'/>
                                    </div>
                </div>
            </div>

    </div>
    <div className="last-footer  flex flex-col  md:flex-row items-center justify-center md:justify-around bg-black py-8 md:h-14 text-white md:gap-4 md:py-3">
        <p className='text-sm '>© 2024, BJA Global Limited. All rights reserved</p>
        <p  className='md:text-white text-green-500 font-bold'> Developed by  Merakinode</p>


    </div>
    </div>
  )
}
