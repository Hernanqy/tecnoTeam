import Navbar from "./componentes/Navbar/Navbar"
import Hero from "./componentes/Hero/Hero"
import Programs from "./componentes/Programs/Programs"
import Campus from "./componentes/Campus/Campus"
import Footer from "./componentes/Footer/Footer"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      
       <Programs/> 
       
       
       <Campus/>
      
       <Footer/>
     
       
      </div>
      
    </div>
  )
}

export default App
