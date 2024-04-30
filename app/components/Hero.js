import React from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box position="relative" height="400px" width="100%">
      <Image
        src="hero-image.jpg"
        alt="Hero Image"
        objectFit="cover"
        height="100%"
        width="100%"
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
      
        <Text color="white" fontSize="44px" fontWeight="bold" marginBottom="0px">
          WHERE ACADEMIA<br/> MEETS INDUSTRY
        </Text>

        <Button marginLeft="10rem" background="green" color="white">
          Find Your Next Event
        </Button>
      </Flex>

     
    </Box>
  );
};

export default HeroSection;
