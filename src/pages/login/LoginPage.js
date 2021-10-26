import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logOut } from "../../store/admin/actions";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    dispatch(login(email, password, redirectDashboard));
    setEmail("");
    setPassword("");
  }

  function redirectDashboard() {
    history.push("/admin");
  }

  function logOutFunction(event) {
    event.preventDefault();
    dispatch(logOut());
  }
  return (
    <div className="body">
      <form className="login-form">
        <label for="email">Email</label>
        <input
          className="input-login"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        ></input>
        <label for="password">Password</label>
        <input
          className="input-login"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        ></input>
        <button className="btn-login" type="submit" onClick={submitForm}>
          Login
        </button>
        <button className="btn-login" type="submit" onClick={logOutFunction}>
          Logout
        </button>
      </form>
    </div>
  );
}
