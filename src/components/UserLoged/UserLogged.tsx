import { StyledBadge, StyledOpenIcon, StyledUserLogged, StyledUsername } from './styles';
import { ReactComponent as OpenIcon } from './../../assets/Icons/user-open.svg';
import { StyledButton } from '../SignIn/styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

const UserLogged = () => {
	const { isAuth, user} = useSelector(({ user }: RootStore) => user);
	return (
		<StyledUserLogged>
			{!isAuth?<>
		<Link to={routes.SIGN_IN}><StyledButton>Sign in</StyledButton></Link>
		<Link to={routes.SIGN_UP}><StyledButton>Sign up</StyledButton></Link>
		</>
		:<>
			<StyledBadge>AL</StyledBadge>
			<StyledUsername>{user?.email}</StyledUsername>
			<StyledOpenIcon>
				<OpenIcon />
			</StyledOpenIcon>
			</>}
		</StyledUserLogged>
	);
};

export default UserLogged;
