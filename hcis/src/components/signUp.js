import SignUp from "./signUpLeft"
import "./onboardingNav.css"
import Icon1 from "../assets/icons/Button with centered icon.png";
import Icon2 from "../assets/icons/Button with centered icon (1).png";
import Icon3 from "../assets/icons/Button with centered icon (2).png";
import Icon4 from "../assets/icons/Button with centered icon (3).png";


const SignUpScreen = () => {
    return (
      <div className="signUpScreen">
        <SignUp />

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
 
export default SignUpScreen;