import "./Navbar.css"
import logo from "../../../public/imagenes/logo1.jpg"


const Navbar = () => {


  return (
    <nav className="conteiner">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>¿Que es la E.P.S N° 4</li>
        <li>Nuestra Formacion</li>
        <li>Nuestros Trabajos</li>
       
        <li><button className="btn"><a href="">Contacto</a></button></li>
        </ul>
    </nav>
  )
}

export default Navbar
