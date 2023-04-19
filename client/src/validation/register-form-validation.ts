const validateRegisterInput = (registerUser: RegisterUser): boolean => {
  const { email, username, password } = registerUser;

  if (email === 'undefined') {
    console.error('Email is required!');
    return false;
  }

  if (!email.includes('@')) {
    console.log(email);
    console.error('Email must include \'@\' symbol');
    return false;
  }

  if (username.length < 4 || username.length > 20) {
    console.error('Username must be between 4 and 20 characters');
    return false;
  }

  const hasUpperCase = /[A-Z]/.test(password);
  if (
    password.length < 4
        || password.length > 20
        || !hasUpperCase
  ) {
    console.error('Password must be 4-20 characters and include an uppercase letter');
    return false;
  }
  return true;
};

export default validateRegisterInput;
