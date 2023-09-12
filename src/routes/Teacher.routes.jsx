import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions} from 'react-native';

import Home from '../screens/teacher/Home';
import WebinarHost from '../screens/teacher/WebinarHost';
import Profile from '../screens/teacher/Profile';
import Notice from '../screens/teacher/Notice';
import VerifyStudent from '../screens/teacher/VerifyStudent';

import Calculator from '../screens/student/Calculator';
import Chatbot from '../screens/student/Chatbot';
import MarketPlace from '../screens/student/MarketPlace';

import routenames from '../constants/routenames';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const screenH = Dimensions.get('screen').height;
const headerH = screenH / 12;

function TeacherRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackgroundContainerStyle: {
          height: headerH,
        },

        headerStyle: {
          backgroundColor: 'white',
          height: headerH,
        },

        headerTitleStyle: {
          fontFamily: 'Urbanist-SemiBold',
          textAlign: 'center',
          borderBottomWidth: 8,
          borderColor: colors.secondary[500],
        },
      }}>
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_HOME.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_HOME.LABEL,
        }}
        component={Home}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_CALCULATOR.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_CALCULATOR.LABEL,
        }}
        component={Calculator}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_CHAT_BOT.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_CHAT_BOT.LABEL,
        }}
        component={Chatbot}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_MARKET_PLACE.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_MARKET_PLACE.LABEL,
        }}
        component={MarketPlace}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_WEBINAR_LIVE.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_WEBINAR_LIVE.LABEL,
        }}
        component={WebinarHost}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_PROFILE.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_PROFILE.LABEL,
        }}
        component={Profile}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.TEACHER_NOTICE.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.TEACHER_NOTICE.LABEL,
        }}
        component={Notice}
      />
      <Stack.Screen
        name={routenames.TEACHER.SUB_ROUTES.ID_VERIFY.NAME}
        options={{
          headerTitle: routenames.TEACHER.SUB_ROUTES.ID_VERIFY.LABEL,
        }}
        component={VerifyStudent}
      />
    </Stack.Navigator>
  );
}

export default TeacherRoutes;
