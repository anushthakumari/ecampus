import {View} from 'native-base';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ZegoUIKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  AUDIENCE_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';

import useAuth from '../../hooks/useAuth';

function LivePage(props) {
  const {_id: id} = useAuth();
  const isHost = false;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent().setOptions({tabBarVisible: false});

    return () => {
      navigation.getParent().setOptions({tabBarVisible: true});
    };
  }, []);

  return (
    <View w="100%" h="100%">
      <ZegoUIKitPrebuiltLiveStreaming
        appID={1510898812}
        appSign="0f18c9b00a83568aa0e9491d0611c0f70c7cd6a00656f730759bedd52f577e67"
        userID={id}
        userName={'user_' + id}
        liveID="testLiveID"
        config={{
          ...(isHost == true ? HOST_DEFAULT_CONFIG : AUDIENCE_DEFAULT_CONFIG),
          onLeaveLiveStreaming: () => {
            navigation.goBack();
          },
        }}
      />
    </View>
  );
}

export default LivePage;
