import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer";

class HeaderAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

const HeaderContainer = connect(mapStateToProps, {
  getAuthUserData,
})(HeaderAPIComponent);

export default HeaderContainer;
