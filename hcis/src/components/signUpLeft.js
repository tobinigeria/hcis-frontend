import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Image4 from "../images/Rectangle 6.png"
import Image5 from "../images/Rectangle 7.png";
import Image6 from "../images/Rectangle 9.png";

import "./onboardingNav.css"


const SignUp = () => {
    return (
      <div className="signup">
        <div className="Left">
          <div className="top">
            <img className="img5" src={Image5} alt="" />
            <img className="img4" src={Image4} alt="" />
            <img className="img6" src={Image6} alt="" />
          </div>

          <div className="bottom">
            <h2 className="inter-bold">
              Upskill, certify, and stay ahead in healthcare innovation.
            </h2>
            <p className="inter-regular">
              Your hub for healthcare learning, professional growth, and
              certification.
            </p>
          </div>
        </div>
       
      </div>
    );
}
 
export default SignUp;