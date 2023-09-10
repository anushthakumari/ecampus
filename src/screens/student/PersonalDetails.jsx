import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

const PersonalDetails = () => {
  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <Heading borderBottomWidth={2} borderBottomColor={'secondary.500'}>
        Personal Details
      </Heading>

      <VStack mt={8} space={4}>
        <Box>
          <Heading color={'muted.500'} size="sm">
            Full Name
          </Heading>
          <Heading size={'lg'} bold>
            John D. Roger
          </Heading>
        </Box>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Roll Number
            </Heading>
            <Heading size={'lg'} bold>
              33569
            </Heading>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Id
            </Heading>
            <Heading size={'lg'} bold>
              895623
            </Heading>
          </Box>
        </HStack>
        <Box>
          <Heading size="sm" color={'muted.500'}>
            Degree
          </Heading>
          <Heading size={'lg'} bold>
            B. Tech
          </Heading>
        </Box>
        <Box>
          <Heading size="sm" color={'muted.500'}>
            Branch
          </Heading>
          <Heading size={'lg'} bold>
            Computer Science
          </Heading>
        </Box>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Gender
            </Heading>
            <Heading size={'lg'} bold>
              Male
            </Heading>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Medium
            </Heading>
            <Heading size={'lg'} bold>
              English
            </Heading>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Category
            </Heading>
            <Heading size={'lg'} bold>
              Open
            </Heading>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Blood Group
            </Heading>
            <Heading size={'lg'} bold>
              A+
            </Heading>
          </Box>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default PersonalDetails;
