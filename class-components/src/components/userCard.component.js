import React from "react";


class UserCard extends React.Component {
  render() {
    const { avatar, name, email } = this.props;

    return (
      <div className="user-card">
        <h1>User CARD</h1>
        <div className="user-card__info">
          <div className="user-card__name">{name}</div>
          <div className="user-card__email">{email}</div>
        </div>
      </div>
    )

  }
}
export default UserCard;