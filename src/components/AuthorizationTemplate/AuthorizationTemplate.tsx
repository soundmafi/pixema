import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import { Authorization } from './styles';

const AuthorizationTemplate = () => {
	return (
		<Authorization>
			<Logo />
			<Outlet />
			<Footer/>
		</Authorization>
	);
};

export default AuthorizationTemplate;
