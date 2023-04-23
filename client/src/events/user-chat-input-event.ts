import React, { FormEvent } from 'react';
import AxiosService from 'services/axios-service';

const handleUserChatInput = (
  event: FormEvent<HTMLFormElement>,
  messageRef: React.RefObject<HTMLInputElement>,
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const message = String(data.message);
    AxiosService.postMessage(message);
  } catch (error) {
    console.error('Error:', error);
  }

  console.log(String(data.message));
  console.log(messageRef);
  if (messageRef.current) {
    // eslint-disable-next-line no-param-reassign
    messageRef.current.value = '';
  }
};

export default handleUserChatInput;
