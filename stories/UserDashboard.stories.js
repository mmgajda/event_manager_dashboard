import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserDashboard from '../components/UserDashboard';

export default {
    title: 'User Dashboard',
    component: UserDashboard,
    decorators: [(Story) => <Router><Story /></Router>]
};

export const Default = () => <UserDashboard />;
