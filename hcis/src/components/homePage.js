import OnboardingNav from "./onboardingNav"
import Rectangle from "../images/Rectangle 5.png";
import Group10 from "../images/Group 10.png";
import Group7 from "../images/Group 7.png";
import Ellipse from "../images/Ellipse 2.png";
import "./onboardingNav.css"


const Home = () => {
    return (
      <div>
        <OnboardingNav />

        <div className="MyHome">
          <div className="MyImages">
            <div className="images">
              <div className="left">
                <img className="top" src={Rectangle} alt="" />
                <img className="bottom" src={Group7} alt="" />
              </div>

              <div className="right">
                <img src={Group10} alt="" className="ellipse" />
                <img src={Ellipse} alt="" className="ellipse2" />
              </div>
            </div>
          </div>

          <div className="rightPart">
            <h2 className="semibold">
              Learn without limits and spread knowledge.
            </h2>
            <p className="inter-regular">
              Your first step towards a fulfilling career in the healthcare
              field starts here!
            </p>

            <a href="http://www.google.com">Download Brochure</a>
          </div>
        </div>
      </div>
    );
}
 
export default Home;