import Logo from '../../assets/Logo.png'
import {FaFacebookF,FaTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
            <div className="footer py-16 bg-blue-50  flex">
                <div className="first-div">
                    <div className="logo flex gap-2">
                        <img src={Logo} alt="logo-img"   className='w-16 h-16' />
                        <span className='text-blue-950 text-sm justify-center'>BJA GLOBAL SERVICES LIMITED</span>
                    </div>
                    <div className="logo-text"></div>
                </div>
                <div className="second-div">
                <p>Office Address</p>
                <div className="first-address"></div>
                <div className="second-address"></div>
                <p></p>
                </div>
                <div className="third-div">
                    <p></p>
                    <div className="first-contact"></div>
                    <div className="second-contact"></div>

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
    </div>
  )
}
