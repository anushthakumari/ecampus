import {Heading, ScrollView, Text, HStack, VStack, Box} from 'native-base';
import React from 'react';

const ContactDetails = () => {
  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <Heading borderBottomWidth={2} borderBottomColor={'secondary.500'}>
        Contact Details
      </Heading>

      <VStack mt={8} space={4}>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Email
            </Heading>
            <Text bold>abc@mail.com</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Student Number
            </Heading>
            <Text bold>+91 4561237895</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Father Email
            </Heading>
            <Text bold>abc@mail.com</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Father Number
            </Heading>
            <Text bold>+91 4561237895</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Mother Email
            </Heading>
            <Text bold>abc@mail.com</Text>
          </Box>
          <Box flex={1}>
            <Heading size="sm" color={'muted.500'}>
              Mother Number
            </Heading>
            <Text bold>+91 4561237895</Text>
          </Box>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default ContactDetails;
