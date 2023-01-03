import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../features/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

const navigate=useNavigate()
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormUser = { ...user };
    newFormUser[fieldName] = fieldValue;

    setUser(newFormUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(user));
    navigate("/cart")
    setUser({ ...user, username: "",  password: "" });
  };
  return (
    <div className="parent_div">
      <h4>Login </h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
       
        password:
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">
            Login
        </button>
      </form>
    </div>
  );
};

export default Login;


