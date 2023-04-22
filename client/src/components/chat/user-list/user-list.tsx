import React from 'react';
import AxiosService from 'services/axios/axios-service';

const UserList = () => {
  const userList = AxiosService.getUsers();
  console.log(userList);

  return (
    <div />
  );
};

export default UserList;
