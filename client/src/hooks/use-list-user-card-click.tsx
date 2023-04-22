import { useState } from 'react';

const useListUserCardClick = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  return {
    value: state,
    setTrue,
    setFalse,
  };
};

export default useListUserCardClick;
