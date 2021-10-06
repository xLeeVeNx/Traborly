// Import libs
import ReactDOM from 'react-dom';
import React from 'react';

// Import Components
import { App } from './components/App/App';

// Import functions and state
import { store } from './redux/store';

export const renderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App store={ store } />
		</React.StrictMode>,
		document.getElementById('root'),
	);
};

renderEntireTree();
store.subscribe(renderEntireTree);