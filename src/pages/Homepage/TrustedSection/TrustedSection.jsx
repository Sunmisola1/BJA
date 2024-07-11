import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideDown from '../../../components/slidescroll/SlideDown'
import box from '../../../assets/img/images.jpg';

const TrustedSection =()=> {
    const settings = {
       
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
              slidesToShow: 2,
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

  return (

      <div className="container mx-auto p-4"><SlideDown>
    <div className="trusted">
        <h1 className='text-center font-bold text-2xl transition mb-4'>Trusted By</h1>
    </div>
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index} className="p-4">
        <img src={image.src} alt={image.alt} className="w-full h-auto  shadow-lg" />
      </div>
    ))}
  </Slider>
</SlideDown>
</div>
  )
}

export default TrustedSection