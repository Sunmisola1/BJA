import Project from "./Project/Project";

export default function Contact() {
  return (
    <div className="contact-wraps bg-blue-50">
      <div className="hero bg-black h-72 md:h-80 w-full text-yellow-300 flex items-center justify-center"> 
      <h1 className='text-2xl'>Contact</h1> 
      </div>
      <div className="contact-section mx-20 mt-16 ">
       <Project />
   <hr className=" bg-gray-100"/>
    <div className="office-address">
      <h2>Office Address nation-wide</h2>
      <div>
        <table>
          <thead>
          <tr>
            <th>State</th>
            <th>Location</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abuja </td>
              <td> Suit 17/18 Mangal Plaza, Dodoma str. Wuse zone1 Abuja Nigeria.</td>
            </tr>
            <tr>
              <td>Kano </td>
              <td>______________________________________ </td>
            </tr>
            <tr>
              <td>Delta</td>
              <td>________________________________________</td>
            </tr>
          </tbody>

        </table>
      </div>
      </div>      
      
      </div>
      </div>
  )
}
