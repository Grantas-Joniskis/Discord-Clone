import RegisterUser from 'types/register-user';

const validateRegisterInput = (registerUser: RegisterUser): boolean => {
  const { email, username, password } = registerUser;

  if (email.trim() === '') {
    console.error('Email is required!');
    return false;
  }

  if (!email.includes('@')) {
    console.log(email);
    console.error('Email must include \'@\' symbol');
    return false;
  }

  if (username.length < 3 || username.length > 30) {
    console.error('Username must be between 3 and 30 characters');
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  if (
    password.length < 8
    || password.length > 32
    || !hasUpperCase
    || !hasLowerCase
  ) {
    console.error('Password must be 8-32 characters and include at least one uppercase and one lowercase letter');
    return false;
  }
  return true;
};

export default validateRegisterInput;
