import React from "react";
import "./ProfileStatus.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  };

  render() {
    return (
      <div className="profile-status">
        <div className="profile-status__header">Статус</div>
        {!this.state.editMode && (
          <div
            onDoubleClick={this.activateEditMode}
            className="profile-status__presetation"
          >
            {this.props.status || "Нет статуса"}
          </div>
        )}
        {this.state.editMode && (
          <input
            onChange={this.onStatusChange}
            autoFocus
            onBlur={this.deactivateEditMode}
            value={this.state.status}
            className="profile-status__change"
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;
