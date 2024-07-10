
import Hero from "../../../assets/img/hero.mp4"
import './HeroSection.css'
export default function HeroSection() {
  return (
    <div><video autoPlay loop muted className="hero-video">
    <source src={Hero} type="video/mp4" className=' hero-content'/>
   
  </video></div>
  )
}
