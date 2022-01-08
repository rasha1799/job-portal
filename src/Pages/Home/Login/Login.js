import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    signInUsingEmailAndPassword,
    setIsLoading,
    setUser,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    signInUsingEmailAndPassword(email, password)
      .then((result) => {
        setIsLoading(true);
        setUser(result.user);

        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => history.push(redirect_uri))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-form mb-5">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            onBlur={handleEmailChange}
            type="email"
            name=""
            id=""
            placeholder="Your Email"
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            placeholder="password"
            name=""
            id=""
          />
          <br />
          <br />
          <input type="submit" value="Submit" style={{ width: "15%" }} />
        </form>
        <p>
          new ? <Link to="/register">Create Account</Link>
        </p>
        <div>-------or----------</div>
        <button className="btn-regular" onClick={handleGoogleLogin}>
          <FontAwesomeIcon className="fa font" icon={faGoogle} />
          Google Sign In
        </button>
      </div>
      <div>
        <div className="row mx-5 mb-3 text-danger">{error}</div>
      </div>
    </div>
  );
};

export default Login;
