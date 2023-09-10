import React from 'react';
import {View, Image} from 'native-base';
import Onboard from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

import colors from '../constants/colors';
import routenames from '../constants/routenames';

const Onboarding = () => {
  const navigation = useNavigation();

  const handleComplete = () => {
    navigation.navigate(routenames.LOGIN.SUB_ROUTES.LOGIN_TYPE.NAME);
  };

  return (
    <View h={'100%'}>
      <Onboard
        titleStyles={{
          fontFamily: 'Urbanist-Bold',
        }}
        subTitleStyles={{
          fontFamily: 'Urbanist-Bold',
        }}
        showSkip={false}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                size={'2xl'}
                alt="onboard 1"
                source={require('../../assets/images/onboard_1.png')}
              />
            ),
            title: 'Announcements',
            subtitle: 'Get Notified Of The Notices And Announcements',
          },
          {
            backgroundColor: colors.secondary[50],
            image: (
              <Image
                size={'2xl'}
                alt="onboard 2"
                source={require('../../assets/images/onboard_2.png')}
              />
            ),
            title: 'ID Card',
            subtitle: 'Your Identity Is In Your Phone',
          },
          {
            backgroundColor: colors.primary[50],
            image: (
              <Image
                size={'2xl'}
                alt="onboard 3"
                source={require('../../assets/images/onboard_3.png')}
              />
            ),
            title: 'Profile',
            subtitle: 'Get Your Details In One Tap',
          },
        ]}
        controlStatusBar
        onDone={handleComplete}
      />
    </View>
  );
};

export default Onboarding;
