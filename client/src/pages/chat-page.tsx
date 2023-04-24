import UserChat from 'components/chat/user-chat/user-chat';
import UserChatInput from 'components/chat/user-chat/user-chat-input';
import UserChatSection from 'components/chat/user-chat/user-chat-section';
import UserChatTitle from 'components/chat/user-chat/user-chat-title';
import UserList from 'components/chat/user-list/user-list';
import UserListSection from 'components/chat/user-list/user-list-section';
import UserListTitle from 'components/chat/user-list/user-list-title';
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocketioService from 'services/socketio-service';
import CurrentUser from 'user/CurrentUser';
import UserChatMessages from 'components/chat/user-chat/user-chat-messages';
import AxiosService from '../services/axios-service';

const ChatPage = () => {
  // const { id: userId } = useParams();
  const [cardClicked, setCardClicked] = React.useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = React.useState(
    new Array<{ from: number, to: number, text: string }>(),
  );
  React.useEffect(() => {
    if (cardClicked) {
      setCardClicked(false);
    }
    if (cardClicked) return () => {};
    navigate(`${routes.Chat}${routes.User}/${CurrentUser.getReceiver()?.id}`);
    console.log(CurrentUser.getReceiver()?.id);

    setMessages([]);

    AxiosService.getMessagesHistory(CurrentUser.getReceiver()?.id as number).then((response) => {
      response.data.reverse().forEach((message: any) => {
        setMessages((oldArray) => [...oldArray, {
          from: message.authorId,
          to: message.toId,
          text: message.content,
        }]);
      });
    });

    // When sending message, notification from socket:
    function appendMessageMeAsSender(receiverId: number, text: string) {
      console.log('userId ->', receiverId);
      console.log('message ->', text);
      setMessages((oldArray) => [...oldArray, {
        from: CurrentUser.getId() ?? 0,
        to: receiverId,
        text,
      }]);
      console.log(`length messages:${messages.length}`);
    }

    function appendMessageFriendAsSender(senderId: number, text: string) {
      if (senderId !== CurrentUser.getReceiver()?.id) return;
      console.log('receive new message :)');
      console.log('userId ->', senderId);
      console.log('message ->', text);
      setMessages((oldArray) => [...oldArray, {
        from: senderId ?? 0,
        to: CurrentUser.getId() ?? 0,
        text,
      }]);
      console.log(`length messages:${messages.length}`);
    }

    SocketioService.getSocket()?.on('sent-private-message', appendMessageMeAsSender);
    SocketioService.getSocket()?.on('receive-private-message', appendMessageFriendAsSender);

    return () => {
      SocketioService.getSocket()?.off('sent-private-message', appendMessageMeAsSender);
      SocketioService.getSocket()?.off('receive-private-message', appendMessageFriendAsSender);
    };
  }, [cardClicked]);

  return (
    <UserChat>
      <UserListSection>
        <UserListTitle>direct messages</UserListTitle>
        <UserList setCardClicked={setCardClicked} />
      </UserListSection>
      <UserChatSection>
        <UserChatTitle />
        <UserChatMessages messages={messages} />
        <UserChatInput />
      </UserChatSection>
    </UserChat>
  );
};

export default ChatPage;
