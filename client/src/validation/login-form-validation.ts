import LoginUser from 'types/login-user';

const validateLoginInput = (loginUser: LoginUser): boolean => {
  const { email, password } = loginUser;

  if (email.trim() === '') {
    console.error('Email is required!');
    return false;
  }

  if (!email.includes('@')) {
    console.error('Email must include \'@\' symbol');
    return false;
  }

  if (password.length === 0) {
    console.error('Password is required!');
    return false;
  }

  return true;
};

export default validateLoginInput;
