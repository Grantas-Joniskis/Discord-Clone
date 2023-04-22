import React, { useState, useEffect } from 'react';
import AxiosService from 'services/axios/axios-service';
import ListUserProps from 'types/chat/list-user';
import UserListCard from './user-list-card';

const UserList = () => {
  const [userList, setUserList] = useState<ListUserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await AxiosService.getUsers();
      setUserList(users.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {userList.map((user) => (
        <UserListCard key={user.id} listUser={user} />
      ))}
    </div>
  );
};

export default UserList;
