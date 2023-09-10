import {View, Text, Center, VStack, Heading, Image, Box} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import routenames from '../constants/routenames';

import teacher_img from '../../assets/images/teacher.png';
import student_img from '../../assets/images/studen.png';

const LoginType = () => {
  const navigation = useNavigation();

  const handlePress = (type = '') => {
    navigation.navigate(routenames.LOGIN.SUB_ROUTES.LOGIN_MAIN.NAME, {
      type,
    });
  };

  return (
    <View bgColor={'#fff'} w="100%" h="100%">
      <Center w="100%" h="100%">
        <VStack space={4}>
          <Heading textAlign="center" size={'xl'} bold>
            Who are you?
          </Heading>
          <TouchableOpacity onPress={() => handlePress('student')}>
            <Box
              padding={2}
              borderWidth={1}
              borderColor={'gray.600'}
              borderRadius={'xl'}>
              <Image alt="Student" source={student_img} size={'2xl'} />
              <Text fontSize={18} textAlign={'center'} bold>
                Student
              </Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('teacher')}>
            <Box
              padding={2}
              borderWidth={1}
              borderColor={'gray.600'}
              borderRadius={'xl'}>
              <Image alt="Teacher" source={teacher_img} size={'2xl'} />
              <Text fontSize={18} textAlign={'center'} bold>
                Teacher
              </Text>
            </Box>
          </TouchableOpacity>
        </VStack>
      </Center>
    </View>
  );
};

export default LoginType;
