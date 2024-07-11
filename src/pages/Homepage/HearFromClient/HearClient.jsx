import clientimg from "../../../assets/img/images.jpg";
import './Hearclient.css'
import SlideLeft from "../../../components/slidescroll/SlideLeft"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HearClient() {
  const settings = {
       dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable auto-scroll
    autoplaySpeed: 2000,    // Time between each auto-scroll (in milliseconds)
    pauseOnHover: true ,    // Pause auto-scroll on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const Testimony = [
    { name:' -Ebruwuyo Samuel (RAGIINC)',
        images: clientimg
      ,description:"Lorem ipsum dolor sit amet consectetur. Et sit nibh lectus in amet et.Suscipit aenean tristique sapien nascetur consectetur rutrum. Diam sed tortor nec mi mattis a arcu.Euismod pretium id libero elementum. Nam hendrerit sociis et sit.",alt:"", 
    },
    { name:' -Ebruwuyo Samuel (RAGIINC)',
      images: clientimg
    ,description:"Lorem ipsum dolor sit amet consectetur. Et sit nibh lectus in amet et.Suscipit aenean tristique sapien nascetur consectetur rutrum. Diam sed tortor nec mi mattis a arcu.Euismod pretium id libero elementum. Nam hendrerit sociis et sit.",alt:"", 
  },
  { name:' -Ebruwuyo Samuel (RAGIINC)',
    images: clientimg
  ,description:"Lorem ipsum dolor sit amet consectetur. Et sit nibh lectus in amet et.Suscipit aenean tristique sapien nascetur consectetur rutrum. Diam sed tortor nec mi mattis a arcu.Euismod pretium id libero elementum. Nam hendrerit sociis et sit.",alt:"", 
},

    
  ];
  return (
    <div className="client-title  bg-blue-50 py-12 md:py-14" >
        <SlideLeft>    
    <div className="client-title mb-5 text-center  md:ml-24">
      
                <h1  className="font-bold font-roboto md:mb-6 md:-mt-1 text-xl md:text-2xl">Hear Directly from Our Clients</h1>
                </div>  
                <Slider {...settings}>
                    {Testimony.map((item, index) => (
                      <div key={index} className=" overflow-hidden py-6 mx-auto">
            <div className="testimony  flex flex-col md:flex-row  items-center justify-center gap-5 md:gap-1 ">
         <div className="img-testimony  md:-mt-5 tracking-wider">
            <img src={item.images} alt="client-img " className="w-36 h-36  md:w-32 md:h-32 border-2 border-white rounded-full " />
    </div>
    <div className="text-testimony ">
        <p className="px-12  md:tracking-wider md:px-12 font-roboto text-center md:text-left">
         {item.description}
    </p>
    <p className="font-bold  text-center md:text-left md:ml-12">{item.name} </p>
    </div>
        </div>
                           
                       
                        </div>
                    ))}
                </Slider>



                </SlideLeft>
                    </div>
  )
}   
