import {
  Button,
  Box,
  Text,
  View,
  Center,
  VStack,
  Heading,
  Avatar,
  HStack,
  Icon,
} from 'native-base';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Loader from '../../components/Loader';
import {getRequest} from '../../utils/axios.utils';

const VerifyStudent = () => {
  const [isLoading, setisLoading] = useState(false);
  const [result, setresult] = useState(null);

  const navigation = useNavigation();

  const onSuccess = async e => {
    try {
      const student_id = e.data;
      setisLoading(true);
      const {data} = await getRequest(`teachers/verify-student`, {
        params: {id: student_id},
      });
      console.log(data);
      setresult(data);
    } catch (error) {
      alert('User Verification Failed!!');
    } finally {
      setisLoading(false);
    }
  };
  return (
    <View h="100%" w="100%">
      {isLoading ? (
        <Center w={'100%'} h="100%">
          <Loader isLoading={true} />
        </Center>
      ) : null}

      {!isLoading && !result ? (
        <QRCodeScanner
          onRead={onSuccess}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Box px={4}>
              <Text bold>
                Scan student's id card from Ecampus App For Students
              </Text>
            </Box>
          }
          bottomContent={
            <Button onPress={() => navigation.goBack()}>Exit</Button>
          }
        />
      ) : null}

      {result ? (
        <Box
          color={'white'}
          padding={3}
          w={'100%'}
          bgColor={'secondary.900'}
          borderRadius={'2xl'}>
          <HStack alignItems={'center'}>
            <Icon
              color={'green.500'}
              alignSelf={'center'}
              as={<MaterialIcons name="verified" />}
              size={6}
            />
            <Heading color={'white'} mb={4}>
              Verified Student
            </Heading>
          </HStack>
          <Center mb={6}>
            <VStack alignItems={'center'} justifyContent={'center'} space={2}>
              <Avatar
                bg="cyan.500"
                alignSelf="center"
                size="xl"
                source={{
                  uri: result.profile_url,
                }}>
                {result.first_name?.[0] + result.last_name?.[0]}
              </Avatar>
              <Heading
                size={'md'}
                textTransform={'capitalize'}
                textAlign={'center'}
                color={'white'}
                bold>
                {result.first_name + ' ' + result.last_name}
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
                    {result.roll_no}
                  </Text>
                  <Text
                    textTransform={'capitalize'}
                    fontSize={16}
                    color={'white'}
                    bold>
                    {result.degree}
                  </Text>
                  <Text
                    textTransform={'capitalize'}
                    fontSize={16}
                    color={'white'}
                    bold>
                    {result.branch}
                  </Text>
                  <Text fontSize={16} color={'white'} bold>
                    {result._id}
                  </Text>
                </Box>
              </HStack>
            </Box>
          </HStack>
          <Button mt={4} onPress={() => setresult(null)}>
            Scan Again
          </Button>
        </Box>
      ) : null}
    </View>
  );
};

export default VerifyStudent;
