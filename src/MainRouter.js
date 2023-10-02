import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import JoinPage from './pages/JoinPage';
import MembersPage from './pages/MembersPage';
import AboutPage from './pages/AboutPage';

const MainRouter = () => {
    return (
        // <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>}  />
                <Route path='/events' element={<EventsPage/>}  />
                <Route path='/blog' element={<BlogPage/>}  />
                <Route path='/join' element={<JoinPage/>}  />
                <Route path='/members' element={<MembersPage/>}  />
                <Route path='/about' element={<AboutPage/>}  />
            </Routes>
        // </Router>
    );
}

export default MainRouter;
