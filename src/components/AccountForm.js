import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { callApi } from "../api";

const AccountForm = ({ setToken, setUser }) => {
  const params = useParams();
  let { method } = params;
  const title = method === "login" ? "Sign in" : "Register";
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, [method]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

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
        navigate(`/routines`); //todo make it so that once the user signs in, the Users' Routines will render up at the top first in a section that says My Routines before showing other public routines. Figure out a way to pagify it.
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.username);
      }
    } catch (error) {
      setErrMsg(error.message);
      console.log(error);
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>{title}</h1>

      <form className="account-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          required
          label="username"
          ref={userRef}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          label="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">{title}</button>
        <div>
          {method === "login" ? (
            <Link to={"/account/register"}>
              {" "}
              Not a member yet? Register Now!
            </Link>
          ) : (
            <Link to={"/account/login"}>
              {" "}
              Already have an account? Click here to log in!
            </Link>
          )}
        </div>
      </form>
    </section>
  );
};

export default AccountForm;
