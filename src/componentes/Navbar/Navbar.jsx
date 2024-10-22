import "./Navbar.css"
import logo from "../../../public/imagenes/logo1.jpg"


const Navbar = () => {


  return (
    <nav className="conteiner">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li> Sobre Nosotros</li>
        <li>Nuestra Formacion</li>
        <li>Nuestros Trabajos</li>
        <li>¿Que es la EPS?</li>
        <li><button className="btn">Contacto</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
