import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledApp } from './Appstyles';
import MainTemplate from './components/MainTemplate/MainTemplate';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Reset from './pages/Reset';
import Settings from './pages/Settings';
import Trends from './pages/Trends';
import { routes } from './routes/routes';

const App = () => {
	const [theme, setTheme] = useState('darkTheme');
	document.documentElement.setAttribute('theme', theme);
	return (
		<StyledApp>
			<Routes>
				<Route path={routes.HOME} element={<MainTemplate />}>
					<Route index element={<Home />} />
					<Route path={routes.TRENDS} element={<Trends />} />
					<Route path={routes.FAVORITES} element={<Favorites />} />
					<Route path={routes.SETTINGS} element={<Settings />} />
					<Route path={routes.SIGN_IN} element={<Login />} />
					<Route path={routes.SIGN_UP} element={<Register />} />
					<Route path={routes.RESET_PASSWORD} element={<Reset />} />
					<Route path={routes.NOT_FOUND} element={<NotFound />} />
				</Route>
			</Routes>
		</StyledApp>
	);
};

export default App;
