import React from 'react';
import { Box, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';

const SectionWithCards = () => {
  return (
    <Box paddingX="4">
      <Box padding="0px 10%">
        <Heading textAlign="left" as="h2" size="xl" marginBottom="20px">
            Events
        </Heading>


        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box >
            <Image width="100%" src="aws.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">AWS Workshop</Heading>
                <Text textAlign="left" color="gray.500">Monday, March 25, 4:00PM  GITC 4402  James Flan </Text>
            </Box>
        </Box>
        <Box >
            <Image width="100%" src="infinity.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Let's Build a CI/CD Pipeline</Heading>
                <Text textAlign="left" color="gray.500">Monday, April 1 4:00PM GITC 3600 Cathy</Text>
            </Box>
        </Box>
        <Box >
            <Image width="100%" src="laptop.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Python for Data Analysis</Heading>
                <Text textAlign="left" color="gray.500">Monday, April 8 4:00PM GITC 3600 Cathy</Text>
            </Box>
        </Box>
        <Box >
            <Image width="100%" src="llm.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Introduction to LLMs</Heading>
                <Text textAlign="left" color="gray.500">Wednesday, April 10 4:00PM GITC 3600 Raul Paiz</Text>
            </Box>
        </Box><Box >
            <Image width="100%" src="aws.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">AWS Workshop</Heading>
                <Text textAlign="left" color="gray.500">Monday, March 25 4:00PM GITC 3600 James Flan</Text>
            </Box>
        </Box><Box >
            <Image width="100%" src="infinity.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Let's Build a CI/CD Pipeline </Heading>
                <Text textAlign="left" color="gray.500">Monday, April 1 4:00PM GITC 3600 Cathy</Text>
            </Box>
        </Box><Box >
            <Image width="100%" src="laptop.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Python for Data Analysis</Heading>
                <Text textAlign="left" color="gray.500">Monday, April 8 4:00PM GITC 3600 Raul Paiz</Text>
            </Box>
        </Box><Box >
            <Image width="100%" src="llm.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Introduction to LLMs</Heading>
                <Text textAlign="left" color="gray.500">Wednesday, April 10 4:00PM GITC 3600 Raul </Text>
            </Box>
        </Box>
        <Box >
            <Image width="100%" src="laptop.jpeg" alt="Image" />
            <Box marginTop="-3.5px" padding="0px 20px" border='1px solid;' borderColor='grey'>
                <Heading textAlign="left" as="h3" size="md" marginBottom="2">Python for Data Analysis</Heading>
                <Text textAlign="left" color="gray.500">Monday, April 8 4:00PM GITC 3600 Raul Paiz</Text>
            </Box>
        </Box>
        </SimpleGrid>

    
      </Box>
    </Box>
  );
};

export default SectionWithCards;
