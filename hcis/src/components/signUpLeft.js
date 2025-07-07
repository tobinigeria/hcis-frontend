import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Image4 from "../images/Rectangle 6.png"
import Image5 from "../images/Rectangle 7.png";
import Image6 from "../images/Rectangle 9.png";
import Icon1 from "../assets/icons/Button with centered icon.png"
import Icon2 from "../assets/icons/Button with centered icon (1).png";
import Icon3 from "../assets/icons/Button with centered icon (2).png";
import Icon4 from "../assets/icons/Button with centered icon (3).png";
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

        {/* ------------------------------------------------------------- */}
        <div className="Right">
          <h2 className="inter-bold">Sign up</h2>

          <form action="">
            <div className="myEmail">
              <label for="email" className="email inter-regular">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="firstname"
                className="inter-regular"
                placeholder="example@gmail.com"
              ></input>
            </div>

            <div className="names">
              <div className="myName">
                <label for="fname" className="inter-regular">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  className="inter-regular"
                  placeholder="Enter first name"
                ></input>
              </div>

              <div className="myName">
                <label for="lname" className="inter-regular">
                  Last Name
                </label>
                <input
                  type="lname"
                  id="lname"
                  name="firstname"
                  placeholder="Enter last name"
                  className="inter-regular"
                ></input>
              </div>
            </div>

            <div className="myEmail">
              <label for="password" className="email inter-regular">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="inter-regular"
                placeholder="Enter password"
              ></input>
            </div>

            <button type="button" className="inter-medium">
              Sign Up
            </button>
          </form>

          <div className="Or">
            <p>OR</p>
          </div>

          <div className="socialIcons">
            <img src={Icon1} alt="" />
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            <img src={Icon4} alt="" />
          </div>

          <p className="AlreadySigned inter-regular">
            Already have an account?{" "}
            <span className="inter-semibold">
              <a href="#">Sign in</a>
            </span>
          </p>

          <p className="terms inter-regular">
            By signing up, you agree to our{" "}
            <span>
              <a href="#">Terms and conditions</a>
            </span>
          </p>
        </div>
      </div>
    );
}
 
export default SignUp;