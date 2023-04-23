type ChatHookProps = {
  children?: React.ReactNode;
  setCardClicked: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string | number;
};

export default ChatHookProps;
