import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

const PostalDetails = () => {
  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <Heading borderBottomWidth={2} borderBottomColor={'secondary.500'}>
        Postal Details
      </Heading>

      <VStack mt={8} space={4}>
        <Heading size={'md'} bold underline>
          Local Addres
        </Heading>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Address
            </Heading>
            <Text bold>177A Bleecker Street, New York City, NY 10012-1406</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Country
            </Heading>
            <Text bold>INDIA</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              State
            </Heading>
            <Text bold>Jharkhand</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              District
            </Heading>
            <Text bold>Jainamore</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              City
            </Heading>
            <Text bold>Bokaro</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Pincode
            </Heading>
            <Text bold>456123</Text>
          </Box>
        </HStack>
      </VStack>
      <VStack mt={8} space={4}>
        <Heading size={'md'} bold underline>
          Permanent Address
        </Heading>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Address
            </Heading>
            <Text bold>177A Bleecker Street, New York City, NY 10012-1406</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Country
            </Heading>
            <Text bold>INDIA</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              State
            </Heading>
            <Text bold>Jharkhand</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              District
            </Heading>
            <Text bold>Jainamore</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              City
            </Heading>
            <Text bold>Bokaro</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Pincode
            </Heading>
            <Text bold>456123</Text>
          </Box>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default PostalDetails;
