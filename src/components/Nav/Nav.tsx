import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from '../../assets/Icons';
import { routes } from '../../routes/routes';
import { StyledLink, StyledNav, StyledText } from './styles';

const Nav = () => {
	return (
		<StyledNav>
			<StyledLink to={routes.HOME}>
				<HomeIcon />
				<StyledText>Home</StyledText> 
			</StyledLink>

			<StyledLink to={routes.TRENDS}>
				<TrendsIcon />
				<StyledText>Trends</StyledText>
			</StyledLink>

			<StyledLink to={routes.FAVORITES}>
				<FavoriteIcon />
				<StyledText>Favorites</StyledText>
			</StyledLink>

			<StyledLink to={routes.SETTINGS}>
				<SettingsIcon />
				<StyledText>Settings</StyledText>
			</StyledLink>
		</StyledNav>
	);
};

export default Nav;
