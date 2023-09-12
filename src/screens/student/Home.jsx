import {
  ScrollView,
  Text,
  Box,
  Heading,
  HStack,
  Image,
  Center,
  VStack,
  Badge,
  IconButton,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import Loader from '../../components/Loader';
import routenames from '../../constants/routenames';
import collection_schemas from '../../constants/collection_schemas';
import useAuth from '../../hooks/useAuth';

import hand_img from '../../../assets/images/hand.png';
import logo_img from '../../../assets/images/logo.png';
import chatbot_img from '../../../assets/images/cahtbot.png';
import calculator_img from '../../../assets/images/calculator.png';
import marketplace_img from '../../../assets/images/marketplace.png';
import webinar_img from '../../../assets/images/webinar.png';

const screenWidth = Dimensions.get('screen').width;

const sliderWidth = screenWidth - 30;
const itemWidth = sliderWidth - 10;

const Home = () => {
  const navigation = useNavigation();
  const auth_data = useAuth();

  const [notice, setnotice] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleChatPress = () => {
    navigation.navigate(routenames.CHAT_BOX.NAME);
  };
  const handleMenuClick = key => {
    if (routenames.CHAT_BOT.KEY === key) {
      navigation.navigate(routenames.CHAT_BOT.NAME);
      return;
    }
    navigation.navigate(
      routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES[key].NAME,
    );
  };
  const renderCarouselItem = ({item, index}) => {
    return (
      <VStack
        padding={3}
        borderWidth={2}
        backgroundColor={'secondary.50'}
        borderColor={'primary.100'}
        borderRadius={'md'}
        w={'100%'}>
        <VStack space={3}>
          <Badge
            _text={{textTransform: 'capitalize'}}
            borderRadius={'md'}
            w="50%"
            colorScheme="success">
            {item.type}
          </Badge>
          <Heading textTransform={'capitalize'} size={'sm'} bold>
            {item.title}
          </Heading>
          <Text numberOfLines={2}>{item.desc}</Text>
        </VStack>
      </VStack>
    );
  };
  const renderEventsItem = ({item, index}) => {
    return (
      <HStack
        space={2}
        padding={3}
        borderWidth={2}
        backgroundColor={'secondary.50'}
        borderColor={'primary.100'}
        borderRadius={'md'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        w={'100%'}>
        <Image
          flex={0.2}
          src={item.src}
          alt={item.title}
          size={'md'}
          borderColor={'primary.200'}
          borderWidth={2}
          borderRadius={'md'}
        />
        <Heading
          textTransform={'capitalize'}
          flex={0.8}
          size={'sm'}
          fontWeight={600}>
          {item.title}
        </Heading>
      </HStack>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setisLoading(true);
        const notice_coll = await firestore()
          .collection(collection_schemas.materials.name)
          .get();
        const dt = [];
        notice_coll.forEach(d => dt.push(d.data()));
        setnotice(dt);
      } catch (error) {
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <HStack
        justifyContent={'space-between'}
        borderRadius={'md'}
        padding={4}
        mb={3}
        backgroundColor={'secondary.800'}>
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
        <Loader isLoading={isLoading} />
        {notice.length ? (
          <VStack marginTop={3} space={4}>
            <Heading
              width={'50%'}
              borderColor={'secondary.50'}
              borderBottomWidth={5}
              bold>
              Notice Board
            </Heading>
            <Carousel
              data={notice}
              renderItem={renderCarouselItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              loop
              autoplay
            />
          </VStack>
        ) : null}

        <HStack shadow={8} justifyContent={'space-between'}>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.MARKET_PLACE.KEY,
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
            onPress={() => handleMenuClick(routenames.CHAT_BOT.KEY)}>
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
                routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.KEY,
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
                Webinar
              </Text>
            </VStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              handleMenuClick(
                routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.CALCULATOR.KEY,
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

        <HStack
          borderRadius={'md'}
          w="100%"
          alignItems={'center'}
          margin={0}
          padding={0}
          backgroundColor={'primary.500'}
          h={50}>
          <Heading padding={2} color={'white'} flex={3} size={'sm'} bold>
            Join Ongoing Group Chats
          </Heading>
          <VStack
            flex={1}
            justifyContent={'center'}
            margin={0}
            padding={0}
            h={'100%'}
            borderLeftRadius={'3xl'}
            borderRightRadius={'md'}
            backgroundColor={'secondary.500'}>
            <IconButton
              onPress={handleChatPress}
              borderRadius={'xl'}
              size={'md'}
              variant="ghost"
              _icon={{
                size: 'xl',
                color: 'white',
                as: MaterialIcons,
                name: 'arrow-right-alt',
              }}
            />
          </VStack>
        </HStack>

        <VStack marginTop={3} space={4}>
          <Heading
            width={'50%'}
            borderColor={'secondary.50'}
            borderBottomWidth={5}
            bold>
            Highlights
          </Heading>
          <Carousel
            data={highlights}
            renderItem={renderEventsItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            layout="tinder"
            loop
            autoplay
          />
        </VStack>
      </VStack>

      <Box h={300} />
    </ScrollView>
  );
};

export default Home;

var highlights = [
  {
    title: 'TREE PLANTATION @ GGSESTC, KANDRA BY ROTARY CLUB, BOKARO',
    src: 'https://ggsestc.ac.in/images/news-and-events/4060.jpeg',
  },
  {
    title: "WELCOMING NEWLY APPOINTED HON'BLE VICE CHANCELLOR, JUT, RANCHI",
    src: 'https://ggsestc.ac.in/images/news-and-events/4059.jpeg',
  },
  {
    title: 'ONE DAY SEMINAR ON CYBER SECURITY',
    src: 'https://ggsestc.ac.in/images/news-and-events/4057.jpeg',
  },
];
