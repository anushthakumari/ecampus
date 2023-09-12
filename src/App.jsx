import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginRoutes from './routes/Login.routes';
import StudentRoutes from './routes/Student.routes';
import TeacherRoutes from './routes/Teacher.routes';
import Chatbot from './screens/student/Chatbot';
import ChatBox from './screens/student/ChatBox';

import routenames from './constants/routenames';
import useAuth from './hooks/useAuth';
import vars from './constants/vars';

const Stack = createStackNavigator();

export default function App() {
  const {isLoggedIn, type} = useAuth();

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        type === vars.LOGIN_TYPES.TEACHER ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routenames.TEACHER.NAME}
            component={TeacherRoutes}
          />
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name={routenames.STUDENT.NAME}
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
            <Stack.Screen
              name={routenames.CHAT_BOX.NAME}
              options={{
                headerTitle: routenames.CHAT_BOX.LABEL,
                headerTitleStyle: {
                  fontFamily: 'Urbanist-SemiBold',
                },
              }}
              component={ChatBox}
            />
          </>
        )
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
