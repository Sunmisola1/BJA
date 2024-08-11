
import { useState } from 'react';
import Logo from '../../assets/Logo.png'
import {FaFacebookF,FaTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa';
import "./Navbar.css" 
import { FiMenu ,  FiX} from 'react-icons/fi';
import { motion,AnimatePresence } from 'framer-motion';
import { Link} from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu =()=> setOpen(!isOpen);

    
  return (
    <div>
    <div className="nav-container h-22 md:h-42  flex bg-blue-50 ">
        <div className=" flex justify-between md:flex md:justify-evenly bg-white items-center shadow w-full mt-14 h-16  ">
            {/* <div className='bg-gray-500  absolute'>
                <hr/>
            </div> */}
          
            <div className="nav-logo flex items-start md:ml-0 ">
                <img src={Logo} alt="bja-logo" className='ml-6 w-24 h-24 md:z-50 md:w-36 md:h-36' />
            </div>
            <div className="nav-links md:flex gap-10 font-playfair font-medium text-xl hidden ">
            <div className="links"><Link  to="/" >HOME</Link></div>
                <div className="links"><Link  to="/TheCompany" >THE COMPANY</Link></div>
                 <div className="links"><Link  to="/teams" >TEAMS</Link></div>
                <div className="links"><Link  to="/Blog" >BLOG</Link></div>
                <div className="links"><Link  to="/gallery" >GALLERY</Link></div>
                <div className="links"><Link  to="/Contact" >CONTACT</Link></div>
            </div>
            <div className="nav-socialplatfom md:flex gap-5  justify-evenly hidden  ">
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

            {/* Mobile-view */}
            <div className="mobile-view md:hidden flex ">
                <button  onClick={toggleMenu}>< FiMenu className='w-32'/> </button>
                         <AnimatePresence> 
               {isOpen &&(
               
                 <motion.div
                 initial={{ x: '100%' }}
                 animate={{ x: 0 }}
                 exit={{ x: '100%' }}
                 transition={{ duration: 0.2 }}
               className = {`fixed inset-0 bg-blue-50 h-full  flex flex-col items-center  text-white z-20  transform ${isOpen ? 'navbar-slide-in' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
               
                <div className=' container bg-blue-950 px-6  py-9 flex justify-end'> 
                    <button  onClick={toggleMenu} className=''>  
                    < FiX className="w-7 h-7 border rounded-full border-white "/></button></div>
                <div className="nav-links font-playfair font-medium text-xl flex flex-col items-center mt-12 justify-center gap-9">
                <div className="links"><Link  to="/" className=" capitalize text-black">Home</Link></div>
                <div className="links"><Link  to="/TheCompany" className=" capitalize text-black">The company</Link></div>
                <div className="links"><Link  to="/Solution" className=" capitalize text-black">Solutions</Link></div>
                <div className="links"><Link  to="/Blog" className="capitalize  text-black">blog</Link></div>
                <div className="links"><Link  to="/Career" className=" capitalize text-black">career</Link></div>
                <div className="links"><Link  to="/Contact" className=" capitalize text-black">contact</Link></div>
               
            </div>
            <div className="nav-socialplatfom flex gap-7 mt-10 ">
                <div className="icon-f">
                  <FaFacebookF className='w-8 h-8 bg-blue-950 text-lg  text-gray-200 rounded-full p-1' />
                  </div>
                <div className="icon-f  ">
                    <FaTwitter className='w-8 h-8  bg-blue-950   text-lg  text-gray-200 rounded-full p-1 '/>
                    </div>
                <div className="icon-f">
                    <FaInstagram className='w-8 h-8 bg-blue-950   text-gray-200 rounded-full text-lg p-1'/>
                    </div>
                <div className="icon-f">
                    <FaLinkedin className='w-8 h-8 bg-blue-950   text-gray-200 rounded-full text-lg p-1'/>
                    </div>
            </div>

            <div className="nav-noplatfom flex  font-san gap-7 mt-8 ">
                <div className="icon-f">
                  <h5 className=" text-black font-semibold">09073761968</h5>
                  </div>
                <div className="icon-f  ">
                <h5 className=" text-black  font-semibold">08032433093</h5>
                    </div>
              
            </div>

            <div className='  border border-blue-950 text-center px-16 rounded-lg py-1  mt-9 flex justify-end'> <button  onClick={toggleMenu} className='text-blue-950 '>  
           Close</button></div>
            
           </motion.div>
            )} 
            </AnimatePresence>
        </div>
        </div>

    </div>  

        
</div>
  )
}
