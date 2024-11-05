import img5 from "../../assets/img5.png"
import "./Abaut.css"
import play from "../../assets/play.png"
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
      <img src={img5} alt="" className="about-img"/>
      <img src={play} alt=""className="play-icon" />
      </div>
      <div className="about-rigth">
<h3>Sobre Nosotros</h3>

<p className="about1">Somos estudiantes de la Escuela Profesional Secundaria N° 4 (EPS N° 4) de Olavarría, una institución dedicada a formar jóvenes con habilidades técnicas y prácticas para enfrentar los desafíos del mundo actual. En nuestra escuela, no solo adquirimos conocimientos en informática, tecnología y oficios, sino que también cultivamos valores como el trabajo en equipo, la solidaridad y el compromiso social.

Nuestro propósito es aprender, crecer y aportar a nuestra comunidad. A través de proyectos colaborativos, como el mantenimiento y reparación de equipos informáticos, buscamos devolver a la sociedad las herramientas que hemos recibido, ayudando a otros estudiantes a acceder a la tecnología y promoviendo una cultura de apoyo mutuo.

Invitamos a todos a conocer nuestras iniciativas y a acompañarnos en este camino de aprendizaje, servicio y crecimiento. ¡Juntos podemos hacer la diferencia!</p>

      </div>
    </div>
  )
}

export default About
