import React from 'react';
import './user-list-style.css';
import UserListCardProps from 'types/chat/list-user-card';
import defaultDiscordPfp from '../../../images/discord-default-pfp.jpg';

const UserListCard: React.FC<UserListCardProps> = ({
  listUser,
}) => {
  console.log(listUser);
  return (
    <div>
      <img className="rounded-circle list-user-pfp" src={defaultDiscordPfp} alt="default discord logo" />
      <br />
      <p className="text-dark">{listUser.username}</p>
    </div>
  );
};

export default UserListCard;
