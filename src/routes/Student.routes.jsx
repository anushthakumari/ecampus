import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';

import BottomTabBar from '../components/BottomTabBar';
import Home from '../screens/student/Home';
import Identity from '../screens/student/Identity';
import Notice from '../screens/student/Notice';
import ProfileRoutes from './Profile.routes';

import routenames from '../constants/routenames';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const screenH = Dimensions.get('screen').height;
const headerH = screenH / 12;

function StudentRoutes() {
  return (
    <Tab.Navigator
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
          borderColor: colors.primary[500],
        },
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name={routenames.STUDENT.SUB_ROUTES.HOME.NAME}
        options={{
          tabBarLabel: routenames.STUDENT.SUB_ROUTES.HOME.LABEL,
          headerTitle: routenames.STUDENT.SUB_ROUTES.HOME.LABEL,
        }}
        component={Home}
      />
      <Tab.Screen
        name={routenames.STUDENT.SUB_ROUTES.STUDENT_ID.NAME}
        options={{
          tabBarLabel: routenames.STUDENT.SUB_ROUTES.STUDENT_ID.LABEL,
          headerTitle: routenames.STUDENT.SUB_ROUTES.STUDENT_ID.LABEL,
        }}
        component={Identity}
      />
      <Tab.Screen
        name={routenames.STUDENT.SUB_ROUTES.NOTICE.NAME}
        options={{
          tabBarLabel: routenames.STUDENT.SUB_ROUTES.NOTICE.LABEL,
          headerTitle: routenames.STUDENT.SUB_ROUTES.NOTICE.LABEL,
        }}
        component={Notice}
      />
      <Tab.Screen
        name={routenames.STUDENT.SUB_ROUTES.PROFILE.NAME}
        options={{
          tabBarLabel: routenames.STUDENT.SUB_ROUTES.PROFILE.LABEL,
          headerTitle: routenames.STUDENT.SUB_ROUTES.PROFILE.LABEL,
        }}
        component={ProfileRoutes}
      />
    </Tab.Navigator>
  );
}

export default StudentRoutes;
