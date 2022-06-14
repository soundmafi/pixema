import { ProfileContainer, StyledBadge, StyledButton, StyledOpenIcon, StyledUserLogged, StyledUsername } from './styles';
import { ReactComponent as OpenIcon } from './../../assets/Icons/user-open.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import UserBar from '../UserBar/UserBar';
import { useState } from 'react';
import useWindowSize, { Size } from '../../store/hooks/useWindowSize';

const UserLogged = () => {
	const size: Size = useWindowSize();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		!isOpen ? setIsOpen(true) : setIsOpen(false);
	};
	const { isAuth, user } = useAppSelector(getUser);

	return (
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
					<ProfileContainer>
						<StyledBadge>{user?.displayName[0]}</StyledBadge>
						<StyledUsername onClick={handleToggle}>{user?.displayName}</StyledUsername>
					</ProfileContainer>
					{size.width > 768 && <>
					<StyledOpenIcon onClick={handleToggle} isOpen={isOpen}>
						<OpenIcon />
					</StyledOpenIcon>
					<UserBar isOpen={isOpen} user={user} />
					</>}
					
				</>
			)}
		</StyledUserLogged>
	);
};

export default UserLogged;
