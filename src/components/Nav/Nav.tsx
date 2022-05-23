import { useState } from 'react';
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from '../../assets/Icons';
import { routes } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import { StyledLink, StyledNav, StyledText } from './styles';

const Nav = () => {
	const [isActive, setIsActive] = useState('Home');
	const { isAuth } = useAppSelector(getUser);

	return (
		<StyledNav>
			<StyledLink to={routes.HOME} onClick={() => setIsActive('Home')}>
				<HomeIcon />
				<StyledText>Home</StyledText>
			</StyledLink>

			<StyledLink to={routes.TRENDS} onClick={() => setIsActive('Trends')}>
				<TrendsIcon >
					<path fill="#7B61FF"> </path>
				</TrendsIcon>
				<StyledText>Trends</StyledText>
			</StyledLink>
			{isAuth && (
				<>
					<StyledLink to={routes.FAVORITES} onClick={() => setIsActive('Favorite')}>
						<FavoriteIcon />
						<StyledText>Favorites</StyledText>
					</StyledLink>

					<StyledLink to={routes.SETTINGS} onClick={() => setIsActive('Setting')}>
						<SettingsIcon />
						<StyledText>Settings</StyledText>
					</StyledLink>
				</>
			)}
		</StyledNav>
	);
};

export default Nav;
