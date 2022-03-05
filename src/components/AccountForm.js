import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { callApi } from "../api";
import useAuth from "../hooks/useAuth";
import "./AccountForm.css";

const AccountForm = () => {
  const params = useParams();
  let { method } = params;
  const title = method === "login" ? "Log In" : "Register";
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { setAuth } = useAuth();

  useEffect(() => {
    userRef.current.focus();
    setUsername("");
    setPassword("");
  }, [method]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, method]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await callApi({
        url: `/users/${method}`,
        method: "post",
        body: {
          username,
          password,
        },
      });

      if (user) {
        setUsername("");
        setPassword("");
        setAuth({ user: user.username, token: token });
        navigate(`/myroutines/${user.username}`);
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.username);
      }
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <div className="account-form-container">
      <section className="account-form">
        <div className="account-form-content">
          <div className="account-form-header">{title}</div>

          <form onSubmit={handleSubmit}>
            <div className="account-form-input">
              <div className="account-form-username-container">
                <div className="account-form-username">
                  <label
                    htmlFor="username"
                    className="account-form-username-label"
                  >
                    Username:
                  </label>
                  <input
                    className="account-form-username-input"
                    required
                    label="username"
                    ref={userRef}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="account-form-password-container">
                <div className="account-form-password">
                  <label
                    htmlFor="password"
                    className="account-form-password-label"
                  >
                    Password:
                  </label>
                  <input
                    className="account-form-password-input"
                    required
                    label="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div className="err-msg">
                    <p
                      ref={errRef}
                      className={errMsg ? "errmsg" : "offscreen"}
                      aria-live="assertive"
                    >
                      {errMsg}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="account-form-button" type="submit">
              {title}
            </button>
            <div className="account-form-additional">
              {method === "login" ? (
                <div>
                  Not a member yet?
                  <Link className="account-form-path" to={"/account/register"}>
                    {" "}
                    Register Now
                  </Link>
                </div>
              ) : (
                <div>
                  Already have an account?{" "}
                  <Link className="account-form-path" to={"/account/login"}>
                    {" "}
                    Log in
                  </Link>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AccountForm;
