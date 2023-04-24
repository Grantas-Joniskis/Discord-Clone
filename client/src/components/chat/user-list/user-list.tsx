import React, { useState, useEffect } from 'react';
import AxiosService from 'services/axios-service';
import UserListProps from 'types/chat/user-list';
import UserListCard from './user-list-card';
import UserManager from '../../../user/UserManager';

const UserList: React.FC<UserListProps> = ({
  setCardClicked,
}) => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await AxiosService.getUsers();
      UserManager.fromAxiosResponse(users.data);
      setUserList(users.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {userList.map((user) => (
        <UserListCard key={user.id} user={user} setCardClicked={setCardClicked} />
      ))}
    </div>
  );
};

export default UserList;
