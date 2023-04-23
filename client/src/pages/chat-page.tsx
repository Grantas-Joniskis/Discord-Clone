import UserChat from 'components/chat/user-chat';
import UserChatInput from 'components/chat/user-chat/user-chat-input';
import UserChatSection from 'components/chat/user-chat/user-chat-section';
import UserChatTitle from 'components/chat/user-chat/user-chat-title';
import UserList from 'components/chat/user-list/user-list';
import UserListSection from 'components/chat/user-list/user-list-section';
import UserListTitle from 'components/chat/user-list/user-list-title';
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SocketioService from 'services/socketio-service';
import CurrentUser from 'user/CurrentUser';

const ChatPage = () => {
  const { id: userId } = useParams();
  const [cardClicked, setCardClicked] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(() => {
    if (cardClicked) {
      navigate(`${routes.Chat}${routes.User}/${CurrentUser.getReceiver()?.id}`);
      console.log(CurrentUser.getReceiver()?.id);
      SocketioService.getSocket()?.removeAllListeners('sent-private-message');
      SocketioService.getSocket()?.on('sent-private-message', (receiverId: number, text: string) => {
        console.log('userId ->', receiverId);
        console.log('message ->', text);
      });
      setCardClicked(false);
    }
  }, [cardClicked, navigate]);

  return (
    <UserChat setCardClicked={setCardClicked} userId={Number(userId)}>
      <UserListSection setCardClicked={setCardClicked} userId={Number(userId)}>
        <UserListTitle>direct messages</UserListTitle>
        <UserList setCardClicked={setCardClicked} userId={Number(userId)} />
      </UserListSection>
      <UserChatSection>
        <UserChatTitle />
        <UserChatInput />
      </UserChatSection>
    </UserChat>
  );
};

export default ChatPage;
