// app/myprofile/page.tsx
import { VStack, Box, Heading, Text } from "@chakra-ui/react";
import UserProfileForm from "../components/UserProfileForm";
import Hero2 from "../components/Hero2";

// Main server-side function
export default async function ProfilePage() {
    // Assume a generic empty user profile object as a placeholder
    const userProfile = {
        first_name: "",
        last_name: "",
        bio: "",
        status: "unknown",
    };

    return (
        <>
        <Hero2 />
        <VStack spacing={4} p={6}>
            <Box textAlign="center">
                <Heading>Profile Page</Heading>
                <Text>Status: {userProfile.status || "unknown"}</Text>
            </Box>
            <UserProfileForm initialData={userProfile} />
        </VStack>
        </>
    );
}
