import Navbar from "./componentes/Navbar/Navbar"
import Hero from "./componentes/Hero/Hero"
import Programs from "./componentes/Programs/Programs"
import Title from "./componentes/Title/Title"
import About from "./componentes/About/About"
import Campus from "./componentes/Campus/Campus"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
       <Title/>
       <Programs/> 
       <About/>
       <Title/>
       <Campus/>
       <Title/>
       
      </div>
      
    </div>
  )
}

export default App
