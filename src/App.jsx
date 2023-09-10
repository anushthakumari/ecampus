import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginRoutes from './routes/Login.routes';
import StudentRoutes from './routes/Student.routes';

import routenames from './constants/routenames';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

export default function App() {
  const {isLoggedIn} = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <Stack.Screen name={routenames.LOGIN.NAME} component={StudentRoutes} />
      ) : (
        <Stack.Screen name={routenames.STUDENT.NAME} component={LoginRoutes} />
      )}
    </Stack.Navigator>
  );
}
