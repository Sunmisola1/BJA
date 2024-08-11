import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
// import About from './pages/About/About'
import Homepage from './pages/Homepage/Homepage'
// import TheCompany from "./pages/TheCompany/TheCompany";
import Teams from "./pages/Teams/Teams";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
function App() {

  return (
    <Router>
    <div>
  
    <Navbar />
   
    <Routes>
      <Route path="/" element={ <Homepage/>}/>
   {/* <Route path="/TheCompany" element={ <TheCompany/>}/> */}
   <Route path="/gallery" element={ <Gallery/>}/>
   <Route path="/Blog" element={ <Blog/>}/>
   <Route path="/teams" element={  <Teams />}/>
   <Route path="/Contact" element={  <Contact />}/>
   </Routes>
  <Footer/>
    </div>
    </Router>
  )
}

export default App
