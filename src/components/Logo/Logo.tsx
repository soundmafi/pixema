import { routes } from '../../routes/routes';
import LogoIcon from '../LogoIcon/LogoIcon';
import { StyledLogo } from './styles';

const Logo = () => {
	return (
		<StyledLogo to={routes.HOME} title="logo">
			<LogoIcon />
		</StyledLogo>
	);
};

export default Logo;
