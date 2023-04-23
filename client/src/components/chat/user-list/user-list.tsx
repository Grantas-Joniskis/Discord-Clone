import React, { useState, useEffect } from 'react';
import AxiosService from 'services/axios-service';
import User from 'types/user';
import ChatHookProps from 'types/chat/chat-hooks';
import UserListCard from './user-list-card';

const UserList: React.FC<ChatHookProps> = ({
  setCardClicked,
  userId,
}) => {
  const [userList, setUserList] = useState<User[]>([]);

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
        <UserListCard key={user.id} user={user} setCardClicked={setCardClicked} userId={userId} />
      ))}
    </div>
  );
};

export default UserList;
