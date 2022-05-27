import Nav from '../Nav/Nav';
import UserLogged from '../UserLoged/UserLogged';
import { StyledNavbar } from './styles';

export interface INavBar {
	isOpen: boolean;
}

const NavBar = ({ isOpen }: INavBar) => {
	return (
		<StyledNavbar isOpen={isOpen}>
			<UserLogged />
			<Nav />
		</StyledNavbar>
	);
};

export default NavBar;
