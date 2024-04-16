import React from 'react';
import UserDashboard from '../components/UserDashboard';

export default {
    title: 'Dashboard/User Dashboard',
    component: UserDashboard,
    // Add decorators or global parameters here if needed
};

const Template = (args) => <UserDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Default props to pass to the UserDashboard if any
};

export const LoadingState = Template.bind({});
LoadingState.args = {
    ...Default.args,
    loading: true,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
    ...Default.args,
    error: 'Failed to fetch users',
};

export const EmptyState = Template.bind({});
EmptyState.args = {
    ...Default.args,
    users: []
};

export const PopulatedState = Template.bind({});
PopulatedState.args = {
    ...Default.args,
    users: [{ id: 1, username: 'JohnDoe', email: 'john@example.com' }, { id: 2, username: 'JaneDoe', email: 'jane@example.com' }],
};
