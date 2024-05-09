import React from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box position="relative" height="200px" width="100%">
            <Image
                src='banner.png'
                alt="Banner"
                objectFit="cover"
                width="100%"
                height="200px"
                mb={6}
                borderRadius="sm"
            />

            <Flex
                position="absolute"
                bottom="0"
                left="0"
                padding="1rem"
                marginLeft="10rem"
                alignItems="flex-end"
            // width="100%"
            >
            </Flex>


        </Box>
    );
};

export default HeroSection;
