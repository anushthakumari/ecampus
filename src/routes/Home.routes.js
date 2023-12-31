import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/student/Home';
import MarketPlace from '../screens/student/MarketPlace';
import Calculator from '../screens/student/Calculator';
import WebinarLive from '../screens/student/WebinarLive';
import withTabBarVisibilty from '../components/withTabBarVisibilty';

import routenames from '../constants/routenames';
import {Box} from 'native-base';

const Stack = createStackNavigator();

function HomeRoutes() {
  return (
    <Box h="100%">
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Urbanist-SemiBold',
          },
        }}>
        <Stack.Screen
          name={routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.MAIN_HOME.NAME}
          options={{
            headerShown: false,
            headerTitle:
              routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.MAIN_HOME.LABEL,
          }}
          component={Home}
        />
        <Stack.Screen
          name={routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.MARKET_PLACE.NAME}
          options={{
            headerTitle:
              routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.MARKET_PLACE.LABEL,
          }}
          component={MarketPlace}
        />
        <Stack.Screen
          name={routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.NAME}
          options={{
            headerTitle:
              routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.WEBINAR.LABEL,
          }}
          component={WebinarLive}
        />
        <Stack.Screen
          name={routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.CALCULATOR.NAME}
          options={{
            headerTitle:
              routenames.STUDENT.SUB_ROUTES.HOME.SUB_ROUTES.CALCULATOR.LABEL,
          }}
          component={Calculator}
        />
      </Stack.Navigator>
    </Box>
  );
}

export default withTabBarVisibilty(HomeRoutes);
