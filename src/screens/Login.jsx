import {
  View,
  Text,
  Image,
  Center,
  VStack,
  Heading,
  Stack,
  Input,
  Button,
  Box,
  Icon,
  WarningOutlineIcon,
  FormControl,
  KeyboardAvoidingView,
} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Platform} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useRoute} from '@react-navigation/native';

import useKeyboardOpen from '../hooks/useKeyboardOpen';
import {setUser} from '../redux/reducers/auth';
import {postRequest} from '../utils/axios.utils';
import vars from '../constants/vars';

import logo_img from '../../assets/images/logo.png';
import grd_img from '../../assets/images/grd_1.png';

const Login = () => {
  const {params} = useRoute();
  const type = params.type;

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [errState, seterrState] = useState({
    email: '',
    pass: '',
  });

  const isKeyboardOpen = useKeyboardOpen();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setisLoading(true);
      let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
      if (!regex.test(email)) {
        seterrState({email: 'Invalid email!'});
        return;
      }

      if (pass.length > 12 || pass.length < 6) {
        seterrState({
          pass: 'password cannot be less than 6 characters and more than 12 characters!',
        });
        return;
      }

      const request_url =
        type === vars.LOGIN_TYPES.TEACHER ? 'teachers/login' : 'students/login';

      const {data} = await postRequest(request_url, {
        email: email.trim(),
        password: pass.trim(),
      });

      dispatch(setUser({isLoggedIn: true, type, ...data}));
    } catch (error) {
      if (error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('something went wrong!');
      }
    } finally {
      setisLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      bgColor={'#fff'}
      h="100%"
      w="100%">
      <VStack h="100%">
        <Image
          alt="college campus"
          position={'absolute'}
          zIndex={-2}
          h={'30%'}
          w={'100%'}
          borderBottomRightRadius={500}
          source={grd_img}
        />
        <Center h="30%" marginTop={6}>
          <Box padding={1} bgColor={'#fff'} borderRadius={'md'} shadow={2}>
            <Image alt="logo" source={logo_img} />
          </Box>
        </Center>
        <Center w="100%" h="50%">
          <VStack w="100%" h="100%" px={8} space={6}>
            <Box>
              <Heading size={'2xl'} bold>
                Welcome Back!
              </Heading>
              <Heading size={'sm'}>We're happy to see you!</Heading>
            </Box>
            <Stack w="100%" space={4}>
              <FormControl isInvalid={errState.email} w="100%" isRequired>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  size="2xl"
                  value={email}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  onChangeText={setemail}
                  placeholder="Email"
                  type="email"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errState.email}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl isInvalid={errState.pass} w="100%" isRequired>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  size="2xl"
                  value={pass}
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="lock" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  onChangeText={setpass}
                  placeholder="password"
                  type="password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errState.pass}
                </FormControl.ErrorMessage>
              </FormControl>

              <Button
                onPress={handleSubmit}
                isLoading={isLoading}
                endIcon={
                  <Icon
                    as={<MaterialIcons name="arrow-forward" />}
                    size={5}
                    ml="2"
                  />
                }
                alignSelf={'flex-end'}
                w={'50%'}>
                Login
              </Button>
            </Stack>
          </VStack>
        </Center>
        {!isKeyboardOpen ? (
          <VStack w="100%" h="20%">
            <Center
              borderTopLeftRadius={500}
              h="100%"
              bgColor={'secondary.600'}>
              <Text textAlign={'center'} color={'white'}>
                E-campus By
              </Text>
              <Text textAlign={'center'} color={'white'}>
                Guru Gobind Singh Educational Society's
              </Text>
              <Text textAlign={'center'} color={'white'}>
                Technical Campus
              </Text>
            </Center>
          </VStack>
        ) : null}
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default Login;
