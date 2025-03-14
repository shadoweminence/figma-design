import React, { useState } from "react";
import "../../css/Footer/newsletter.css";

export default function NewsLetter() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="signUp">
      <h3 className="newsletterH3">Sign up for news</h3>

      <div className="signUpDescription">
        <p>
          Keep up to date with the latest product launches and news. Find out
          more about our brands and get special promo codes.
        </p>
      </div>

      <div>
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Your e-mail address"
        />
      </div>

      <div>
        <button className="signupButton">Sign up for newsletter</button>
      </div>
      <div className="check">
        <input type="checkbox" name="personalData" className="blue" />
        <label htmlFor="personalData">
          I accept <span className="blue">the personal data management</span>{" "}
        </label>
      </div>
    </div>
  );
}
