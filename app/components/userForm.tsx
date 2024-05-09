'use client'
import { Stack, Input, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const UserForm = ({ onSave }: { onSave: (data: any) => void }, initialData = {}) => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        bio: '',
        profile_picture_url: '',
        password: ''
    });

    // Populate form with initial data if editing
    useEffect(() => {
        setFormData(prev => ({ ...prev, ...initialData }));
    }, [initialData]);

    // Handle form input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Call the parent component's save handler
    const handleSubmit = () => {
        onSave(formData);
        setFormData({
            email: '',
            first_name: '',
            last_name: '',
            bio: '',
            profile_picture_url: '',
            password: ''
        });
    };

    return (
        <Stack spacing={3}>
            <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
            <Input name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" required />
            <Input name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder="First Name" />
            <Input name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder="Last Name" />
            <Input name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Bio" />
            <Input name="profile_picture_url" value={formData.profile_picture_url} onChange={handleInputChange} placeholder="Profile Picture URL" />
            <Button onClick={handleSubmit}>{(initialData as { id?: string | number }).id ? 'Update User' : 'Add User'}</Button>
        </Stack>
    );
};

export default UserForm;
