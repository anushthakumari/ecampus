import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginRoutes from './routes/Login.routes';
import StudentRoutes from './routes/Student.routes';
import Chatbot from './screens/student/Chatbot';

import routenames from './constants/routenames';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

export default function App() {
  const {isLoggedIn} = useAuth();

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routenames.LOGIN.NAME}
            component={StudentRoutes}
          />
          <Stack.Screen
            name={routenames.CHAT_BOT.NAME}
            options={{
              headerTitle: routenames.CHAT_BOT.LABEL,
              headerTitleStyle: {
                fontFamily: 'Urbanist-SemiBold',
              },
            }}
            component={Chatbot}
          />
        </>
      ) : (
        <Stack.Screen
          name={routenames.LOGIN.NAME}
          options={{
            headerShown: false,
          }}
          component={LoginRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
