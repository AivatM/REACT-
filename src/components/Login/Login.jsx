import React from "react";
import "./Login.css";
import LoginReduxForm from "./LoginForm/LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className="login">
      <h3 className="login__header">Регистрация</h3>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
