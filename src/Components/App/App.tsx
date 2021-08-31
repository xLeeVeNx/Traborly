// Import libs
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import styles
import './App.scss';

// Import components
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Dialogs } from '../Dialogs/Dialogs';
import { News } from '../News/News';
import { Music } from '../Music/Music';
import { Settings } from '../Settings/Settings';

// Import interfaces
import { IAppProps } from '../../Interface/Interface';

// Main code
export const App: React.FC<IAppProps> = ({state}) => {
	const ProfileRoute = () => <Profile PostItemData={ state.ProfilePage.PostItemData } />;
	const NewsRoute = () => <News />;
	const DialogsRoute = () => <Dialogs DialogsItemData={ state.DialogsPage.DialogsItemData }
	                                    DialogsMessageData={ state.DialogsPage.DialogsMessageData } />;
	const MusicRoute = () => <Music />;
	const SettingsRoute = () => <Settings />;

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<main className="app-content">
					<Route path="/profile" render={ ProfileRoute } />
					<Route path="/news" render={ NewsRoute } />
					<Route path="/dialogs" render={ DialogsRoute } />
					<Route path="/music" render={ MusicRoute } />
					<Route path="/settings" render={ SettingsRoute } />
				</main>
			</div>
		</BrowserRouter>
	);
};