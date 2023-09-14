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
import useAuth from '../../hooks/useAuth';
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
  {
    label: 'Academic Details',
    icon: 'auto-graph',
    key: routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.ACADEMIC_DETAILS.KEY,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth_data = useAuth();

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
              uri: auth_data.profile_url,
            }}>
            {auth_data.first_name?.[0] + auth_data.last_name?.[0]}
          </Avatar>
          <Box>
            <Heading
              textTransform={'capitalize'}
              size={'xl'}
              textAlign={'center'}
              bold>
              {auth_data.first_name + ' ' + auth_data.last_name}
            </Heading>
            <Box alignItems={'center'}>
              <Heading
                textTransform={'capitalize'}
                size={'sm'}
                textAlign={'center'}>
                {auth_data.degree}
              </Heading>
              <Heading
                textTransform={'capitalize'}
                size={'sm'}
                textAlign={'center'}>
                {auth_data.branch}
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
