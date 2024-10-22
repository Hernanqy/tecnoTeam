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
<h2>Nuestro viaje</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod soluta quos voluptates assumenda dolor, quidem vitae harum, aliquid voluptate, dicta sequi aperiam quis ipsam. Quidem aut nobis possimus ab nulla!</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad repellendus tenetur sequi non ea sint eos, maxime cupiditate velit, neque, cumque id quae dolorem architecto. Sunt assumenda qui at.</p>
      </div>
    </div>
  )
}

export default About
