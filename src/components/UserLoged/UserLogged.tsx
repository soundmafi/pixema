import {
	StyledBadge,
	StyledLink,
	StyledOpenIcon,
	StyledUserLogged,
	StyledUsername,
} from './styles';
import { ReactComponent as OpenIcon } from './../../assets/Icons/user-open.svg';
import { StyledButton } from '../SignIn/styles';
import { RootStore } from '../../store/store';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/useAppSelector';

const UserLogged = () => {
	const { isAuth, user } = useAppSelector(({ user }: RootStore) => user);
	return (
		<StyledLink to={routes.SETTINGS}>
			<StyledUserLogged>
				{!isAuth ? (
					<>
						<Link to={routes.SIGN_IN}>
							<StyledButton>Sign in</StyledButton>
						</Link>
						<Link to={routes.SIGN_UP}>
							<StyledButton>Sign up</StyledButton>
						</Link>
					</>
				) : (
					<>
						<StyledBadge>AL</StyledBadge>
						<StyledUsername>{user?.email}</StyledUsername>
						<StyledOpenIcon>
							<OpenIcon />
						</StyledOpenIcon>
					</>
				)}
			</StyledUserLogged>
		</StyledLink>
	);
};

export default UserLogged;
