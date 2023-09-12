import {Button, Box, Text, View} from 'native-base';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

import Loader from '../../components/Loader';

const VerifyStudent = () => {
  const navigation = useNavigation();
  const onSuccess = e => {
    console.log(e.data);
  };
  return (
    <View h="100%" w="100%">
      <Loader isLoading={true} />
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
    </View>
  );
};

export default VerifyStudent;
