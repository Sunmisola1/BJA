import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function About() {
    
    const [isParagraphVisible, setIsParagraphVisible] = useState(false);

    const toggleParagraphVisibility = () => {
      setIsParagraphVisible(!isParagraphVisible);
    };

  return (
    <div>  <div className="what-we-do font-serif">
    <div className="about-header mb-4">
        <h2 className="font-san text-3xl"><span className="underline font-bold ">What</span> We Do</h2>
        
    </div>
    <div className="about-wrap grid  md:grid-cols-2 gap-x-20 gap-y-7">
        <div className="about-text  ">
            <h3 className="font-bold text-xl" onClick={toggleParagraphVisibility}>  <FontAwesomeIcon icon={faCheckCircle} size="1x" className='text-blue-950 mr-2' /> Comprehensive Catering Service</h3>
            <p className={`mt-2 text-justify md:mt-0  ${isParagraphVisible ? 'block' : 'hidden'} md:block `} >We offer a full range of catering solutions, including meal planning, preparation, and delivery, 
                designed to meet the diverse dietary and operational needs of our clients in the oil and gas industry.</p>
        </div>
    
        <div className="about-text  font-serif">
            <h3 className="font-bold text-xl  flex" onClick={toggleParagraphVisibility}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-blue-950 mr-2'>
        <path d="M13.75 18.75H16.25V15.6249H19.375V13.1249H16.25V9.99995H13.75V13.1249H10.625V15.6249H13.75V18.75ZM15 26.2025C12.4883 25.4566 10.4021 23.9354 8.74125 21.6387C7.08042 19.342 6.25 16.7541 6.25 13.8749V7.11494L15 3.84619L23.75 7.11494V13.8749C23.75 16.7533 22.9196 19.3408 21.2588 21.6375C19.5979 23.9341 17.5117 25.455 15 26.2025Z" fill="#2E3177"/>
        <path d="M13.75 18.75H16.25V15.6249H19.375V13.1249H16.25V9.99995H13.75V13.1249H10.625V15.6249H13.75V18.75ZM15 26.2025C12.4883 25.4566 10.4021 23.9354 8.74125 21.6387C7.08042 19.342 6.25 16.7541 6.25 13.8749V7.11494L15 3.84619L23.75 7.11494V13.8749C23.75 16.7533 22.9196 19.3408 21.2588 21.6375C19.5979 23.9341 17.5117 25.455 15 26.2025Z" fill="black" opacity="0.2"/>
                </svg>Quality and Safety</h3>
            <p className={`mt-2 text-justify md:mt-0  ${isParagraphVisible ? 'block' : 'hidden'} md:block `}>We prioritize quality and safety in every aspect of our catering operations. Our team of experienced chefs and support
                 staff adhere to stringent hygiene and safety protocols to deliver meals that are both nutritious and safe.</p>
        </div>
        <div className="about-text font-serif">
            <h3 className="font-bold text-xl flex" onClick={toggleParagraphVisibility}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M7.5 23.75C5.7425 22.5787 4.75625 21.2062 4.2425 19.935C3.8825 19.0475 3.7025 18.6025 4.07375 18.0512C4.44625 17.5 5.0475 17.5 6.25 17.5H23.75C24.9525 17.5 25.5538 17.5 25.925 18.0512C26.2975 18.6025 26.1175 19.0475 25.7575 19.935C25.2425 21.2062 24.2575 22.5775 22.5 23.75M17.5 17.5V3.74998M2.5 27.01C2.99893 27.3154 3.57253 27.477 4.1575 27.477C4.74247 27.477 5.31607 27.3154 5.815 27.01C7.4475 25.9975 9.56875 25.9975 11.225 27.01C11.225 27.0337 11.25 27.0337 11.25 27.0337C12.25 27.655 13.565 27.655 14.565 27.0337C15.3842 26.5365 16.3242 26.2736 17.2825 26.2736C18.2408 26.2736 19.1808 26.5365 20 27.0337C21 27.655 22.2913 27.6325 23.315 27.01C23.9352 26.6304 24.6285 26.3858 25.3496 26.2921C26.0706 26.1984 26.8034 26.2578 27.5 26.4662M18.8813 4.59248L21.2525 8.65623C22.2475 10.3625 22.745 11.2162 22.3813 11.8575C22.0163 12.5 21.035 12.5 19.0713 12.5H12.9075C10.4025 12.5 9.14875 12.5 8.82 11.73C8.49 10.9612 9.34875 10.0425 11.065 8.20123L14.8588 4.13873C15.9188 3.00123 16.4488 2.43498 17.0763 2.50623C17.705 2.57748 18.0975 3.24873 18.8813 4.59248Z" stroke="#2E3177" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 23.75C5.7425 22.5787 4.75625 21.2062 4.2425 19.935C3.8825 19.0475 3.7025 18.6025 4.07375 18.0512C4.44625 17.5 5.0475 17.5 6.25 17.5H23.75C24.9525 17.5 25.5538 17.5 25.925 18.0512C26.2975 18.6025 26.1175 19.0475 25.7575 19.935C25.2425 21.2062 24.2575 22.5775 22.5 23.75M17.5 17.5V3.74998M2.5 27.01C2.99893 27.3154 3.57253 27.477 4.1575 27.477C4.74247 27.477 5.31607 27.3154 5.815 27.01C7.4475 25.9975 9.56875 25.9975 11.225 27.01C11.225 27.0337 11.25 27.0337 11.25 27.0337C12.25 27.655 13.565 27.655 14.565 27.0337C15.3842 26.5365 16.3242 26.2736 17.2825 26.2736C18.2408 26.2736 19.1808 26.5365 20 27.0337C21 27.655 22.2913 27.6325 23.315 27.01C23.9352 26.6304 24.6285 26.3858 25.3496 26.2921C26.0706 26.1984 26.8034 26.2578 27.5 26.4662M18.8813 4.59248L21.2525 8.65623C22.2475 10.3625 22.745 11.2162 22.3813 11.8575C22.0163 12.5 21.035 12.5 19.0713 12.5H12.9075C10.4025 12.5 9.14875 12.5 8.82 11.73C8.49 10.9612 9.34875 10.0425 11.065 8.20123L14.8588 4.13873C15.9188 3.00123 16.4488 2.43498 17.0763 2.50623C17.705 2.57748 18.0975 3.24873 18.8813 4.59248Z" stroke="black" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Offshore Catering</h3>
            <p className={`mt-2 text-justify md:mt-0  ${isParagraphVisible ? 'block' : 'hidden'} md:block `}>Our offshore catering services are designed to support the demanding schedules and conditions of offshore rigs and installations. We ensure that every meal is not only delicious but also meets the highest standards of safety and nutrition, 
                contributing to the well-being and efficiency of the crew.</p>
        </div>
        
        <div className="about-text font-serif">
            <h3 className="font-bold text-xl" onClick={toggleParagraphVisibility}>   <FontAwesomeIcon icon={faFlask} size="1x" className='text-blue-950 mr-2' />Tailored Solutions</h3>
            <p className={`mt-2 text-justify md:mt-0  ${isParagraphVisible ? 'block' : 'hidden'} md:block `}>Understanding the unique challenges and environments of the oil and gas sector, 
                we offer tailored catering solutions that address the specific needs of our clients,
                 ensuring satisfaction and operational continuity.</p>
        </div>
        <div className="about-text font-serif">
            <h3 className="font-bold text-xl" onClick={toggleParagraphVisibility}> <FontAwesomeIcon icon={faBuilding} size="1x" className='text-blue-950 mr-2' />Onshore Catering</h3>
            <p className={`mt-2 text-justify md:mt-0  ${isParagraphVisible ? 'block' : 'hidden'} md:block `} >For onshore locations, we provide customized catering solutions that enhance the dining experience for personnel working in various oil and gas facilities. Our services are flexible and responsive, capable of adapting to different site requirements and client preferences.</p>
        </div>
        <div className="about-text">
           <button className='text-color px-12 py-4 rounded-lg  text-2xl text-center text-pretty font-sans text-white font-bold'>Learn more</button>
        </div>
    </div>
</div></div>
  )
}

export default About

