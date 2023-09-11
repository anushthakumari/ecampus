import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

import useAuth from '../../hooks/useAuth';

const PersonalDetails = () => {
  const auth_data = useAuth();

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <VStack mt={8} space={4}>
        <Box>
          <Heading color={'muted.500'} size="sm">
            Full Name
          </Heading>
          <Heading textTransform={'capitalize'} size={'lg'} bold>
            {auth_data.first_name + ' ' + auth_data.last_name}
          </Heading>
        </Box>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Roll Number
            </Heading>
            <Heading size={'lg'} bold>
              {auth_data.roll_no}
            </Heading>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Id
            </Heading>
            <Heading size={'lg'} bold>
              {auth_data._id}
            </Heading>
          </Box>
        </HStack>
        <Box>
          <Heading size="sm" color={'muted.500'}>
            Degree
          </Heading>
          <Heading textTransform={'capitalize'} size={'lg'} bold>
            {auth_data.degree}
          </Heading>
        </Box>
        <Box>
          <Heading size="sm" color={'muted.500'}>
            Branch
          </Heading>
          <Heading textTransform={'capitalize'} size={'lg'} bold>
            {auth_data.branch}
          </Heading>
        </Box>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Gender
            </Heading>
            <Heading textTransform={'capitalize'} size={'lg'} bold>
              {auth_data.gender}
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
            <Heading textTransform={'capitalize'} size={'lg'} bold>
              {auth_data.category}
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
