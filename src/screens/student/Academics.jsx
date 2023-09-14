import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

import useAuth from '../../hooks/useAuth';

const Academics = () => {
  const auth_data = useAuth();

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <VStack mt={8} space={8}>
        <Heading bold>Sem - 1</Heading>
        <VStack space={4}>
          <Heading size={'md'} underline>
            Internals
          </Heading>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Communication Skill I
              </Heading>
              <Text bold>14/20</Text>
            </Box>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Physics I
              </Heading>
              <Text bold>16/20</Text>
            </Box>
          </HStack>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Mathematics - I
              </Heading>
              <Text bold>12/20</Text>
            </Box>
          </HStack>
        </VStack>
        <VStack space={4}>
          <Heading size={'md'} underline>
            Externals (Theory)
          </Heading>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Communication Skill I
              </Heading>
              <Text bold>60/80</Text>
            </Box>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Physics I
              </Heading>
              <Text bold>68/80</Text>
            </Box>
          </HStack>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Mathematics - I
              </Heading>
              <Text bold>72/80</Text>
            </Box>
          </HStack>
        </VStack>
        <VStack space={4}>
          <Heading size={'md'} underline>
            Externals (Practicals)
          </Heading>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Communication Skill I
              </Heading>
              <Text bold>40/50</Text>
            </Box>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Physics I
              </Heading>
              <Text bold>42/50</Text>
            </Box>
          </HStack>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Mathematics - I
              </Heading>
              <Text bold>46/50</Text>
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Academics;
