import Logo from '../../assets/Logo.png'
import {FaFacebookF,FaTwitter, FaInstagram, FaLinkedin , FaWhatsapp,FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'
import { MdMessage } from 'react-icons/md';
import { } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
            <div className="footer py-14 bg-blue-50 flex justify-evenly items-center  gap-1">
                <div className="first-div flex flex-col px-4 gap-y-2">
                    <div className="logo ml-7 gap-2 flex">
                        <img src={Logo} alt="logo-img"   className='w-16 h-16 -ml-7' />
                        <span className='text-blue-950 text-sm mt-5 font-bold '>BJA GLOBAL SERVICES LIMITED</span>
                    </div>
                    <div className="logo-text p ">
                        <p>is a private limited liability company based in Port Harcourt operating ship channeling and catering services to onshore and offshore location.</p>
                    </div>
                </div>
                {/* address section */}
                <div className="second-div flex flex-col justify-center mt-12 ">
                <p className='font-semibold text-lg uppercase mb-3'>Office Address</p>
                <div className="address flex flex-col gap-5  -tracking-wide">
                <div className="first-address">
                    <p className='flex gap-2'><span> <FaMapMarkerAlt className="text-blue-500" /></span>No 1 Awe street huruna college road ogba lfako, Lagos State</p>
                </div>
                <div className="second-address">    
                    <p className='flex gap-2'><span> <FaMapMarkerAlt className="text-blue-500" /></span>Close 11 court estate eligbu OBIO-AKPO LGA, Port Harcourt River state</p>
                </div>
                </div>
                <p></p>
                </div>
                {/* contact structure */}
                <div className="third-div">
                    <p></p>
                    <div className="first-contact">

                        <p><span><FaWhatsapp className="text-blue-500" /></span>09073761968 , 08032433093, 08067793091
                        </p>
                    </div>
                    <div className="second-contact">
                        <p><span><MdMessage className="text-blue-500" /></span>support@bjaglobalservices.com</p>
                    </div>

                    <div className="social-icon">
                                    <div className="icon-f">
                                <FaFacebookF className='w-6 h-6 bg-blue-900 text-lg  text-gray-200 rounded-full p-1' />
                                </div>
                                <div className="icon-f w-5 h-5 bg-color-blue">
                                    <FaTwitter className='w-6 h-6  bg-blue-900  text-lg  text-gray-200 rounded-full p-1 '/>
                                    </div>
                                <div className="icon-f">
                                    <FaInstagram className='w-6 h-6 bg-blue-900  text-gray-200 rounded-full text-lg p-1'/>
                                    </div>
                                <div className="icon-f">
                                    <FaLinkedin className='w-6 h-6 bg-blue-900  text-gray-200 rounded-full text-lg p-1'/>
                                    </div>
                </div>
            </div>

    </div>
    <div className="last-footer  bg-black h-12 text-white ">
        <p className=''>© 2024, BJA Global Limited. All rights reserved</p>
        <p  className='float-right'> Developed by  Merakinode</p>


    </div>
    </div>
  )
}
