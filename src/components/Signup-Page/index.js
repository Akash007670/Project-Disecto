import React from "react";
import Styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={Styles["signup-wrapper"]}>
      <div className={Styles["sign-up"]}>
        <div className={Styles["title"]}>
          <h1>Sign In Page</h1>
        </div>
        <div className={Styles["userdata-wrapper"]}>
          <div className={Styles["username-wrapper"]}>
            <input
              className={Styles["input"]}
              type="text"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className={Styles["password-wrapper"]}>
            <input
              className={Styles["input"]}
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className={Styles["remember-wrapper"]}>
            <label>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
          </div>
          <div className={Styles["submit-wrapper"]}>
            <button className={Styles["submit-btn"]} type="submit">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
