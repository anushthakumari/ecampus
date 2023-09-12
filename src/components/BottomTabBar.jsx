import React from 'react';

import {View, Pressable, Dimensions, StyleSheet} from 'react-native';
import {Icon, IconButton, Box, Text} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../constants/colors';
import routenames from '../constants/routenames';

const {width} = Dimensions.get('window');

const BottomTabBar = ({state, descriptors, navigation}) => {
  const do_hide = state.routes.some(route => {
    const {options} = descriptors[route.key];
    return options.tabBarVisible === false;
  });

  if (do_hide) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconprops = getIconProps(route.name);

        return (
          <Box key={index} flex={1} margin={5}>
            <IconButton
              colorScheme={isFocused ? 'primary' : 'secondary'}
              borderRadius={'xl'}
              onPress={onPress}
              size={'md'}
              variant="solid"
              _icon={iconprops}
            />
            {isFocused ? (
              <Text color={'white'} textAlign={'center'} fontSize={12}>
                {label}
              </Text>
            ) : null}
          </Box>
        );

        // return (
        //   <View
        //     key={index}
        //     style={[
        //       styles.mainItemContainer,
        //       {borderRightWidth: label == 'notes' ? 3 : 0},
        //     ]}>
        //     <Pressable
        //       onPress={onPress}
        //       style={{
        //         backgroundColor: isFocused ? '#030D16' : '#182028',
        //         borderRadius: 20,
        //       }}>
        //       <View
        //         style={{
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           flex: 1,
        //           padding: 15,
        //         }}>
        //         <Icon
        //           as={<MaterialIcons name="person" />}
        //           size={5}
        //           ml="2"
        //           color="muted.400"
        //         />
        //       </View>
        //     </Pressable>
        //   </View>
        // );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#182028',
    borderRadius: 25,
    marginHorizontal: width * 0.1,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
});

export default BottomTabBar;

function getIconProps(name) {
  switch (name) {
    case routenames.STUDENT.SUB_ROUTES.HOME.NAME:
      return {
        as: MaterialIcons,
        name: 'home',
      };

    case routenames.STUDENT.SUB_ROUTES.STUDENT_ID.NAME:
      return {
        as: MaterialCommunityIcons,
        name: 'card-account-details',
      };

    case routenames.STUDENT.SUB_ROUTES.NOTICE.NAME:
      return {
        as: MaterialCommunityIcons,
        name: 'bell',
      };
    case routenames.STUDENT.SUB_ROUTES.PROFILE.NAME:
      return {
        as: MaterialIcons,
        name: 'person',
      };

    default:
      return {
        as: MaterialIcons,
        name: 'person',
      };
  }
}
