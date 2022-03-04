import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { callApi } from "../api";
import "./AccountForm.css";

const AccountForm = ({ setToken, setUser }) => {
  const params = useParams();
  let { method } = params;
  const title = method === "login" ? "Log In" : "Register";
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

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
        setToken(token);
        setUser(user.username);
        navigate(`/routines/${user.username}`);
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.username);
      }
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  return (
    <div className='account-form-container'>
      <section className='account-form'>
        <div className='account-form-content'>
          <div className='account-form-header'>{title}</div>

          <form onSubmit={handleSubmit}>
            <label htmlFor='username' className='account-form-username'>
              Username:
            </label>
            <input
              required
              label='username'
              ref={userRef}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor='password' className='account-form-password'>
              Password:
            </label>
            <input
              required
              label='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className='err-msg'>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live='assertive'
              >
                {errMsg}
              </p>
            </div>
            <button className='account-form-button' type='submit'>
              {title}
            </button>
            <div>
              {method === "login" ? (
                <div>
                  Not a member yet?
                  <Link
                    className='log-in-path-to-register'
                    to={"/account/register"}
                  >
                    {" "}
                    Register Now!
                  </Link>
                </div>
              ) : (
                <Link to={"/account/login"}>
                  {" "}
                  Already have an account? Click here to log in!
                </Link>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AccountForm;
