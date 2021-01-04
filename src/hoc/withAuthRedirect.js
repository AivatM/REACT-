import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const widthAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }

  let mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectAuthRedirectComponent;
};
