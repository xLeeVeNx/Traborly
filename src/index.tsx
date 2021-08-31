// Import libs
import React from 'react';
import ReactDOM from 'react-dom';

// Import state
import { state } from './Redux/state';

// Import component
import { App } from './Components/App/App';

// Render
ReactDOM.render(
	<React.StrictMode>
		<App state={ state } />
	</React.StrictMode>,
	document.getElementById('root'),
);
