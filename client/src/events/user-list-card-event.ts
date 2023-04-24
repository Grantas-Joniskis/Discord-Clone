import User from 'types/user';
import CurrentUser from 'user/CurrentUser';

const handleUserListCardClick = (
  receiver: User,
  setCardClicked: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  CurrentUser.setReceiver(receiver);
  setCardClicked(true);
};

export default handleUserListCardClick;
