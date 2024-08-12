import board from '../../assets/img/images.jpg'
export default function Teams() {
  return (
    <div className="lteams  font-roboto bg-blue-50 overflow-hidden ">
      <div className="heros bg-black h-80 w-full text-yellow-300 flex items-center justify-center"> 
        <h1 className='text-2xl'>Meet Our Team</h1> 
        </div>
        <div className='p-section hidden md:flex item-center justify-center py-14'>
            <p className='text-lg '>We have much planned for the future, working with great minds and organizations to <br/>    create a better, smarter, and most effective agribusiness solution that works.</p>
        </div>
        {/* board of directors */}
        <div className='section-wraps mb-8 flex flex-col items-center justify-center p-6'>
          <div className="text-wrap mb-14 mt-8 md:mt-0">
              <h2 className="text-center font-bold text-2xl">Board of Director </h2>
          </div>
     
           <div className="board-wraps flex-col flex md:flex-row items-center justify-center gap-14 md:gap-7 ">
           
            <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base  ">Know more</button>
             </div>
            </div>
            {/* board 2 */}
            <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
          {/* board 3 */}
          <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
            {/* board 4 */}
            <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
           </div>
          </div>
          {/* our team */}
          <div className='teams-wraps pb-6 flex flex-col items-center justify-center'>
          <div className="text-wraps mt-28 mb-14">
              <h2 className="text-center font-bold text-2xl">Our Teams</h2>
          </div>
          <div className="team-wraps block gap-5">
     {/* first row */}
           <div className="board-wraps flex-col flex md:flex-row items-center justify-center gap-14 md:gap-10 mb-16 ">
           
            <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base  ">Know more</button>
             </div>
            </div>
            {/* board 2 */}
            <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
          {/* board 3 */}
          <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
            {/* board 4 */}
            <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
           </div>
           {/* second row */}
           <div className="board-wraps flex-col flex md:flex-row items-center justify-center gap-14 md:gap-10">
           
            <div className="board-items h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base  ">Know more</button>
             </div>
            </div>
            {/* board 2 */}
            <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
          {/* board 3 */}
          <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="booard picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
            {/* board 4 */}
            <div className="board-item h-96 w-64 bg-blue-950 flex flex-col  items-center rounded-sm">
              <div className="board-item-wrap p-3">
                <div className="board-img ">
                 <img src={board} alt="board picture" className="w-72 h-56 "/>
              </div>
              </div>
              
             <div className="board-text">
              <h3 className="text-white text-xl text-center my-2">Justice Nna</h3>
              <p className="text-yellow-300 -my-1 text-sm">Chief Executive Office</p>
             </div>
             <div className="bg-white px-5 py-1 mt-5 rounded-sm">
              <button className="text-blue-950 text-base ">Know more</button>
             </div>
            </div>
           </div>
          </div>
          </div>
        
    </div>
  )
}
