import clientimg from "../../../assets/img/images.jpg";
import './Hearclient.css'
import SlideLeft from "../../../components/slidescroll/SlideLeft"

export default function HearClient() {
  return (
    <div className="client-title  bg-blue-50 py-12 md:py-14" >
        <SlideLeft>
    <div className="client-title mb-5 text-center  md:ml-28">
        
        <h1  className="font-bold font-roboto md:mb-6 md:-mt-1 text-xl md:text-2xl">Hear Directly from Our Clients</h1>
                </div>      
        <div className="testimony  flex flex-col md:flex-row  items-center justify-center gap-5 md:gap-1 ">
         <div className="img-testimony  md:-mt-5 tracking-wider">
            <img src={clientimg} alt="client-img " className="w-36 h-36  md:w-32 md:h-32 border-2 border-white rounded-full " />
    </div>
    <div className="text-testimony ">
        <p className="px-12   md:tracking-wider md:px-12 font-roboto text-center md:text-left">Lorem ipsum dolor sit amet consectetur. Et sit nibh lectus in amet et. Suscipit aenean tristique sapien nascetur consectetur rutrum. Diam sed tortor nec mi mattis a arcu. Euismod pretium id libero elementum. Nam hendrerit sociis et sit.
    </p>
    <p className="font-bold  text-center"> -Ebruwuyo Samuel (RAGIINC)</p>
    </div>
        </div>
        </SlideLeft>
                    </div>
  )
}   
