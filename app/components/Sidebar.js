import { Box, Grid, VStack, Text, HStack, Avatar, Icon, Link, Heading, Button } from '@chakra-ui/react';

const Sidebar = () => {
    return (
        <Grid templateColumns={['1fr', '220px 1fr']} gap={4} minHeight="100vh">
            {/* Sidebar */}
            <Box
                width="220px"
                bg="lightblue"
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
            >
                <VStack spacing={4}>
                    <Heading as="h1" size="md">Welcome, User!</Heading>

                    {/* Navigation Buttons */}
                    <Link href="/dashboard">
                        <Button leftIcon={<MdDashboard />} variant="solid" width="full">
                            Dashboard
                        </Button>
                    </Link>
                    <Link href="/notifications">
                        <Button leftIcon={<MdNotifications />} variant="solid" width="full">
                            Notifications
                        </Button>
                    </Link>
                    <Link href="/myprofile">
                        <Button leftIcon={<MdPerson />} variant="solid" width="full">
                            Profile
                        </Button>
                    </Link>
                    <Link href="/signout">
                        <Button leftIcon={<MdExitToApp />} variant="solid" width="full">
                            Signout
                        </Button>
                    </Link>
                </VStack>
            </Box>

            {/* Main Content */}
            <Box p={6} flex="1">
                {children}
                {/* Footer Section */}
                <Box mt={10} pt={6} borderTop="1px solid" borderColor="gray.200">
                    <HStack justifyContent="center" mb={2} spacing={4}>
                        {/* <Link href="https://github.com" isExternal><Icon as={FaGithub} /></Link>
                        <Link href="https://linkedin.com" isExternal><Icon as={FaLinkedin} /></Link>
                        <Link href="https://youtube.com" isExternal><Icon as={FaYoutube} /></Link>
    <Link href="mailto:info@example.com"><Icon as={FaEnvelope} /></Link>*/}
                    </HStack>
                    <Text textAlign="center">© 2024 WIS Club</Text>
                </Box>
            </Box>
        </Grid>
    )
};

export default Sidebar;