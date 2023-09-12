import {
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
import {useDispatch} from 'react-redux';

import useAuth from '../../hooks/useAuth';
import {setUser} from '../../redux/reducers/auth';

const Profile = () => {
  const dispatch = useDispatch();
  const auth_data = useAuth();

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
                {auth_data.role}
              </Heading>
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
                Teacher Id
              </Heading>
              <Heading size={'lg'} bold>
                {auth_data._id}
              </Heading>
            </Box>
          </HStack>
          <HStack>
            <Box flex={1}>
              <Heading size="sm" color={'muted.500'}>
                Designation
              </Heading>
              <Heading textTransform={'capitalize'} size={'lg'} bold>
                {auth_data.role}
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
        </VStack>
      </VStack>
      <Pressable mt={10} onPress={handleLogout}>
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          space={2}>
          <Icon
            as={<MaterialIcons name={'logout'} color={'black'} />}
            size={6}
          />
          <Text textTransform={'capitalize'} fontSize={20} flex={1}>
            Log Out
          </Text>
        </HStack>
      </Pressable>
      <Box h={300} />
    </ScrollView>
  );
};

export default Profile;
