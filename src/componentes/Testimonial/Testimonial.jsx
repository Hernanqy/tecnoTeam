import "./Testimonial.css"

import user1 from "../../assets/galeria5.jpg";
import user2 from "../../assets/galeria2.jpg";
import user3 from "../../assets/galeria3.jpg";
import user4 from "../../assets/galeria6.jpg";

const Testimonial = () => {

 
 
    return (
    <div className="testimonials">
             <div className="slider">
        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                    
                    <div>
                        <h3>Yago Gonsalez</h3>
                        <span>Estudiante, EPS Informatica</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ut laudantium magnam eligendi earum explicabo omnis odio maiores error officiis harum adipisci quaerat asperiores doloremque nemo, sequi natus rem unde?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                    
                    <div>
                        <h3>Yago Gonsalez</h3>
                        <span>Estudiante, EPS Informatica</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ut laudantium magnam eligendi earum explicabo omnis odio maiores error officiis harum adipisci quaerat asperiores doloremque nemo, sequi natus rem unde?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                    
                    <div>
                        <h3>Yago Gonsalez</h3>
                        <span>Estudiante, EPS Informatica</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ut laudantium magnam eligendi earum explicabo omnis odio maiores error officiis harum adipisci quaerat asperiores doloremque nemo, sequi natus rem unde?</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                    
                    <div>
                        <h3>Yago Gonsalez</h3>
                        <span>Estudiante, EPS Informatica</span>
                    </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ut laudantium magnam eligendi earum explicabo omnis odio maiores error officiis harum adipisci quaerat asperiores doloremque nemo, sequi natus rem unde?</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonial