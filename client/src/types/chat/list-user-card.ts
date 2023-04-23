import User from '../user';
import ChatHookProps from './chat-hooks';

type UserListCardProps = ChatHookProps & {
  user: User;
};

export default UserListCardProps;
