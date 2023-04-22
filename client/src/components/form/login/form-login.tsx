import React from 'react';
import './form-login-style.css';
import handleLogin from 'events/login-form-event';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';

export const FormLogin: React.FC<ChildrenProp> = ({
  children,
}) => {
  const [completed, setCompleted] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (completed) navigate(routes.Chat);
  }, [completed, navigate]);

  return (
    <form
      className="login-form rounded p-4 col-12 py-md-5 px-lg-5"
      onSubmit={(e) => handleLogin(e, setCompleted)}
    >
      {children}
    </form>
  );
};

export default FormLogin;
