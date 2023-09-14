import {View, Button, Center} from 'native-base';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  AUDIENCE_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {ZEGO_APP_ID, ZEGO_APP_SIGN} from '@env';

import useAuth from '../../hooks/useAuth';

function WebinarHost(props) {
  const {_id: id, first_name} = useAuth();
  const isHost = true;
  const [is_hosting, setis_hosting] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent().setOptions({tabBarVisible: false});

    return () => {
      navigation.getParent().setOptions({tabBarVisible: true});
    };
  }, []);

  return (
    <View w="100%" h="100%">
      {is_hosting ? (
        <ZegoUIKitPrebuiltLiveStreaming
          appID={parseInt(ZEGO_APP_ID)}
          appSign={ZEGO_APP_SIGN}
          userID={id}
          userName={first_name}
          liveID="testLiveID"
          config={{
            ...(isHost == true ? HOST_DEFAULT_CONFIG : AUDIENCE_DEFAULT_CONFIG),
            onLeaveLiveStreaming: () => {
              setis_hosting(false);
            },
          }}
        />
      ) : (
        <Center w="100%" h="100%">
          <Button onPress={() => setis_hosting(true)}>Start A Webinar!</Button>
        </Center>
      )}
    </View>
  );
}

export default WebinarHost;
