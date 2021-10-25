import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/admin/actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form>
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        ></input>
        <label for="password">Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        ></input>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
}
