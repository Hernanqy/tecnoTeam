import "./Programs.css";
import program_1 from "../../assets/capacitacion.jpeg";
import program_2 from "../../assets/diagnostico.jpeg";
import program_3 from "../../assets/desarme.jpeg";
import program_4 from "../../assets/chipeo.jpeg";
import program_5 from "../../assets/rearmado.jpeg";
import program_6 from "../../assets/equipo.jpeg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program1">
        <p>Capacitacion</p>
        <img src={program_1} alt="" />
      </div>

      <div className="program1">
        <p>Diagnostico</p>
        <img src={program_2} alt="" />
        <div className="caption"></div>
      </div>

      <div className="program1">
        <p>Desarme</p>
        <img src={program_3} alt="" />
        <div className="caption"></div>
      </div>
      <div className="program1">
        <p>Chipeo</p>
        <img src={program_4} alt="" />
        <div className="caption"></div>
      </div>
      <div className="program1">
        <p>Rearmado</p>
        <img src={program_5} alt="" />
        <div className="caption"></div>
      </div>
      <div className="program1">
        <p>Formateo y test</p>
        <img src={program_6} alt="" />
        <div className="caption"></div>
      </div>
    </div>
  );
};

export default Programs;
