import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import   { registerUser } from "../features/authSlice";
import { loadUser } from "../features/authSlice";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
    const dispatch = useDispatch();
const auth=useSelector(state=>state.auth)

  useEffect(() => {
    if(!auth.username){
    dispatch(loadUser())
    }
  }, [auth.username,dispatch])
  
  const navigate=useNavigate()
  const handleChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormUser = { ...user };
    newFormUser[fieldName] = fieldValue;

    setUser(newFormUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));

    setUser({ ...user, username: "", email: "", password: "" });
     navigate("/cart")
 
  };
  return (
    <div className="parent_div">
      <h4>Register </h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        username:
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        email:
        <input
          type="email"
          name="email"
          value={user.email}
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
            Register
        </button>
      </form>
    </div>
  );
};

export default Register;
