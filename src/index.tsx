import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';

const container = document.getElementById('root');
if (!container) {
	throw new Error('No root element found');
}

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
