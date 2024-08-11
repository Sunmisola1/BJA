import board from '../../assets/img/images.jpg'
export default function Teams() {
  return (
    <div className="teams  font-roboto bg-blue-50">
      <div className="hero bg-black h-80 w-full text-yellow-300 flex items-center justify-center"> 
        <h1 className='text-2xl'>Meet Our Team</h1> 
        </div>
        <div className='p-section md:flex item-center justify-center py-16'>
            <p className='text-lg '>We have much planned for the future, working with great minds and organizations to <br/>    create a better, smarter, and most effective agribusiness solution that works.</p>
        </div>
        {/* board of directors */}
        <div className='section-wraps mb-10'>
          <div className="text-wrap mb-14">
              <h2 className="text-center font-bold text-2xl">Board of Director </h2>
          </div>
     
           <div className="board-wraps flex items-center justify-center gap-20 ">
           
            <div className="board-items h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
          <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
          <div className='teams-wraps pb-6'>
          <div className="text-wrap mt-28 mb-14">
              <h2 className="text-center font-bold text-2xl">Our Teams</h2>
          </div>
          <div className="team-wrap block gap-5">
     {/* first row */}
           <div className="board-wraps flex items-center justify-center gap-20 mb-16 ">
           
            <div className="board-items h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
          <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
           <div className="board-wraps flex items-center justify-center gap-20 ">
           
            <div className="board-items h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
          <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
            <div className="board-item h-96 w-72 bg-blue-950 flex flex-col  items-center rounded-sm">
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
