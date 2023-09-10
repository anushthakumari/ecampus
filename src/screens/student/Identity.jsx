import {
  View,
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

import logo_img from '../../../assets/images/logo.png';

const Identity = () => {
  return (
    <View px={5} pt={3} w="100%" h="100%" bgColor={'white'}>
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
            <HStack w="100%">
              <VStack
                alignItems={'center'}
                justifyContent={'center'}
                space={2}
                flex={1}>
                <Avatar
                  bg="cyan.500"
                  alignSelf="center"
                  size="2xl"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                  }}>
                  HS
                </Avatar>
                <Heading size={'md'} textAlign={'center'} color={'white'} bold>
                  John Doe
                </Heading>
              </VStack>
              <Box flex={1}>
                <HStack w="100%">
                  <Box flex={1}>
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
                      30052
                    </Text>
                    <Text fontSize={16} color={'white'} bold>
                      B-Tech
                    </Text>
                    <Text fontSize={16} color={'white'} bold>
                      CS
                    </Text>
                    <Text fontSize={16} color={'white'} bold>
                      56892
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
                <Text color={'white'} fontSize={16}>
                  177A Bleecker Street, New York City, NY 10012-1406
                </Text>
              </Box>
              <VStack
                alignItems={'center'}
                justifyContent={'center'}
                space={2}
                flex={1}>
                <QRCode
                  value="Just some string value"
                  logoSize={30}
                  logoBackgroundColor="transparent"
                />
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </View>
  );
};

export default Identity;
