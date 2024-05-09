"use client";

import { VStack, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const UserProfileForm = ({ initialData }) => {
    const [formData, setFormData] = useState(initialData);

    // Fetch user profile on the client side
    const fetchUserProfile = async () => {
        const token = localStorage.getItem("access_token") || "";
        try {
            const res = await fetch(`/api/users/${formData.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error("Failed to fetch user profile");
            const data = await res.json();
            setFormData(data);
        } catch (error) {
            console.error("Fetch Profile Error:", error);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    // Handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission to update the profile
    const handleSubmit = async () => {
        const token = localStorage.getItem("access_token") || "";
        try {
            const res = await fetch(`/api/users/${formData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Failed to update profile");
            const updatedProfile = await res.json();
            setFormData(updatedProfile);
        } catch (error) {
            console.error("Update Error:", error);
        }
    };

    return (
        <VStack spacing={3}>
            <Input
                name="first_name"
                value={formData.first_name || ""}
                onChange={handleInputChange}
                placeholder="First Name"
            />
            <Input
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleInputChange}
                placeholder="Last Name"
            />
            <Input
                name="bio"
                value={formData.bio || ""}
                onChange={handleInputChange}
                placeholder="Bio"
            />
            <Button onClick={handleSubmit}>Save Changes</Button>
        </VStack>
    );
};

export default UserProfileForm;
