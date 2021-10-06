// Import libs
import ReactDOM from 'react-dom';
import React from 'react';

// Import Components
import { App } from './components/App/App';

// Import interfaces
import { IState } from './interface/Interfaces';

// Import functions and state
import { state, subscribe } from './redux/state';
import { addPost } from './redux/state';

export const renderEntireTree = (state: IState) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={ state } addPost={ addPost } />
		</React.StrictMode>,
		document.getElementById('root'),
	);
};

renderEntireTree(state)
subscribe(renderEntireTree);