import React from 'react';
import './user-list-style.css';
import UserListCardProps from 'types/chat/list-user-card';
import handleUserListCardClick from 'events/user-list-card-event';
import defaultDiscordPfp from '../../../images/discord-default-pfp.jpg';

const UserListCard: React.FC<UserListCardProps> = ({
  user,
  setCardClicked,
}) => (
  <div className="d-flex align-items-center mb-2 p-1 user-list-card" onClick={() => handleUserListCardClick(user, setCardClicked)}>
    <img className="rounded-circle list-user-pfp me-2" src={defaultDiscordPfp} alt="default discord logo" />
    <p className="text-dark mb-0">{user.username}</p>
  </div>
);

export default UserListCard;
