import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { StyledNav } from './styles';
import { ReactComponent as HomeIcon } from './../../assets/Icons/nav-home.svg';
import { ReactComponent as TrendsIcon } from './../../assets/Icons/nav-trends.svg';
import { ReactComponent as FavoritesIcon } from './../../assets/Icons/nav-favorites.svg';
import { ReactComponent as SettingsIcon } from './../../assets/Icons/nav-settings.svg';

const Nav = () => {
	return (
		<StyledNav>
			<Link to={routes.HOME}>
				<HomeIcon />
				Home
			</Link>

			<Link to={routes.TRENDS}>
				<TrendsIcon />
				Trends
			</Link>

			<Link to={routes.FAVORITES}>
				<FavoritesIcon />
				Favorites
			</Link>

			<Link to={routes.SETTINGS}>
				<SettingsIcon />
				Settings
			</Link>
		</StyledNav>
	);
};

export default Nav;
