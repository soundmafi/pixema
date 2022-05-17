import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import LogoIcon from '../LogoIcon/LogoIcon';

const Logo = () => {
	return (
		<Link to={routes.HOME} title="logo">
			<LogoIcon />
		</Link>
	);
};

export default Logo;
