import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";
import { widthAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12282;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withRouter,
  widthAuthRedirect
)(ProfileAPIComponent);
