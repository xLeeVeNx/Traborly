// Import from libs
import { combineReducers, createStore } from 'redux';

// Import reducers
import { navbarReducer } from './reducers/navbarReducer';
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { friendsReducer } from './reducers/friendsReducer';

// Main code
const reducers = combineReducers({
	Navbar: navbarReducer,
	ProfilePage: profileReducer,
	DialogsPage: dialogsReducer,
	FriendsPage: friendsReducer
});

export const store = createStore(reducers);