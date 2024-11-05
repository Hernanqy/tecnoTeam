import "./Navbar.css"
import logo from "../../../public/imagenes/logo1.jpg"


const Navbar = () => {


  return (
    <nav className="conteiner">
      <img className="logo" src={logo} alt="" />
      <ul>
        <button className="btn"><a href="https://www.instagram.com/eps4_olavarria/">Contacto</a></button>
        </ul>
    </nav>
  )
}

export default Navbar
