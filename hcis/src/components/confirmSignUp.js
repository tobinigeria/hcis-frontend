import SignUp from "./signUpLeft"
import "./onboardingNav.css"

const ConfirmSIgnUp = () => {
    return (
      <div className="confirm">
        <SignUp />

        <div className="check">
          <h2 className="inter-bold">Check your inbox</h2>
          <p className="inter-medium">
            Enter the 6-digit code we sent to{" "}
            <span className="inter-bold">JohnFavor@Gmail.com</span> to finish
            your sign up.
          </p>

          <form action="">
            <input
              type=""
              name="number"
              id="number"
              className="inter-regular"
              placeholder="6-digit code"
            />

            <div>
              <button type="button" className="inter-medium">
                Sign Up
              </button>

              <p className="inter-regular">
                Didn’t receive the code? <span className="inter-semibold">Resend code in 25</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default ConfirmSIgnUp;