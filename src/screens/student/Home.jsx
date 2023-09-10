import {ScrollView, Text, Box, Heading, HStack, Image} from 'native-base';
import React from 'react';

import hand_img from '../../../assets/images/hand.png';

const Home = () => {
  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      <HStack
        justifyContent={'space-between'}
        borderRadius={'md'}
        padding={4}
        backgroundColor={'secondary.800'}>
        <Box flex={0.8}>
          <Heading color={'white'} bold>
            Hello,
          </Heading>
          <Heading color={'white'} size={'md'} bold>
            Abhishek!
          </Heading>
        </Box>
        <Image flex={0.2} source={hand_img} alt="hii" size={'md'} />
      </HStack>
    </ScrollView>
  );
};

export default Home;
