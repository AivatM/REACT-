import React from "react";
import { Field, reduxForm } from "redux-form";
import "../Login.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form__body">
        <Field
          component="input"
          name="login"
          placeholder="Логин"
          className="form__input"
        />
        <Field
          component="input"
          name="password"
          placeholder="Пароль"
          className="form__input"
        />
        <div>
          <Field component="input" name="rememberMe" type="checkbox" />
          Запомнить пароль
        </div>
        <button className="form__btn">Зарегистрироваться</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export default LoginReduxForm;
