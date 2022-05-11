import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

const App = () => {
	const [theme, setTheme] = useState('darkTheme');
	document.documentElement.setAttribute('theme', theme);
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;
