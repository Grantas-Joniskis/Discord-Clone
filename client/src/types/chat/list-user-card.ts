import User from '../user';

type UserListCardProps = {
  setCardClicked: React.Dispatch<React.SetStateAction<boolean>>
  user: User;
};

export default UserListCardProps;
