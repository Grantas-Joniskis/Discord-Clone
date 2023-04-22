import User from 'types/user';
import CurrentUser from 'user/CurrentUser';

const handleUserListCardClick = (receiver: User): void => {
  CurrentUser.setReceiver(receiver);
};

export default handleUserListCardClick;
