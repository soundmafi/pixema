import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledApp } from './Appstyles';
import MainTemplate from './components/MainTemplate/MainTemplate';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
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
				</Route>
			</Routes>
		</StyledApp>
	);
};

export default App;
