import "./Campus.css"
import gallery1 from "../../assets/galeria6.jpg"
import gallery2 from "../../assets/galeria5.jpg"
import gallery3 from "../../assets/galeria3.jpg"
import gallery4 from "../../assets/galeria4.jpg"
import flecha1 from "../../assets/flecha.png"
const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />

        </div>
        <button className="btn">Ver mas aca <img src={flecha1} alt="" /></button>

    </div>
  )
}

export default Campus