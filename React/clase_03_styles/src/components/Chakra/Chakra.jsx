import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Acordion from '../Acordion/Acordion';
import Airbnb from '../Airbnb/Airbnb';

const Chakra = () => {
  return (
    <Container maxW='4xl'>
      {/* <Box bg='red.400' w='100%' p={4} color='blue.600' fontSize='6xl'>
        <h1>Holis</h1>
      </Box>

      <Flex>
        <Center>
          <Text>Holuuuuuu</Text>
        </Center>
      </Flex> */}
      <Airbnb />
    </Container>
  );
};

export default Chakra;
