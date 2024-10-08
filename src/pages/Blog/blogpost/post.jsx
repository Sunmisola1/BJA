import box from '../../../assets/img/images.jpg';
import { useState } from 'react';
import SlideRight from '../../../components/slidescroll/Slideup';
import { FaSearch } from 'react-icons/fa';


export default function  Blogpost () {
    const initialNews = [
        {
            img: box,
            alt: "Image 1",
            heading: "Lorem ipsum dolor sit amet consectetur. Rhoncus nullam nulla.",
            paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis.integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
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
            heading: "Lorem ipsum dolor sit amet consectetur. Rhoncus nullam nulla.",
            paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis.integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
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
            paragraph: "Lorem ipsum dolor sit amet consectetur. Eget aliquam nibh malesuada nibh ante mattis.integer sit velit ultrices venenatis ultrices blandit leo. Sit nulla qu",
            socialicons: [
                { icon: "like", count: 25 },
                { icon: "message", count: 8 },
                { icon: "dislike", count: 2 }
            ],
    
            date:"21-10-2002"
           
        },
    ];
    
       const [news, setNews] = useState(initialNews);
    
      
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
    
 
    
  return (
            <div className="py-10 md:py-20 bg-blue-50  overflow-hidden">
           <div className="see-more-area flex justify-center relative mt-5   mb-14"> 
                        <FaSearch className='relative left-10 top-3 text-blue-950'/> 
                        <span className='relative left-12 top-0 text-2xl text-gray-400'>|</span>
        <input type="text" placeholder="Enter a phrase to use the search engine" className=' md:placeholder:text-xs placeholder:text-center  h-10 md:w-1/3 px-14 md:px-20 border-2 border-black rounded-full' />

            </div>
               
                <div className="lcontainer flex flex-col items-center justify-center ">
                           <SlideRight>
                <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-2 lg:grid-cols-3 ">
                    {news.map((item, index) => (
                        <div key={index} className="p-4">
                            
                            <div className="new-container w-80  md:p-0 ">
                                <div className="img-cont">
                                    <img src={item.img} alt={item.alt} className="w-full h-48  md:h-60 object-cover "/>
                                </div>
                                <div className="text-con  mt-5 font-roboto">
                                    <h1 className="text-lg tracking-wider font-bold my-3">{item.heading}</h1>
                                    <p className="tracking-wider text-justify">{item.paragraph}</p>
                                </div>
                                <div className="like-cont flex my-4 text-sm gap-7 "> 
                                <p className="flex gap-2">
                                <span className='tracking-wider'> Date:</span>{item.date}
                                        </p> 
                                    <p className="flex gap-2 tracking-wider" onClick={() => handleIconClick(index, 0)}>
                                        <span role="img" aria-label="like">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59379 10.7872H10.1348V8.47564H12.4464V6.93461H10.1348V4.62307H8.59379V6.93461H6.28226V8.47564H8.59379V10.7872ZM1.65918 16.9513V1.54102H17.0694V13.8692H4.74123L1.65918 16.9513ZM3.20021 13.2336L4.10556 12.3282H15.5284V3.08205H3.20021V13.2336ZM3.20021 13.2336V3.08205V12.3282V13.2336Z" fill="#2E7D32"/>
</svg>
</span> {item.socialicons[0].count}
                                    </p>
                                    <p className="flex gap-2 tracking-wider" onClick={() => handleIconClick(index, 1)}>
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
                                    <p className="flex gap-2  tracking-wider" onClick={() => handleIconClick(index, 2)}>
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
                                    <button className="bg-blue-950 px-20 py-4 rounded-sm text-white font-bold font-playfair">
                                        Read more
                                    </button>
                                </div>
                                     </div>
                                    
                      
                        </div>
                    ))}
                
                
                </div>


                </SlideRight> 

               
          
  </div>
   

      
        
              
        
      

    </div>
                           
  

                


  )
}