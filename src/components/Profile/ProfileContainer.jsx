import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Redirect, withRouter } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { widthAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12282;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId); // Здесь должен быть в качестве параметра userId , но я поставил 2 чтобы был статус
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  widthAuthRedirect
)(ProfileAPIComponent);
