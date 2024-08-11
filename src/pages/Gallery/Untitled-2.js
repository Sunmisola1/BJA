// src/InfoPage.js
import React, { useState } from 'react';
import Info1 from './Info1';
import Info2 from './Info2';
import Info3 from './Info3';

const InfoPage = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-100 p-4 flex flex-col space-y-4">
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info1')}
        >
          Info 1
        </div>
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info2')}
        >
          Info 2
        </div>
        <div
          className="p-4 rounded-full bg-blue-500 text-white text-center cursor-pointer hover:bg-blue-700 transition duration-300"
          onClick={() => handleClick('info3')}
        >
          Info 3
        </div>
      </div>
      <div className="w-3/4 p-4">
        {selectedInfo === 'info1' && <Info1 />}
        {selectedInfo === 'info2' && <Info2 />}
        {selectedInfo === 'info3' && <Info3 />}
        {!selectedInfo && <p>Select an item to see information.</p>}
      </div>
    </div>
  );
};

export default InfoPage;
import Pictures from "../../assets/img/images.jpg"
import "./Gallery.css"

export default function Gallery() {
  const galleries = [
              {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter, and most effective agribusiness solution that works.'
              }, {
                image:Pictures,
                alt:"picture 1",
                text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter, and most effective agribusiness solution that works.'
               }
              //{
              //   image:Pictures,
              //   alt:"picture 1",
              //   text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter, and most effective agribusiness solution that works.'
              // }
              // , {
              //   image:Pictures,
              //   alt:"picture 1",
              //   text:'We have much planned for the future, working with great minds and organizations to   create a better, smarter, and most effective agribusiness solution that works.'
              // }
  ]
  return (
    <div className="gallery-wrap">
      <div className="teams font-roboto bg-blue-50">
    <div className="hero bg-black h-80 w-full text-yellow-300 flex items-center justify-center"> 
      <h1 className='text-2xl'>Meet Our Team</h1> 
      </div>
      <div className='p-section md:flex item-center justify-center py-16'>
          <p className='text-lg tracking-wider text-center font-semibold'>We have much planned for the future, working with great minds and organizations to <br/>    create a better, smarter, and most effective agribusiness solution that works.</p>
      </div>
      {/* gallery */}
      <div className="grid md:grid-cols-2">
     {galleries.map((gallery,index) => (
       <div key ={index}  className="gallery_wrap flex flex-col items-center">
      <div className="img_wrap bg-blue-950 self-end">
            <img src={gallery.image} alt={gallery.alt} className="w-full h-full p-6  bg-blue-950" />
          </div>
        <div className="text-wrap w-1/2">
      <p>{gallery.text}</p>
      </div>
    </div>
    
  ))}
      
      </div>
      </div>
      </div>
     
  

  )}