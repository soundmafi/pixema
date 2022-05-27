import useWindowSize, { Size } from '../../store/hooks/useWindowSize';
import Filter from '../Filter/Filter';
import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import Search from '../Search/Search';
import UserLogged from '../UserLoged/UserLogged';
import { StyledHeader } from './styles';

const Header = () => {
	const size: Size = useWindowSize();
	return (
		<StyledHeader>
			<Logo />
			<Search />
			{size.width > 769 ? <UserLogged /> : <MobileMenu />}
			<Filter />
		</StyledHeader>
	);
};

export default Header;
