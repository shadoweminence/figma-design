import React from "react";
import "../css/signUp.css";

export default function SignUpForm() {
  return (
    <div className="signUp">
      <h3>Sign up for news</h3>

      <div className="signUpDescription">
        <p>
          Keep up to date with the latest product launches and news. Find out
          more about our brands and get special promo codes.
        </p>
      </div>

      <div className="input">
        <input type="text" placeholder="Your e-mail address" />
      </div>

      <div>
        <button className="signupButton">Sign up for newsletter</button>
      </div>
      <div className="check">
        <input type="checkbox" name="personalData" />
        <label htmlFor="personalData">
          I accept <span className="blue">the personal data management</span>{" "}
        </label>
      </div>
    </div>
  );
}
