import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import box from '../../assets/img/images.jpg';
import { useMediaQuery } from 'react-responsive';
import SlideUp from '../../components/slidescroll/Slideup';
import SlideDown from '../../components/slidescroll/SlideDown';
import SlideRight from '../../components/slidescroll/SlideRight';
import Hero from "../../assets/img/hero.mp4"
  

export default function Homepage() {


// end

    const [isParagraphVisible, setIsParagraphVisible] = useState(false);

    const toggleParagraphVisibility = () => {
      setIsParagraphVisible(!isParagraphVisible);
    };

 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,         // Enable auto-scroll
        autoplaySpeed: 2000,    // Time between each auto-scroll (in milliseconds)
        pauseOnHover: true ,    // Pause auto-scroll on hover
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
      const images = [
        { src: box, alt: "Image 1" },
        { src: box, alt: "Image 2" },
        { src: box, alt: "Image 3" },
        { src: box, alt: "Image 4" },
        { src: box, alt: "Image 5" },
      ];
   // news

   const initialNews = [
    {
        img: box,
        alt: "Image 1",
        heading: "Lorem ipsum dolor sit amet consectetur. Rhoncus nullam nulla.",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis. Ac integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
        socialicons: [
            { icon: "likes", count: 20 },
            { icon: "message", count: 10 },
            { icon: "dislike", count: 5 }
        ] ,
        date:"21-10-2002"
       
    },

    {
        img: box,
        alt: "Image 2",
        heading: "Lorem ipsum dolor sit amet consectetur. Rhoncus nullam nulla..",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis. Ac integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
        socialicons: [
            { icon: "like", count: 15 },
            { icon: "message", count: 5 },
            { icon: "dislike", count: 3 }
        ],
        date:"21-10-2002"
    },
    {
        img: box,
        alt: "Image 3",
        heading: "Lorem ipsum dolor sit amet consectetur. Rhoncus nullam nulla.",
        paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis. Ac integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
        socialicons: [
            { icon: "like", count: 25 },
            { icon: "message", count: 8 },
            { icon: "dislike", count: 2 }
        ],

        date:"21-10-2002"
       
    }
];

   const [news, setNews] = useState(initialNews);

   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

   const handleIconClick = (newsIndex, iconIndex) => {
       const updatedNews = news.map((item, idx) => {
           if (idx === newsIndex) {
               const updatedSocialIcons = item.socialicons.map((icon, i) => {
                   if (i === iconIndex) {
                       return { ...icon, count: icon.count + 1 };
                   }
                   return icon;
               });
               return { ...item, socialicons: updatedSocialIcons };
           }
           return item;
       });

       setNews(updatedNews);
   };

   const setting = {
   
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
   };

   
    return (
    <div>
    <div className="hero ">
    <video autoPlay loop muted className="hero-video">
        <source src={Hero} type="video/mp4" className=' hero-content'/>
       
      </video>
    </div>
{/* bout what we do */}
<SlideUp>
        <div className="container w-full p-16 flex m-auto  font-medium overflow-hidden">
        <div className="what-we-do font-serif">
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
        </div>

            </div>
            </SlideUp>
           
    {/* trusted */}

    <div className="container mx-auto p-4">
     <SlideDown>
        <div className="trusted">
            <h1 className='text-center font-bold text-2xl transition mb-4'>Trusted By</h1>
        </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </Slider>
 </SlideDown>
    </div>

            {/* news and events
             */}

             <div className=" my-9 md:my-10 bg-green-50 flex flex-col items-center justify-center">
           
                <div className="title-news ">
                    <h1 className='text-blue-950 text-center mt-7 mb-3  font-bold font-san text-3xl'>News / Events</h1>
                </div>
                <div className="container px-4 py-1">
            {isMobile ? (
                <Slider {...setting}>
                    {news.map((item, index) => (
                            <div key={index} className="py-2 overflow-hidden  mx-auto">
                        <SlideRight>
                            <div className="new-container  p-3 font-roboto m-auto  ">
                                <div className="img-cont">
                                    <img src={item.img} alt={item.alt} className="w-full h-44 object-cover"/>
                                </div>
                                <div className="text-con font-sans mt-5 m-auto">
                                    <h1 className="text-lg font-bold my-3 w-84   tracking-wider leading-relaxed">{item.heading}</h1>
                                    <p className="tracking-wider w-84 ">{item.paragraph}</p>
                                </div>

                                <div className="like-cont flex my-5 w-full text-xs gap-6">
                                <p className="flex gap-2">
                                <span className=''> Date:</span>{item.date}
                                        </p>                            
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 0)}>
                                        <span role="img" aria-label="like">
                                             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                 <path d="M8.59379 10.7872H10.1348V8.47564H12.4464V6.93461H10.1348V4.62307H8.59379V6.93461H6.28226V8.47564H8.59379V10.7872ZM1.65918 16.9513V1.54102H17.0694V13.8692H4.74123L1.65918 16.9513ZM3.20021 13.2336L4.10556 12.3282H15.5284V3.08205H3.20021V13.2336ZM3.20021 13.2336V3.08205V12.3282V13.2336Z" fill="#2E7D32"/>
                                                </svg></span> {item.socialicons[0].count}
                                    </p>
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 1)}>
                                        <span role="img" aria-label="message">  
                                              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_177)">
                                                    <path d="M1.34399 7.80277V13.0416H3.56192L3.67391 13.0548C5.73299 13.535 7.09741 13.8812 7.77743 14.0957C8.6807 14.3804 9.01742 14.4499 9.63009 14.4909C10.0883 14.5224 10.6088 14.346 10.8459 14.1044C10.9769 13.9712 11.075 13.6975 11.1138 13.2729C11.1219 13.1839 11.1537 13.0987 11.206 13.0262C11.2583 12.9536 11.3291 12.8965 11.411 12.8608C11.5933 12.7817 11.7448 12.6529 11.8714 12.4655C11.9886 12.2942 12.0647 11.9751 12.0786 11.5132C12.081 11.4283 12.1051 11.3454 12.1485 11.2724C12.192 11.1994 12.2533 11.1387 12.3267 11.096C12.7527 10.8493 12.9636 10.5711 13.0075 10.2447C13.0558 9.88381 12.9387 9.47756 12.632 9.01494C12.56 8.90645 12.5332 8.77416 12.5573 8.64621C12.5813 8.51826 12.6543 8.40475 12.7608 8.3298C13.0543 8.12338 13.2154 7.83644 13.2556 7.42946C13.32 6.78092 12.9065 6.30147 11.9703 6.20557C11.1364 6.12311 10.2945 6.1933 9.48589 6.41273C9.39416 6.4367 9.29749 6.43397 9.20725 6.40487C9.11702 6.37577 9.03697 6.3215 8.97653 6.24845C8.91609 6.1754 8.87777 6.08661 8.86608 5.99252C8.85439 5.89843 8.86982 5.80296 8.91055 5.71734C9.27654 4.9429 9.48003 4.30387 9.52761 3.80905C9.58983 3.15246 9.43831 2.67666 9.08403 2.28432C8.81539 1.98713 8.38571 1.81731 8.22467 1.85245C8.0124 1.89783 7.87405 2.0208 7.69398 2.45121C7.58784 2.70594 7.53661 2.92261 7.44877 3.42842C7.36459 3.9086 7.31847 4.12527 7.22258 4.40928C6.93345 5.2701 6.22415 6.16239 5.27184 6.77799C4.60441 7.20892 3.88106 7.54634 3.12199 7.78081C3.07457 7.79543 3.02522 7.80283 2.97559 7.80277H1.34399ZM1.31325 14.0393C1.07682 14.0459 0.864542 13.9932 0.68667 13.8687C0.459754 13.7099 0.352883 13.4596 0.350687 13.1712L0.352883 7.81082C0.327996 7.52535 0.412174 7.2633 0.611275 7.06859C0.797932 6.88559 1.04168 6.79922 1.29934 6.80507H2.89873C3.54571 6.59893 4.16252 6.30799 4.73309 5.93986C5.50022 5.44358 6.06531 4.73208 6.28125 4.09086C6.35518 3.8698 6.39471 3.68681 6.46937 3.2564C6.57038 2.67886 6.63333 2.41022 6.77827 2.06472C7.07838 1.34591 7.47219 0.994558 8.01533 0.876708C8.54968 0.761054 9.32778 1.06922 9.81967 1.61382C10.365 2.21698 10.6058 2.97166 10.5165 3.90421C10.4785 4.30534 10.3672 4.75404 10.1842 5.25399C10.8092 5.16292 11.4429 5.14915 12.0713 5.213C13.5404 5.36306 14.3653 6.31976 14.2453 7.52901C14.1926 8.05018 14.0037 8.49303 13.6824 8.84073C13.9525 9.36117 14.0601 9.87576 13.9927 10.3779C13.9151 10.9562 13.5931 11.4378 13.0573 11.8119C13.0155 12.3191 12.8991 12.7239 12.6927 13.027C12.5301 13.2718 12.3179 13.4798 12.0698 13.6374C11.9907 14.1381 11.8246 14.5297 11.553 14.805C11.1028 15.2632 10.2984 15.5362 9.56348 15.4864C8.86589 15.4396 8.45305 15.3547 7.47951 15.0472C6.83756 14.8445 5.50827 14.5078 3.50482 14.0393H1.31325ZM2.55836 7.57512C2.55817 7.50963 2.5709 7.44475 2.59583 7.38419C2.62076 7.32363 2.65739 7.26859 2.70363 7.22221C2.74987 7.17584 2.80481 7.13904 2.86529 7.11394C2.92578 7.08883 2.99062 7.07591 3.05611 7.07591C3.12148 7.0761 3.18617 7.08916 3.24648 7.11436C3.3068 7.13955 3.36156 7.17637 3.40765 7.22273C3.45373 7.26909 3.49023 7.32407 3.51507 7.38453C3.53991 7.44499 3.55259 7.50976 3.5524 7.57512V13.1953C3.5525 13.2607 3.53972 13.3254 3.51479 13.3859C3.48987 13.4463 3.45328 13.5012 3.40713 13.5475C3.36098 13.5938 3.30616 13.6305 3.24581 13.6556C3.18545 13.6807 3.12075 13.6937 3.05538 13.6938C2.99001 13.6937 2.92531 13.6807 2.86495 13.6556C2.8046 13.6305 2.74978 13.5938 2.70363 13.5475C2.65748 13.5012 2.6209 13.4463 2.59597 13.3859C2.57104 13.3254 2.55826 13.2607 2.55836 13.1953V7.57512Z" fill="#F2690C"/>
                                                            </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_177">
                                                            <rect width="14.6397" height="14.6397" fill="white" transform="translate(0.348633 0.852539)"/>
                                                            </clipPath>
                                                            </defs>
                                                                </svg></span> {item.socialicons[1].count}
                                    </p>
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 2)}>
                                        <span role="img" aria-label="dislike">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_1_179)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2835 0.805546C12.5886 1.08832 12.7882 1.67854 12.8275 2.03451C13.2821 2.31652 13.8199 2.88516 13.8669 3.95617C14.6783 4.51942 15.2947 5.56115 14.5249 7.08446C14.9718 7.50053 15.4703 8.77034 14.8293 9.79358C14.0826 10.9894 12.4599 11.0726 10.8426 10.8592C11.2741 12.0651 11.4359 13.1777 10.7533 14.3173C10.0744 15.3282 9.13749 15.4923 8.81696 15.4923C7.94012 15.4923 7.33912 14.738 7.09563 13.7332C7.00703 13.4527 6.90609 12.7901 6.86679 12.616C6.66261 11.5064 5.97608 10.6188 4.80952 9.95539C4.29053 9.65728 3.74242 9.41304 3.17372 9.22648H1.37072C0.969287 9.22648 0.489258 8.82042 0.489258 8.32883V2.4452C0.546276 1.88889 0.855251 1.6115 1.41541 1.6115H3.81171C4.86269 1.37264 5.91059 1.11683 6.95463 0.844842C7.96323 0.572851 8.18437 0.482701 8.89016 0.288532C10.472 -0.121381 11.57 0.104379 12.2835 0.805546ZM10.4481 1.13224C9.81709 1.13224 9.01806 1.32641 8.66363 1.43968C8.53881 1.47897 8.31998 1.5437 8.0896 1.60996L7.85844 1.677L7.63653 1.74018L7.20505 1.86192C7.20505 1.86192 6.11862 2.15317 3.9897 2.64784C3.91033 2.65709 3.86796 2.66325 3.86179 2.66479V8.35118C5.02604 8.79962 5.93293 9.3436 6.5817 9.98312C7.55563 10.9416 7.82608 11.8077 7.98558 12.9165C8.0765 13.4735 8.22367 13.9228 8.44557 14.2302C8.50931 14.3223 8.60209 14.3904 8.70909 14.4236C8.82235 14.4598 8.97877 14.4621 9.3124 14.2818C9.64603 14.1 10.0752 13.6246 10.1561 12.9165C10.21 12.2284 10.0251 11.632 9.77702 11.0048C9.69137 10.7911 9.59964 10.5799 9.50195 10.3715C9.33397 10.0532 9.5867 9.52467 10.1076 9.63948C10.8057 9.83596 12.5378 10.1018 13.5148 9.63948C14.0826 9.31047 14.2236 8.77958 13.9362 8.0476C13.8412 7.87979 13.7111 7.73445 13.5548 7.6215C13.4239 7.54291 13.168 7.20234 13.4755 6.81632C13.7806 6.32704 14.2267 5.33077 13.0979 4.70973C13.0192 4.66644 12.9534 4.60291 12.9073 4.52571C12.8613 4.44851 12.8366 4.36043 12.836 4.27054C12.8205 4.05942 12.8544 3.27658 12.2735 2.92677C12.1348 2.85203 11.9676 2.79039 11.8728 2.61086C11.8127 2.4922 11.7935 2.20403 11.7935 2.20403C11.7141 1.71706 11.6047 1.26246 10.4481 1.13224ZM2.81544 2.66171H1.53793V8.17627H2.81544V2.66171Z" fill="#FF0000" fillOpacity="0.89"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_1_179">
                                                                <rect width="15.4103" height="15.4103" fill="white" transform="translate(0.104004 0.0820312)"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>
                                            </span> {item.socialicons[2].count}
                                    </p>
                                </div>
                                <div className="btn-cont">
                                    <button className="bg-blue-950 px-28 w-full   py-2 rounded-sm text-white font-bold font-playfair">
                                        Read more
                                    </button>
                                </div>
                            </div> </SlideRight>
                        </div>
                    ))}
                </Slider>
            ) : (
                <SlideRight>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {news.map((item, index) => (
                        <div key={index} className="p-4">
                            
                            <div className="new-container w-80 ">
                                <div className="img-cont">
                                    <img src={item.img} alt={item.alt} className="w-full h-48 object-cover "/>
                                </div>
                                <div className="text-con  mt-5 font-roboto">
                                    <h1 className="text-lg font-bold my-3">{item.heading}</h1>
                                    <p className="w-72 tracking-wider">{item.paragraph}</p>
                                </div>
                                <div className="like-cont flex my-4 text-xs gap-3"> 
                                <p className="flex gap-2">
                                <span className=''> Date:</span>{item.date}
                                        </p> 
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 0)}>
                                        <span role="img" aria-label="like">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59379 10.7872H10.1348V8.47564H12.4464V6.93461H10.1348V4.62307H8.59379V6.93461H6.28226V8.47564H8.59379V10.7872ZM1.65918 16.9513V1.54102H17.0694V13.8692H4.74123L1.65918 16.9513ZM3.20021 13.2336L4.10556 12.3282H15.5284V3.08205H3.20021V13.2336ZM3.20021 13.2336V3.08205V12.3282V13.2336Z" fill="#2E7D32"/>
</svg>
</span> {item.socialicons[0].count}
                                    </p>
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 1)}>
                                        <span role="img" aria-label="message">
                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_177)">
                                                    <path d="M1.34399 7.80277V13.0416H3.56192L3.67391 13.0548C5.73299 13.535 7.09741 13.8812 7.77743 14.0957C8.6807 14.3804 9.01742 14.4499 9.63009 14.4909C10.0883 14.5224 10.6088 14.346 10.8459 14.1044C10.9769 13.9712 11.075 13.6975 11.1138 13.2729C11.1219 13.1839 11.1537 13.0987 11.206 13.0262C11.2583 12.9536 11.3291 12.8965 11.411 12.8608C11.5933 12.7817 11.7448 12.6529 11.8714 12.4655C11.9886 12.2942 12.0647 11.9751 12.0786 11.5132C12.081 11.4283 12.1051 11.3454 12.1485 11.2724C12.192 11.1994 12.2533 11.1387 12.3267 11.096C12.7527 10.8493 12.9636 10.5711 13.0075 10.2447C13.0558 9.88381 12.9387 9.47756 12.632 9.01494C12.56 8.90645 12.5332 8.77416 12.5573 8.64621C12.5813 8.51826 12.6543 8.40475 12.7608 8.3298C13.0543 8.12338 13.2154 7.83644 13.2556 7.42946C13.32 6.78092 12.9065 6.30147 11.9703 6.20557C11.1364 6.12311 10.2945 6.1933 9.48589 6.41273C9.39416 6.4367 9.29749 6.43397 9.20725 6.40487C9.11702 6.37577 9.03697 6.3215 8.97653 6.24845C8.91609 6.1754 8.87777 6.08661 8.86608 5.99252C8.85439 5.89843 8.86982 5.80296 8.91055 5.71734C9.27654 4.9429 9.48003 4.30387 9.52761 3.80905C9.58983 3.15246 9.43831 2.67666 9.08403 2.28432C8.81539 1.98713 8.38571 1.81731 8.22467 1.85245C8.0124 1.89783 7.87405 2.0208 7.69398 2.45121C7.58784 2.70594 7.53661 2.92261 7.44877 3.42842C7.36459 3.9086 7.31847 4.12527 7.22258 4.40928C6.93345 5.2701 6.22415 6.16239 5.27184 6.77799C4.60441 7.20892 3.88106 7.54634 3.12199 7.78081C3.07457 7.79543 3.02522 7.80283 2.97559 7.80277H1.34399ZM1.31325 14.0393C1.07682 14.0459 0.864542 13.9932 0.68667 13.8687C0.459754 13.7099 0.352883 13.4596 0.350687 13.1712L0.352883 7.81082C0.327996 7.52535 0.412174 7.2633 0.611275 7.06859C0.797932 6.88559 1.04168 6.79922 1.29934 6.80507H2.89873C3.54571 6.59893 4.16252 6.30799 4.73309 5.93986C5.50022 5.44358 6.06531 4.73208 6.28125 4.09086C6.35518 3.8698 6.39471 3.68681 6.46937 3.2564C6.57038 2.67886 6.63333 2.41022 6.77827 2.06472C7.07838 1.34591 7.47219 0.994558 8.01533 0.876708C8.54968 0.761054 9.32778 1.06922 9.81967 1.61382C10.365 2.21698 10.6058 2.97166 10.5165 3.90421C10.4785 4.30534 10.3672 4.75404 10.1842 5.25399C10.8092 5.16292 11.4429 5.14915 12.0713 5.213C13.5404 5.36306 14.3653 6.31976 14.2453 7.52901C14.1926 8.05018 14.0037 8.49303 13.6824 8.84073C13.9525 9.36117 14.0601 9.87576 13.9927 10.3779C13.9151 10.9562 13.5931 11.4378 13.0573 11.8119C13.0155 12.3191 12.8991 12.7239 12.6927 13.027C12.5301 13.2718 12.3179 13.4798 12.0698 13.6374C11.9907 14.1381 11.8246 14.5297 11.553 14.805C11.1028 15.2632 10.2984 15.5362 9.56348 15.4864C8.86589 15.4396 8.45305 15.3547 7.47951 15.0472C6.83756 14.8445 5.50827 14.5078 3.50482 14.0393H1.31325ZM2.55836 7.57512C2.55817 7.50963 2.5709 7.44475 2.59583 7.38419C2.62076 7.32363 2.65739 7.26859 2.70363 7.22221C2.74987 7.17584 2.80481 7.13904 2.86529 7.11394C2.92578 7.08883 2.99062 7.07591 3.05611 7.07591C3.12148 7.0761 3.18617 7.08916 3.24648 7.11436C3.3068 7.13955 3.36156 7.17637 3.40765 7.22273C3.45373 7.26909 3.49023 7.32407 3.51507 7.38453C3.53991 7.44499 3.55259 7.50976 3.5524 7.57512V13.1953C3.5525 13.2607 3.53972 13.3254 3.51479 13.3859C3.48987 13.4463 3.45328 13.5012 3.40713 13.5475C3.36098 13.5938 3.30616 13.6305 3.24581 13.6556C3.18545 13.6807 3.12075 13.6937 3.05538 13.6938C2.99001 13.6937 2.92531 13.6807 2.86495 13.6556C2.8046 13.6305 2.74978 13.5938 2.70363 13.5475C2.65748 13.5012 2.6209 13.4463 2.59597 13.3859C2.57104 13.3254 2.55826 13.2607 2.55836 13.1953V7.57512Z" fill="#F2690C"/>
                                                            </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_177">
                                                            <rect width="14.6397" height="14.6397" fill="white" transform="translate(0.348633 0.852539)"/>
                                                            </clipPath>
                                                            </defs>
                                                                </svg>
                                                                </span> {item.socialicons[1].count}
                                    </p>
                                    <p className="flex gap-2" onClick={() => handleIconClick(index, 2)}>
                                        <span role="img" aria-label="dislike">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_1_179)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M12.2835 0.805546C12.5886 1.08832 12.7882 1.67854 12.8275 2.03451C13.2821 2.31652 13.8199 2.88516 13.8669 3.95617C14.6783 4.51942 15.2947 5.56115 14.5249 7.08446C14.9718 7.50053 15.4703 8.77034 14.8293 9.79358C14.0826 10.9894 12.4599 11.0726 10.8426 10.8592C11.2741 12.0651 11.4359 13.1777 10.7533 14.3173C10.0744 15.3282 9.13749 15.4923 8.81696 15.4923C7.94012 15.4923 7.33912 14.738 7.09563 13.7332C7.00703 13.4527 6.90609 12.7901 6.86679 12.616C6.66261 11.5064 5.97608 10.6188 4.80952 9.95539C4.29053 9.65728 3.74242 9.41304 3.17372 9.22648H1.37072C0.969287 9.22648 0.489258 8.82042 0.489258 8.32883V2.4452C0.546276 1.88889 0.855251 1.6115 1.41541 1.6115H3.81171C4.86269 1.37264 5.91059 1.11683 6.95463 0.844842C7.96323 0.572851 8.18437 0.482701 8.89016 0.288532C10.472 -0.121381 11.57 0.104379 12.2835 0.805546ZM10.4481 1.13224C9.81709 1.13224 9.01806 1.32641 8.66363 1.43968C8.53881 1.47897 8.31998 1.5437 8.0896 1.60996L7.85844 1.677L7.63653 1.74018L7.20505 1.86192C7.20505 1.86192 6.11862 2.15317 3.9897 2.64784C3.91033 2.65709 3.86796 2.66325 3.86179 2.66479V8.35118C5.02604 8.79962 5.93293 9.3436 6.5817 9.98312C7.55563 10.9416 7.82608 11.8077 7.98558 12.9165C8.0765 13.4735 8.22367 13.9228 8.44557 14.2302C8.50931 14.3223 8.60209 14.3904 8.70909 14.4236C8.82235 14.4598 8.97877 14.4621 9.3124 14.2818C9.64603 14.1 10.0752 13.6246 10.1561 12.9165C10.21 12.2284 10.0251 11.632 9.77702 11.0048C9.69137 10.7911 9.59964 10.5799 9.50195 10.3715C9.33397 10.0532 9.5867 9.52467 10.1076 9.63948C10.8057 9.83596 12.5378 10.1018 13.5148 9.63948C14.0826 9.31047 14.2236 8.77958 13.9362 8.0476C13.8412 7.87979 13.7111 7.73445 13.5548 7.6215C13.4239 7.54291 13.168 7.20234 13.4755 6.81632C13.7806 6.32704 14.2267 5.33077 13.0979 4.70973C13.0192 4.66644 12.9534 4.60291 12.9073 4.52571C12.8613 4.44851 12.8366 4.36043 12.836 4.27054C12.8205 4.05942 12.8544 3.27658 12.2735 2.92677C12.1348 2.85203 11.9676 2.79039 11.8728 2.61086C11.8127 2.4922 11.7935 2.20403 11.7935 2.20403C11.7141 1.71706 11.6047 1.26246 10.4481 1.13224ZM2.81544 2.66171H1.53793V8.17627H2.81544V2.66171Z" fill="#FF0000" fillOpacity="0.89"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_1_179">
                                                                <rect width="15.4103" height="15.4103" fill="white" transform="translate(0.104004 0.0820312)"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>
                                        </span> {item.socialicons[2].count}
                                    </p>
                                </div>
                                <div className="btn-cont">
                                    <button className="bg-blue-950 px-7 py-2 rounded-sm text-white font-bold font-playfair">
                                        Read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </SlideRight> 
            )}

  </div>
   

      
        
              
        
                            {/* <div className="grid grid-cols-1 md:grid-cols-3  -gap-2">
                            <Slider {...settings}>
                    {news.map((item, index) => (
                     <div key={index} className="new-container w-80 my-16 ">
                    <div className="img-cont">
                        <img src={item.img} alt={item.alt} />
                    </div>
                    <div className="text-con font-san mt-5 ">
                        <h1 className='text-lg  font-bold my-3 '>{item.heading}</h1>
                        <p className='w-64  tracking-wide'></p>
                    </div>
                    <div className="like-cont flex my-4 text-xs gap-4">
                        <p>Date: 25/02/2023</p>
                        <p className='flex gap-2'>{item.socialicons[0]}
                         <span> 20 </span></p>

                        <p className='flex gap-2'>
                        {item.socialicons[1]}  <span> 20 </span>
                        </p>

                        <p className='flex gap-2'>
                        {item.socialicons[2]} <span> 20 </span>
                        </p>
                    </div>
                    <div className="btn-cont">

                        <button className='bg-blue-950 px-7 py-2 rounded-lg text-white font-bold font-playfair'>Read more</button>
                    </div>
                    </div>
                 ))}</Slider> 
               
               
                        </div> */}
                
             </div>
    
    </div>
   
  )
}

