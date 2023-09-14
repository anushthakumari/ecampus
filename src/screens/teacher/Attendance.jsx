import {
  View,
  Text,
  ScrollView,
  Input,
  Heading,
  VStack,
  HStack,
  Box,
  Center,
  Pressable,
} from 'native-base';
import React, {useState, useEffect} from 'react';

import Loader from '../../components/Loader';

const Attendance = () => {
  const [text, settext] = useState('');
  const [isLoding, setisLoding] = useState(false);
  const [user_data, setuser_data] = useState(null);
  const [sugesstions, setsugesstions] = useState([]);

  const handlePress = v => {
    setisLoding(true);
    settext('');

    setTimeout(() => {
      setuser_data(v);
      setisLoding(false);
    }, 500);
  };

  useEffect(() => {
    if (text) {
      const data = user_att.filter(v =>
        v.name.toLowerCase().includes(text.toLowerCase()),
      );
      setsugesstions(data);
    } else {
      setsugesstions([]);
    }
  }, [text]);

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <Box position={'relative'}>
        <Input
          value={text}
          onChangeText={settext}
          size={'2xl'}
          placeholder="Search Student Name"
        />
        <Loader isLoading={isLoding} />
        {sugesstions.length ? (
          <VStack backgroundColor={'muted.50'} width={'100%'}>
            {sugesstions.map((v, i) => (
              <Pressable
                key={i}
                padding={3}
                borderBottomWidth={1}
                borderColor={'muted.200'}
                onPress={handlePress.bind(this, v)}>
                <Text fontSize={16}>{v.name}</Text>
              </Pressable>
            ))}
          </VStack>
        ) : null}
      </Box>

      {user_data ? (
        <VStack>
          <View mt={8}>
            <Heading underline>Personal Details</Heading>
            <VStack mt={3}>
              <VStack space={4}>
                <Box>
                  <Heading color={'muted.500'} size="sm">
                    Full Name
                  </Heading>
                  <Heading textTransform={'capitalize'} bold>
                    {user_data.name}
                  </Heading>
                </Box>
                <HStack>
                  <Box flex={1}>
                    <Heading size="sm" color={'muted.500'}>
                      Student Id
                    </Heading>
                    <Heading bold>{user_data.student_id}</Heading>
                  </Box>
                </HStack>
                <HStack>
                  <Box flex={1}>
                    <Heading size="sm" color={'muted.500'}>
                      Gender
                    </Heading>
                    <Heading textTransform={'capitalize'} bold>
                      {user_data.gender}
                    </Heading>
                  </Box>
                  <Box flex={1}>
                    <Heading size="sm" color={'muted.500'}>
                      Medium
                    </Heading>
                    <Heading bold>English</Heading>
                  </Box>
                </HStack>
              </VStack>
            </VStack>
          </View>
          <View mt={20}>
            <Center>
              <Heading underline>Total Attendance</Heading>
              <Heading color={'primary.500'} size={'2xl'} bold>
                {user_data.percent}%
              </Heading>
            </Center>
          </View>
        </VStack>
      ) : null}
    </ScrollView>
  );
};

export default Attendance;

var user_att = [
  {
    name: 'Nitin Yadav',
    roll_number: 4441,
    student_id: '64ff457d2ee33c312fb592a2',
    gender: 'Male',
    percent: '80',
  },
  {
    name: 'Raj Malhar',
    roll_number: 4252,
    student_id: '6500317f25c8d0b06272a74a',
    gender: 'Male',
    percent: '60',
  },
  {
    name: 'Gopinath Singh',
    roll_number: 4368,
    student_id: '64afa9168d2cddb99d14be1a',
    gender: 'Male',
    percent: '70',
  },
  {
    name: 'Prem Chaudhri',
    roll_number: 4369,
    student_id: '64afa9168d2cddb99d14be1b',
    gender: 'Male',
    percent: '90',
  },
];
