// Import from libs
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import styles
import './styles/fonts.scss';
import './styles/App.scss';

// Import components
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Dialogs } from '../Dialogs/Dialogs';
import { Friends } from '../Friends/Friends';
import { News } from '../News/News';
import { Settings } from '../Settings/Settings';

// Import interfaces
import { IAppProps } from './IApp';

// Main code
export const App: React.FC<IAppProps> = ({store}) => {
	const state = store.getState();

	const ProfileRoute = () => <Profile PostItemData={ state.ProfilePage.PostItemData }
	                                    UserItemData={ state.ProfilePage.UserItemData }
	                                    dispatch={ store.dispatch.bind(store) } />;
	const NewsRoute = () => <News />;
	const DialogsRoute = () => <Dialogs
		DialogsItemData={ state.DialogsPage.DialogsItemData }
		DialogsMessageData={ state.DialogsPage.DialogsMessageData }
	/>;
	const FriendsRoute = () => <Friends FriendsItemData={ state.FriendsPage.FriendsItemData } />;
	const SettingsRoute = () => <Settings />;

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar MenuItemData={ state.Navbar.MenuItemData } />
				<main className="app-content">
					<Route path="/profile" render={ ProfileRoute } />
					<Route path="/news" render={ NewsRoute } />
					<Route path="/dialogs" render={ DialogsRoute } />
					<Route path="/friends" render={ FriendsRoute } />
					<Route path="/settings" render={ SettingsRoute } />
				</main>
			</div>
		</BrowserRouter>
	);
};