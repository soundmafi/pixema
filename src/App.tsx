import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { RootStore } from './store/store';

const App = () => {
	const { themeType } = useSelector(({ themeType }: RootStore) => themeType);
	document.documentElement.setAttribute('theme', themeType);
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;
