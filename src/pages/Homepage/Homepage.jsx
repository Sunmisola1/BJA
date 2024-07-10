import './Homepage.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideUp from '../../components/slidescroll/Slideup';
import Hero from "../../assets/img/hero.mp4"
import BannerSection from './Banner/Banner';
import TrustedSection from './TrustedSection/TrustedSection';
import About from './AboutHome/About';
import NewsEvents from './NewsAndEvents/NewsEvents';
import HearClient from './HearFromClient/HearClient';
import CTA from './CTA/CTA';
  

export default function Homepage() {

    return (
    <div  className='overflow-hidden'>
    <div className="hero ">
    <video autoPlay loop muted className="hero-video">
        <source src={Hero} type="video/mp4" className=' hero-content'/>
       
      </video>
    </div>
{/* bout what we do */}
            <SlideUp>
        <div className="container w-full p-16 flex m-auto  font-medium overflow-hidden">
      
        <About/>
          </div>
            </SlideUp>
           
          {/* trusted */}
          <TrustedSection/>
          {/* news and events*/}
           <NewsEvents/>


        {/*banner*/} 
            <BannerSection/>

            {/* clientts */}
            <HearClient />

            {/* CTA */}
            <CTA/>
          </div>
   
  )
}

