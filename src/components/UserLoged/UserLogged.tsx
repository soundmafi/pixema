import { StyledBadge, StyledOpenIcon, StyledUserLogged, StyledUsername } from './styles';
import { ReactComponent as OpenIcon } from './../../assets/Icons/user-open.svg';

const UserLogged = () => {
	return (
		<StyledUserLogged>
			<StyledBadge>AL</StyledBadge>
			<StyledUsername>Alexsei Lapitsky</StyledUsername>
			<StyledOpenIcon>
				<OpenIcon />
			</StyledOpenIcon>
		</StyledUserLogged>
	);
};

export default UserLogged;
