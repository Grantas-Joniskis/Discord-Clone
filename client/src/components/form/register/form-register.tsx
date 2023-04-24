import React from 'react';
import './form-register-style.css';
import handleRegister from 'events/register-form-event';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

export const FormRegister: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [completed, setCompleted] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (completed) navigate(routes.Login);
  }, [completed, navigate]);
  return (
    <form className="register-form rounded p-4 col-12 py-md-5 px-lg-5" onSubmit={(e) => handleRegister(e, setCompleted)}>
      {children}
    </form>
  );
};

export default FormRegister;
