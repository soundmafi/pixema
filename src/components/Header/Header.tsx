import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import UserLogged from '../UserLoged/UserLogged';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Search />
			<UserLogged />
		</StyledHeader>
	);
};

export default Header;
