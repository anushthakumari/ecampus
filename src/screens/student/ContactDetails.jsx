import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

import useAuth from '../../hooks/useAuth';

const ContactDetails = () => {
  const auth_data = useAuth();

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <VStack mt={8} space={4}>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Email
            </Heading>
            <Text bold>{auth_data.email}</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Number
            </Heading>
            <Text bold>+91 {auth_data.contact}</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Father Email
            </Heading>
            <Text bold>{auth_data.father_email}</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Father Number
            </Heading>
            <Text bold>+91 {auth_data.father_contact}</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Mother Email
            </Heading>
            <Text bold>{auth_data.mother_email}</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Mother Number
            </Heading>
            <Text bold>+91 {auth_data.mother_contact}</Text>
          </Box>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default ContactDetails;
