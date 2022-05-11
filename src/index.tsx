import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './ui/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
if (!container) {
	throw new Error('No root element found');
}

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
				<GlobalStyles />
				<App />
		</Provider>
	</React.StrictMode>
);
