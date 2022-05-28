import { useState } from 'react';
import { FavoriteIcon, HomeIcon, SettingsIcon, TrendsIcon } from '../../assets/Icons';
import { routes } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import { StyledLink, StyledNav, StyledText } from './styles';
import { MouseEvent } from 'react';

const Nav = () => {
	const { isAuth } = useAppSelector(getUser);
	const [activeLink, setActiveLink] = useState<string | null>('Home');

	const handleLink = (e: MouseEvent<HTMLAnchorElement>) => {
		setActiveLink(e.currentTarget.textContent);
	};

	return (
		<StyledNav>
			<StyledLink to={routes.HOME} onClick={handleLink} isActive={activeLink === 'Home'}>
				<HomeIcon />
				<StyledText>Home</StyledText>
			</StyledLink>

			<StyledLink to={routes.TRENDS} onClick={handleLink} isActive={activeLink === 'Trends'}>
				<TrendsIcon />
				<StyledText>Trends</StyledText>
			</StyledLink>
			{isAuth && (
				<>
					<StyledLink
						to={routes.FAVORITES}
						onClick={handleLink}
						isActive={activeLink === 'Favorites'}
					>
						<FavoriteIcon />
						<StyledText>Favorites</StyledText>
					</StyledLink>

					<StyledLink
						to={routes.SETTINGS}
						onClick={handleLink}
						isActive={activeLink === 'Settings'}
					>
						<SettingsIcon />
						<StyledText>Settings</StyledText>
					</StyledLink>
				</>
			)}
		</StyledNav>
	);
};

export default Nav;
