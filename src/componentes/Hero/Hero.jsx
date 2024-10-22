import "./Hero.css";
import flecha from "../../assets/flecha.png";
const Hero = () => {
  return (
    <div className="hero1 container ">
      <div className="hero-text">
        <h1>Aplicando nuestro conocimiento en la comunidad.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          alias atque rem ratione quo, deleniti omnis, ea tempora sequi facere
          ab, illo maxime neque obcaecati repellendus aperiam dolorem velit
          illum!
        </p>
        <button className="btn">Conoce mas <img className="flecha" src={flecha} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
