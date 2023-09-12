import {Center, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import routenames from '../../constants/routenames';

function WebinarHome() {
  const navigation = useNavigation();
  return (
    <Center w="100%" h="100%">
      <Button
        onPress={() => {
          navigation.navigate(
            routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
              .WEBINAR_LIVE.NAME,
            {isHost: true},
          );
        }}>
        Start a Live
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(
            routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
              .WEBINAR_LIVE.NAME,
            {isHost: false},
          );
        }}>
        Watch a live
      </Button>
    </Center>
  );
}

export default WebinarHome;
