import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" width="full" py="5" backgroundColor="gray.100">
      <Flex justify="center" align="center" wrap="wrap">
        <Image src="github.png" boxSize="20px" mr="2" />
        <Image src="linkedin.png" boxSize="20px" mx="2" />
        <Image src="email.png" boxSize="20px" mx="2" />
        <Image src="youtube.png" boxSize="20px" ml="2" />
        <Text fontSize="md" ml="2">© 2024 WIS Club</Text>
      </Flex>
    </Box>
  );
};

export default Footer;