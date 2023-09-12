import {
  ScrollView,
  Text,
  Box,
  Heading,
  HStack,
  Image,
  Center,
  VStack,
} from 'native-base';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import routenames from '../../constants/routenames';
import useAuth from '../../hooks/useAuth';

import hand_img from '../../../assets/images/hand.png';
import logo_img from '../../../assets/images/logo.png';
import chatbot_img from '../../../assets/images/cahtbot.png';
import calculator_img from '../../../assets/images/calculator.png';
import marketplace_img from '../../../assets/images/marketplace.png';
import webinar_img from '../../../assets/images/webinar.png';
import manage_profile_img from '../../../assets/images/manage_profile.png';
import manage_notice_img from '../../../assets/images/manage_notice.png';
import verify_img from '../../../assets/images/verify.png';

const screenWidth = Dimensions.get('screen').width;

const Home = () => {
  const navigation = useNavigation();
  const auth_data = useAuth();

  const handleMenuClick = key => {
    navigation.navigate(routenames.TEACHER.SUB_ROUTES[key].NAME);
  };

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <HStack
        justifyContent={'space-between'}
        borderRadius={'md'}
        padding={4}
        mb={3}
        backgroundColor={'primary.800'}>
        <Box flex={0.8}>
          <Heading
            size={'sm'}
            textTransform={'capitalize'}
            color={'white'}
            bold>
            Hello, welcome to
          </Heading>
          <Heading size={'md'} color={'white'} bold>
            GGSESTC's E-campus
          </Heading>
          <Heading
            color={'white'}
            textTransform={'capitalize'}
            size={'md'}
            bold>
            {auth_data.first_name}!
          </Heading>
        </Box>
        <Box flex={0.2}>
          <Image source={hand_img} alt="hii" size={'sm'} />
        </Box>
      </HStack>

      <Center mb={5}>
        <Box>
          <Image source={logo_img} alt="logo" />
          <Heading textAlign={'center'} bold>
            GGSESTC
          </Heading>
        </Box>
      </Center>

      <VStack space={6}>
        <HStack justifyContent={'space-between'}>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(routenames.TEACHER.SUB_ROUTES.TEACHER_PROFILE.KEY)
            }>
            <VStack
              borderRadius={'md'}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              borderWidth={2}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                size={'xl'}
                alt="market place"
                source={manage_profile_img}
              />
              <Text textAlign={'center'} bold>
                Manage Profile
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(routenames.TEACHER.SUB_ROUTES.TEACHER_NOTICE.KEY)
            }>
            <VStack
              borderRadius={'md'}
              borderWidth={2}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                size={'xl'}
                alt="market place"
                source={manage_notice_img}
              />
              <Text textAlign={'center'} bold>
                Manage Notice
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
        <HStack shadow={8} justifyContent={'space-between'}>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.TEACHER.SUB_ROUTES.TEACHER_MARKET_PLACE.KEY,
              )
            }>
            <VStack
              borderRadius={'md'}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              borderWidth={2}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image size={'xl'} alt="market place" source={marketplace_img} />
              <Text textAlign={'center'} bold>
                Market Place
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.TEACHER.SUB_ROUTES.TEACHER_CHAT_BOT.KEY,
              )
            }>
            <VStack
              borderRadius={'md'}
              borderWidth={2}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image size={'xl'} alt="market place" source={chatbot_img} />
              <Text textAlign={'center'} bold>
                Chat Bot
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>

        <HStack justifyContent={'space-between'}>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.TEACHER.SUB_ROUTES.TEACHER_WEBINAR_LIVE.KEY,
              )
            }>
            <VStack
              borderRadius={'md'}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              borderWidth={2}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image size={'xl'} alt="market place" source={webinar_img} />
              <Text textAlign={'center'} bold>
                Host A Webinar
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.TEACHER.SUB_ROUTES.TEACHER_CALCULATOR.KEY,
              )
            }>
            <VStack
              borderRadius={'md'}
              borderWidth={2}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image size={'xl'} alt="market place" source={calculator_img} />
              <Text textAlign={'center'} bold>
                CGPA Calculator
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>

        <HStack justifyContent={'space-between'}>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(routenames.TEACHER.SUB_ROUTES.ID_VERIFY.KEY)
            }>
            <VStack
              borderRadius={'md'}
              borderColor={'secondary.50'}
              width={screenWidth / 2.3}
              borderWidth={2}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image size={'xl'} alt="market place" source={verify_img} />
              <Text textAlign={'center'} bold>
                Verify Student ID
              </Text>
            </VStack>
          </TouchableOpacity>
        </HStack>
      </VStack>

      <Box h={300} />
    </ScrollView>
  );
};

export default Home;
