import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions";

function Login(props) {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidValid, setInValid] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const userNameMatch = "hruday@gmail.com";
  const passwordMatch = "hruday123";

  const submit = () => {
    try {
      setSubmitted(true);
      if (userName && password) {
        if (userName == userNameMatch && password == passwordMatch) {
          props.login({
            userName: userName,
          });
          localStorage.setItem("user", JSON.stringify({ userName: userName }));
          history.push("/dashboard");
        } else {
          console.log("name");
          setInValid(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-app">
      <h1 className="text-center">User Login </h1>

      <div className="row mb-3 ">
        <label id="validationServer01" className={`form-label `}>
          Username:
        </label>
        <input
          className={`form-control ${
            isSubmitted && !userName ? "is-invalid" : ""
          }`}
          placeholder="Enter user name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        {isSubmitted && !userName ? (
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Please enter username.
          </div>
        ) : null}
      </div>
      <div className="row mb-3 ">
        <label className="form-label">Password:</label>
        <input
          className={`form-control ${
            isSubmitted && !password ? "is-invalid" : ""
          }`}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {isSubmitted && !password ? (
          <div
            id="validationServerUsernameFeedback"
            className="invalid-feedback"
          >
            Please enter password.
          </div>
        ) : null}
      </div>

      <div className=" mb-3 ">
        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={() => submit()}
        >
          Submit
        </button>
      </div>
      {isSubmitted && isInvalidValid && (
        <div style={{ color: "red" }}>Username or password is incorrect.</div>
      )}
    </div>
  );
}

const mapStateTpProp = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateTpProp, mapDispatchToProps)(Login);
