import "./Programs.css";
import program_1 from "../../assets/NIVEL I.jpg";
import program_2 from "../../assets/NIVEL 2.jpg";
import program_3 from "../../assets/NIVEL 3.jpg";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const Programs = () => {
  return (

    <div className="programs">

      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={icon1} alt="" />
          <p>Nivel 1</p>
        </div>
        </div>

        <div className="program">
        <img src={program_2} alt="" />
          <div className="caption">
            <img src={icon2} alt="" />
            <p>Nivel 2</p>
          </div>
        </div>

        <div className="program">
        <img src={program_3} alt="" />
          <div className="caption">
            <img src={icon3} alt="" />
            <p>Nivel 3</p>
          </div>
        </div>
      </div>
    
  );
};

export default Programs;
