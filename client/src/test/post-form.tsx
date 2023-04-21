import React, { FormEvent } from 'react';
import AxiosService from 'services/axios/axios-service';

const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const registerUser: RegisterUser = {
    email: String(data.email),
    username: String(data.username),
    password: String(data.password),
  };

  try {
    const response = AxiosService.postRegisterUser(registerUser);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
};

const PostForm = () => (
  <form onSubmit={handleSumbit}>
    <label htmlFor="email">Email: </label>
    <input type="email" name="email" id="email" placeholder="email" />
    <br />
    <label htmlFor="username">Username: </label>
    <input type="text" name="username" id="username" placeholder="username" />
    <br />
    <label htmlFor="password">Password: </label>
    <input type="password" name="password" id="password" placeholder="password" />
    <button type="submit">Submit</button>
  </form>
);

export default PostForm;
