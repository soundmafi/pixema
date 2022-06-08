import {
	StyledBadge,
	StyledLink,
	StyledOpenIcon,
	StyledUserLogged,
	StyledUsername,
} from './styles';
import { ReactComponent as OpenIcon } from './../../assets/Icons/user-open.svg';
import { StyledButton } from '../SignIn/styles';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import UserBar from '../UserBar/UserBar';
import { useState } from 'react';

const UserLogged = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		!isOpen ? setIsOpen(true) : setIsOpen(false);
	};
	const { isAuth, user } = useAppSelector(getUser);

	return (
		// <StyledLink to={routes.SETTINGS}>
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
						<StyledBadge>{user?.displayName[0]}</StyledBadge>
						<StyledUsername>{user?.displayName}</StyledUsername>
						<StyledOpenIcon onClick={handleToggle} isOpen={isOpen}>
							<OpenIcon />
						</StyledOpenIcon>
						<UserBar isOpen={isOpen} user ={user} />
					</>
				)}
			</StyledUserLogged>
		// </StyledLink>
	);
};

export default UserLogged;
