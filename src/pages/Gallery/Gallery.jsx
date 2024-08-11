import Pictures from "../../assets/img/images.jpg"
import "./Gallery.css"

export default function Gallery() {
  const galleries = [
              {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter'
              }, {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter'},
              {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter'
              }
              , {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter'
              }
  ]
  return (
    <div className="gallery-wrap overflow-hidden">
      <div className="teams font-roboto bg-blue-50">
    <div className="hero bg-black h-72 md:h-80 w-full text-yellow-300 flex items-center justify-center"> 
      <h1 className='text-2xl'>Meet Our Team</h1> 
      </div>
      <div className='p-section md:w-200  m-auto p-10 md:py-14'>
          <p className=' text-sm  md:text-lg tracking-widest md:tracking-normal text-center font-semibold'>We have much planned for the future, working with great minds and organizations to    create a better, smarter, and most effective agribusiness solution that works.</p>
      </div>
      {/* gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-0 ">
     {galleries.map((gallery,index) => (
       <div key ={index}  className="gallery_wrap flex flex-col items-center my-5 ">
      <div className=" w-80 h-56  md:w-128 md:h-80 bg-blue-950 rounded-xl md:rounded-none">
            <img src={gallery.image} alt={gallery.alt} className="w-full h-full p-4 bg-blue-950 rounded-lg" />
          </div>
        <div className="md:text_wrap text-justify my-5 w-80 md:w-96 md:my-6 md:mx-9 text-sm md:text-lg ">
      <p className="tracking-wider md:tracking-normal">{gallery.text}</p>
      </div>
    </div>
    
  ))}
      
      </div>
      </div>
      </div>
     
  

  )}