import {createStackNavigator} from '@react-navigation/stack';

import WebinarHome from '../screens/student/WebinarHome';
import WebinarLive from '../screens/student/WebinarLive';

import routenames from '../constants/routenames';

const Stack = createStackNavigator();

function WebinarRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
            .WEBINAR_HOST.NAME
        }
        options={{
          headerTitle:
            routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
              .WEBINAR_HOST.LABEL,
        }}
        component={WebinarHome}
      />
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
            .WEBINAR_LIVE.NAME
        }
        options={{
          headerTitle:
            routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.SUB_ROUTES
              .WEBINAR_LIVE.LABEL,
        }}
        component={WebinarLive}
      />
    </Stack.Navigator>
  );
}

export default WebinarRoutes;
