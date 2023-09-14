import {Pressable} from 'native-base';
import {useDispatch} from 'react-redux';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';

import {
  setVisibility,
  toggleVisibilty,
} from '../redux/reducers/tab_bar_visibility';

const withTabBarVisibilty = Comp => props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(toggleVisibilty());
  };

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        dispatch(setVisibility(false));
      }, 1000);
    }, [dispatch]),
  );

  return (
    <Pressable onPress={handlePress}>
      <Comp {...props} />
    </Pressable>
  );
};

export default withTabBarVisibilty;
