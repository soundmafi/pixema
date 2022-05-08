import { Route, Routes } from 'react-router-dom';
import { routes } from './routes/routes';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Trends from './pages/Trends';
import MainTemplate from './components/MainTemplate/MainTemplate';
import { StyledApp } from './Appstyles';

const App = () => {
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
