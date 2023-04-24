import UserListCardProps from './list-user-card';

type UserListProps = Omit<UserListCardProps, 'user'>;

export default UserListProps;
