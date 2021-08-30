import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className="app-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
