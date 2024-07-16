
import Navbar from './Navbar.jsx'
import Slider from './Slider.jsx'
import About from './About.jsx'
import Characters from './Characters.jsx'
import History from './History.jsx'
import { useState } from 'react'
import GadgetGallery from './GadgetGallery.jsx'
import Footer from './Footer.jsx'




function App() {
// props drealing
const [state,setState]=useState("Hello..! I am Doraemon")

  return (
    <>
    <Navbar/>
    <Slider />
    <History />
    <Characters state={state}/>
    <About />
    <GadgetGallery />
    <Footer />
    
    
      
    </>
  );
}

export default App;
