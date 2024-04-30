import React from 'react';
import { Box, Flex, Input, InputGroup, InputLeftElement, Link } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react'



const Navbar = () => {
  return (
    <Flex as="nav" align="center" wrap="wrap" padding="0rem 1.5rem 0rem 0rem" bg="teal.500" color="white">
      <Text

            padding="0.5rem 3rem"
            margin="0px"
            fontWeight="semibold"  
            fontSize="18px"
            color="black"
            backgroundColor="#EDF2F7"
        >
            Logo
      </Text>

      <Box flex="2">
        <InputGroup ml={4} height="40px" margin="10px">
          <InputLeftElement children={<SearchIcon color="black" background="#EDF2F7" height="11px" width="11px" padding="15px" />} />
          <Input marginLeft="38px" padding="0px 10px" width="100%" borderRadius="0px 5px 5px 0px" borderWidth="1px" placeholder="Search" />
        </InputGroup>
      </Box>
      <Box display="flex" alignItems="flex-end" marginLeft="10px">
        <Link href="#home" 
            marginRight="5" 
            textDecoration="none" 
            _hover={{ textDecoration: 'none' }} 
            padding="0.5rem" 
            bg="teal.600" 
            borderRadius="md" 
            color="black" 
            fontWeight="semibold" 
            fontSize="18px"
        >
          My Events
        </Link>
        <Link href="#home" 
            marginRight="5" 
            textDecoration="none" 
            _hover={{ textDecoration: 'none' }} 
            padding="0.5rem" 
            bg="teal.600" 
            borderRadius="md" 
            color="black" 
            fontWeight="semibold" 
            fontSize="18px"
        >
            email@address.com
        </Link>
      </Box>     
    </Flex>
  );
};

export default Navbar;
