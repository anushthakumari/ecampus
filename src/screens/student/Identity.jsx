import {
  ScrollView,
  Text,
  Heading,
  Center,
  Box,
  Avatar,
  HStack,
  VStack,
  Image,
} from 'native-base';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import useAuth from '../../hooks/useAuth';

import logo_img from '../../../assets/images/logo.png';

const Identity = () => {
  const auth_data = useAuth();
  return (
    <ScrollView px={5} pt={3} w="100%" h="100%" bgColor={'white'}>
      <Heading size={'2xl'}>Hello There!</Heading>
      <Heading size={'md'}>Here's your ID Card!</Heading>

      <Center mt={5} w="100%">
        <VStack space={6}>
          <HStack
            color={'white'}
            padding={3}
            w={'100%'}
            bgColor={'secondary.900'}
            borderRadius={'2xl'}>
            <Heading
              textTransform={'uppercase'}
              size={'sm'}
              color={'white'}
              flex={0.8}
              bold>
              Guru Gobind Singh Educational Society's Technical Campus
            </Heading>
            <Box flex={0.2} bgColor={'#fff'} borderRadius={'md'} shadow={2}>
              <Image size={'sm'} w="100%" alt="logo" source={logo_img} />
            </Box>
          </HStack>
          <Box
            color={'white'}
            padding={3}
            w={'100%'}
            bgColor={'secondary.900'}
            borderRadius={'2xl'}>
            <Center mb={6}>
              <VStack alignItems={'center'} justifyContent={'center'} space={2}>
                <Avatar
                  bg="cyan.500"
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: auth_data.profile_url,
                  }}>
                  {auth_data.first_name[0] + auth_data.last_name[0]}
                </Avatar>
                <Heading
                  size={'md'}
                  textTransform={'capitalize'}
                  textAlign={'center'}
                  color={'white'}
                  bold>
                  {auth_data.first_name + ' ' + auth_data.last_name}
                </Heading>
              </VStack>
            </Center>
            <HStack space={2} w="100%">
              <Box flex={1}>
                <HStack space={1} w="100%">
                  <Box flex={0.5}>
                    <Text fontSize={16} color={'muted.300'}>
                      Roll No:
                    </Text>
                    <Text fontSize={16} color={'muted.300'}>
                      Course:
                    </Text>
                    <Text fontSize={16} color={'muted.300'}>
                      Branch:
                    </Text>
                    <Text fontSize={16} color={'muted.300'}>
                      Student Id:
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text fontSize={16} color={'white'} bold>
                      {auth_data.roll_no}
                    </Text>
                    <Text
                      textTransform={'capitalize'}
                      fontSize={16}
                      color={'white'}
                      bold>
                      {auth_data.degree}
                    </Text>
                    <Text
                      textTransform={'capitalize'}
                      fontSize={16}
                      color={'white'}
                      bold>
                      {auth_data.branch}
                    </Text>
                    <Text fontSize={16} color={'white'} bold>
                      {auth_data._id}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box
            color={'white'}
            padding={3}
            w={'100%'}
            bgColor={'secondary.900'}
            borderRadius={'2xl'}>
            <HStack w="100%">
              <Box flex={1}>
                <Text
                  textTransform={'capitalize'}
                  color={'white'}
                  fontSize={16}>
                  {auth_data.address}
                </Text>
              </Box>
              <VStack
                alignItems={'center'}
                justifyContent={'center'}
                space={2}
                flex={1}>
                <QRCode
                  value={auth_data.token}
                  logoSize={30}
                  logoBackgroundColor="transparent"
                />
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Center>
      <Box h={300} />
    </ScrollView>
  );
};

export default Identity;
