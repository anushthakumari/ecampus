import {
  View,
  ScrollView,
  Text,
  Center,
  Avatar,
  Box,
  Heading,
  VStack,
  HStack,
  Icon,
  Pressable,
} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import routenames from '../../constants/routenames';
import {setUser} from '../../redux/reducers/auth';

const menuOptions = [
  {
    label: 'Personal Details',
    icon: 'person',
    key: routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.PERSONAL_DETAILS.KEY,
  },
  {
    label: 'Contact Details',
    icon: 'call',
    key: routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.CONTACT_DETAILS.KEY,
  },
  {
    label: 'Postal Details',
    icon: 'home',
    key: routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.POSTAL_DETAILS.KEY,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = (key = '') => {
    navigation.navigate(
      routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES[key].NAME,
    );
  };

  const handleLogout = () => {
    dispatch(setUser({isLoggedIn: false}));
  };

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <Center w="100%">
        <VStack space={4}>
          <Avatar
            bg="cyan.500"
            alignSelf="center"
            size="2xl"
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}>
            HS
          </Avatar>
          <Box>
            <Heading size={'xl'} textAlign={'center'} bold>
              John Doe
            </Heading>
            <Box alignItems={'center'}>
              <Heading size={'sm'} textAlign={'center'}>
                B-Tech
              </Heading>
              <Heading size={'sm'} textAlign={'center'}>
                Computer Science
              </Heading>
            </Box>
          </Box>
        </VStack>
      </Center>
      <VStack mt={8}>
        {menuOptions.map((v, i) => (
          <Pressable onPress={() => handlePress(v.key)} key={i}>
            <HStack
              justifyContent={'space-between'}
              alignItems={'center'}
              space={2}
              padding={4}>
              <Icon
                as={<MaterialIcons name={v.icon} color={'black'} />}
                size={6}
              />
              <Text textTransform={'capitalize'} fontSize={20} flex={1}>
                {v.label}
              </Text>
              <Icon
                as={<MaterialIcons name="chevron-right" color={'black'} />}
                size={6}
              />
            </HStack>
          </Pressable>
        ))}

        <Pressable onPress={handleLogout}>
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            space={2}
            padding={4}>
            <Icon
              as={<MaterialIcons name={'logout'} color={'black'} />}
              size={6}
            />
            <Text textTransform={'capitalize'} fontSize={20} flex={1}>
              Log Out
            </Text>
          </HStack>
        </Pressable>
      </VStack>
    </ScrollView>
  );
};

export default Profile;
