import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div className="profile-status">
        {!this.state.editMode && (
          <div
            onDoubleClick={this.activateEditMode}
            className="profile-status__presetation"
          >
            {this.props.status}
          </div>
        )}
        {this.state.editMode && (
          <input
            autoFocus
            onBlur={this.deactivateEditMode}
            value={this.props.status}
            className="profile-status__change"
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
